#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const rulesDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(rulesDirectory, "..");
const manifestPath = path.join(rulesDirectory, "perifit-ds.mapping.json");
const allowedStatuses = new Set(["matched", "candidate", "unmapped", "conflict"]);
const errors = [];

const fail = (message) => errors.push(message);
const assert = (condition, message) => {
  if (!condition) fail(message);
};

const readJson = (filePath) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.error(`Mapping illisible: ${error.message}`);
    process.exit(1);
  }
};

const manifest = readJson(manifestPath);

const absolute = (relativePath) => path.resolve(repositoryRoot, relativePath);
const pathExists = (relativePath) => typeof relativePath === "string" && fs.existsSync(absolute(relativePath));
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const resolveModule = (fromFile, specifier) => {
  const base = path.resolve(path.dirname(fromFile), specifier);
  const candidates = [`${base}.ts`, `${base}.tsx`, path.join(base, "index.ts"), path.join(base, "index.tsx"), base];
  return candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
};

const collectPublicExports = (entryFile) => {
  const exports = new Set();
  const visited = new Set();

  const visit = (filePath) => {
    if (!filePath || visited.has(filePath)) return;
    visited.add(filePath);

    const source = fs.readFileSync(filePath, "utf8");
    for (const match of source.matchAll(/export\s+(?:declare\s+)?(?:const|function|class|enum)\s+([A-Za-z_$][\w$]*)/g)) {
      exports.add(match[1]);
    }

    for (const match of source.matchAll(/export\s+(?:type\s+)?\{([^}]+)\}\s+from\s+["']([^"']+)["']/g)) {
      for (const rawItem of match[1].split(",")) {
        const item = rawItem.trim().replace(/^type\s+/, "");
        if (!item) continue;
        const aliasParts = item.split(/\s+as\s+/);
        exports.add((aliasParts[1] ?? aliasParts[0]).trim());
      }
      visit(resolveModule(filePath, match[2]));
    }

    for (const match of source.matchAll(/export\s+\*\s+from\s+["']([^"']+)["']/g)) {
      visit(resolveModule(filePath, match[1]));
    }
  };

  visit(entryFile);
  return exports;
};

const publicEntry = manifest.package?.publicEntry;
assert(pathExists(publicEntry), `L'entrée publique du DS est introuvable: ${publicEntry ?? "absente"}`);
const publicExports = pathExists(publicEntry) ? collectPublicExports(absolute(publicEntry)) : new Set();

const validateCodeReference = (code, label) => {
  assert(code && typeof code === "object", `${label}: référence code absente.`);
  if (!code || typeof code !== "object") return;
  assert(typeof code.export === "string" && code.export.length > 0, `${label}: export React Native absent.`);
  assert(pathExists(code.source), `${label}: source introuvable (${code.source ?? "absente"}).`);
  if (typeof code.export === "string") {
    assert(publicExports.has(code.export), `${label}: ${code.export} n'est pas exporté par ${publicEntry}.`);
  }
};

const validateStatus = (entry, label) => {
  assert(entry && typeof entry === "object", `${label}: entrée invalide.`);
  if (!entry || typeof entry !== "object") return;
  assert(typeof entry.id === "string" && entry.id.length > 0, `${label}: id absent.`);
  assert(allowedStatuses.has(entry.status), `${label}: statut invalide (${entry.status ?? "absent"}).`);
};

assert(manifest.schemaVersion === 1, "schemaVersion doit valoir 1.");
assert(manifest.package?.name === "@perifit/app-design-system", "Le package autorisé doit être @perifit/app-design-system.");
assert(manifest.policy?.allowedStatus === "matched", "Le seul statut autorisé doit être matched.");
assert(manifest.policy?.unknownComponent === "block", "Les composants inconnus doivent être bloqués.");
assert(manifest.policy?.unknownVariant === "block", "Les variantes inconnues doivent être bloquées.");
assert(manifest.policy?.unknownToken === "block", "Les tokens inconnus doivent être bloqués.");
assert(manifest.policy?.allowedImport === manifest.package?.name, "L'import autorisé doit correspondre au package public du DS.");
assert(Array.isArray(manifest.components), "components doit être un tableau.");
assert(Array.isArray(manifest.tokenFamilies), "tokenFamilies doit être un tableau.");
assert(Array.isArray(manifest.exactTokens), "exactTokens doit être un tableau.");
assert(Array.isArray(manifest.tokenConflicts), "tokenConflicts doit être un tableau.");

const allEntries = [
  ...(manifest.components ?? []),
  ...(manifest.tokenFamilies ?? []),
  ...(manifest.exactTokens ?? []),
  ...(manifest.tokenConflicts ?? []),
];
const ids = new Set();
for (const [index, entry] of allEntries.entries()) {
  validateStatus(entry, `entrée ${index}`);
  if (typeof entry?.id === "string") {
    assert(!ids.has(entry.id), `Id dupliqué: ${entry.id}.`);
    ids.add(entry.id);
  }
}

const figmaKeys = new Map();
for (const component of manifest.components ?? []) {
  const label = `composant ${component.id ?? "sans id"}`;
  assert(component.figma && typeof component.figma === "object", `${label}: objet figma absent.`);

  const key = component.figma?.key;
  if (key !== null && key !== undefined) {
    assert(typeof key === "string" && key.length > 0, `${label}: clé Figma invalide.`);
    if (typeof key === "string") {
      assert(!figmaKeys.has(key), `${label}: clé Figma dupliquée avec ${figmaKeys.get(key)} (${key}).`);
      figmaKeys.set(key, component.id);
    }
  }

  if (component.status === "matched") {
    assert(typeof component.figma?.name === "string", `${label}: nom Figma requis pour un mapping matched.`);
    assert(typeof key === "string" && key.length > 0, `${label}: clé Figma requise pour un mapping matched.`);
    assert(component.figmaProperties === "unverified" || component.figmaProperties === "verified", `${label}: état des propriétés Figma absent.`);
    assert(Array.isArray(component.verifiedCodeProps) && component.verifiedCodeProps.length > 0, `${label}: props code vérifiées absentes.`);
    validateCodeReference(component.code, label);
  }

  for (const [candidateIndex, candidate] of (component.codeCandidates ?? []).entries()) {
    validateCodeReference(candidate, `${label}, candidat ${candidateIndex}`);
  }

  for (const codeExport of component.codeExports ?? []) {
    assert(publicExports.has(codeExport), `${label}: l'export code-only ${codeExport} n'est pas public.`);
  }
}

const sourceContainsKey = (relativePath, key) => {
  if (!pathExists(relativePath)) return false;
  const source = fs.readFileSync(absolute(relativePath), "utf8");
  const escapedKey = escapeRegExp(key);
  return new RegExp(`(?:["']${escapedKey}["']|\\b${escapedKey}\\s*:)`).test(source);
};

for (const family of manifest.tokenFamilies ?? []) {
  const label = `famille de tokens ${family.id ?? "sans id"}`;
  assert(Array.isArray(family.figma?.patterns) && family.figma.patterns.length > 0, `${label}: pattern Figma absent.`);
  assert(family.code && typeof family.code.root === "string", `${label}: racine code absente.`);
  assert(pathExists(family.code?.source), `${label}: source introuvable (${family.code?.source ?? "absente"}).`);
  assert(Array.isArray(family.code?.keys) && family.code.keys.length > 0, `${label}: clés code absentes.`);
  if (family.status === "matched") {
    for (const key of family.code?.keys ?? []) {
      assert(sourceContainsKey(family.code.source, key), `${label}: la clé ${key} est absente de ${family.code.source}.`);
    }
  }
}

for (const token of manifest.exactTokens ?? []) {
  const label = `token ${token.id ?? "sans id"}`;
  assert(typeof token.figma?.name === "string", `${label}: nom Figma absent.`);
  assert(pathExists(token.code?.source), `${label}: source introuvable (${token.code?.source ?? "absente"}).`);
  assert(typeof token.code?.expression === "string", `${label}: expression code absente.`);
  if (token.status === "matched") {
    assert(sourceContainsKey(token.code.source, token.code.key), `${label}: la clé ${token.code.key ?? "absente"} n'existe pas dans ${token.code.source}.`);
  }
}

for (const conflict of manifest.tokenConflicts ?? []) {
  const label = `conflit ${conflict.id ?? "sans id"}`;
  assert(conflict.status === "conflict", `${label}: un token NEW-* doit être conflict.`);
  assert(Array.isArray(conflict.figma?.patterns) && conflict.figma.patterns.some((pattern) => pattern.includes("NEW-")), `${label}: pattern NEW-* absent.`);
}

const matchPattern = (pattern, value) => {
  const parts = pattern.split("*").map(escapeRegExp);
  const expression = new RegExp(`^${parts.join("(.*)")}$`, "i");
  const match = value.match(expression);
  return match ? match[1] ?? "" : null;
};

const kebabToCamel = (value) =>
  value
    .trim()
    .replace(/^[\s_-]+/, "")
    .replace(/[\s_-]+([A-Za-z0-9])/g, (_, character) => character.toUpperCase())
    .replace(/^([A-Z])/, (character) => character.toLowerCase());

const resolveComponent = (name) => {
  const component = (manifest.components ?? []).find((entry) => entry.figma?.name?.toLowerCase() === name.toLowerCase());
  if (!component) return { status: "unmapped", reason: "Composant Figma inconnu." };
  return component;
};

const resolveVariant = (componentName, variant) => {
  const component = resolveComponent(componentName);
  if (component.status !== "matched") return component;
  const variantDeclaration = component.verifiedCodeProps.find((item) => item.startsWith("variant:"));
  if (!variantDeclaration) return { status: "unmapped", reason: `Aucune variante vérifiée pour ${componentName}.` };
  const variants = variantDeclaration.slice("variant:".length).split("|");
  return variants.includes(variant)
    ? { status: "matched", code: component.code, variant }
    : { status: "unmapped", reason: `Variante ${variant} inconnue pour ${componentName}.` };
};

const resolveToken = (name) => {
  for (const conflict of manifest.tokenConflicts ?? []) {
    if (conflict.figma.patterns.some((pattern) => matchPattern(pattern, name) !== null)) return conflict;
  }

  const exact = (manifest.exactTokens ?? []).find((entry) => entry.figma.name.toLowerCase() === name.toLowerCase());
  if (exact) return exact;

  for (const family of manifest.tokenFamilies ?? []) {
    for (const pattern of family.figma.patterns) {
      const wildcard = matchPattern(pattern, name);
      if (wildcard === null) continue;
      const transformed = family.aliases?.[wildcard] ?? kebabToCamel(wildcard);
      const codeKey = family.codeKeyPrefix ? `${family.codeKeyPrefix}${transformed.charAt(0).toUpperCase()}${transformed.slice(1)}` : transformed;
      if (!family.code.keys.includes(codeKey)) {
        return { status: "unmapped", reason: `La clé ${codeKey} n'existe pas dans ${family.code.root}.` };
      }
      return { ...family, resolvedExpression: `${family.code.root}.${codeKey}` };
    }
  }

  return { status: "unmapped", reason: "Token Figma inconnu." };
};

const expectMatched = (result, label) => assert(result.status === "matched", `${label} devrait être matched, reçu ${result.status}.`);
const expectBlocked = (result, label) => assert(result.status !== "matched", `${label} devrait être bloqué.`);

for (const name of ["Button", "TextField", "Progress", "Tabs", "List Item"]) {
  expectMatched(resolveComponent(name), `résolution composant ${name}`);
}
for (const name of [
  "Colors/Text/text-primary",
  "Colors/Nav/nav-active-text",
  "Spacing/spacing-md",
  "Gap/gap-form",
  "Radius/radius-lg",
  "Icon Size/iconSize-md",
  "Heading/H1",
  "Brand 1",
]) {
  expectMatched(resolveToken(name), `résolution token ${name}`);
}
for (const name of manifest.requiredBlockingChecks?.components ?? []) {
  expectBlocked(resolveComponent(name), `garde composant ${name}`);
}
for (const name of manifest.requiredBlockingChecks?.tokens ?? []) {
  const result = resolveToken(name);
  expectBlocked(result, `garde token ${name}`);
  assert(result.status === "conflict", `${name} devrait être conflict, reçu ${result.status}.`);
}
expectBlocked(resolveComponent(manifest.requiredBlockingChecks?.unknownComponent ?? "__UNKNOWN_COMPONENT__"), "garde composant inconnu");
expectBlocked(
  resolveVariant(
    manifest.requiredBlockingChecks?.unknownVariant?.component ?? "Button",
    manifest.requiredBlockingChecks?.unknownVariant?.variant ?? "__UNKNOWN_VARIANT__",
  ),
  "garde variante inconnue",
);

const args = process.argv.slice(2);
const printResolution = (kind, query, result) => {
  if (result.status === "matched") {
    const target = result.code?.export ?? result.code?.expression ?? result.resolvedExpression ?? result.id;
    console.log(`AUTORISÉ — ${kind} "${query}" → ${target}`);
    return 0;
  }
  console.error(`BLOQUÉ — ${kind} "${query}" (${result.status}): ${result.reason ?? "validation manuelle requise"}`);
  return 2;
};

if (errors.length > 0) {
  console.error(`Mapping invalide (${errors.length} erreur${errors.length > 1 ? "s" : ""}) :`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

if (args[0] === "--resolve-component" && args[1]) {
  process.exit(printResolution("composant", args.slice(1).join(" "), resolveComponent(args.slice(1).join(" "))));
}
if (args[0] === "--resolve-token" && args[1]) {
  process.exit(printResolution("token", args.slice(1).join(" "), resolveToken(args.slice(1).join(" "))));
}
if (args[0] === "--resolve-variant" && args[1] && args[2]) {
  process.exit(printResolution("variante", `${args[1]} / ${args.slice(2).join(" ")}`, resolveVariant(args[1], args.slice(2).join(" "))));
}
if (args.length > 0) {
  console.error("Usage: node rules/validate-perifit-ds-mapping.mjs [--resolve-component NOM | --resolve-token NOM | --resolve-variant COMPOSANT VARIANTE]");
  process.exit(2);
}

const counts = allEntries.reduce((summary, entry) => {
  summary[entry.status] += 1;
  return summary;
}, { matched: 0, candidate: 0, unmapped: 0, conflict: 0 });

console.log("Mapping Perifit DS valide.");
console.log(`Composants: ${manifest.components.length} · Familles de tokens: ${manifest.tokenFamilies.length} · Tokens exacts: ${manifest.exactTokens.length}`);
console.log(`Statuts: ${counts.matched} matched · ${counts.candidate} candidate · ${counts.unmapped} unmapped · ${counts.conflict} conflict`);
console.log("Gardes vérifiées: composants, variantes inconnues, Alert, Navbar - Pump et tokens NEW-*.");
