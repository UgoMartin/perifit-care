# Règles d’intégration Figma ↔ Perifit Design System

Ce dossier est la source de vérité pour traduire les maquettes du fichier Figma **Perifit (DS)** vers l’application. Il complète le code du design system sans modifier Figma ni l’API publique du package.

## Avant d’intégrer une maquette

1. Chercher chaque composant et chaque famille de tokens dans `perifit-ds.mapping.json`.
2. N’utiliser automatiquement que les entrées dont le statut est `matched`.
3. Vérifier la variante demandée par la maquette. Les propriétés Figma n’étant pas accessibles avec le niveau de Code Connect actuel, toute variante absente de `verifiedCodeProps` est inconnue et bloque l’intégration.
4. Importer les composants et tokens depuis `@perifit/app-design-system`.
5. Exécuter `node rules/validate-perifit-ds-mapping.mjs` après toute modification liée au mapping ou au DS.

## Statuts

| Statut | Utilisation |
| --- | --- |
| `matched` | Autorisée, sous réserve d’utiliser une prop/variante vérifiée. |
| `candidate` | Bloquée. Correspondance plausible à valider manuellement. |
| `unmapped` | Bloquée. Aucun équivalent fiable n’est enregistré. |
| `conflict` | Bloquée. Doublon, héritage ou nom `NEW-*` à arbitrer. |

Tout statut autre que `matched` nécessite une validation manuelle et une mise à jour du manifeste avant intégration.

## Règles de code

- Réutiliser les composants publics du DS. Ne pas recréer localement un bouton, un champ, une progression, une navigation ou un autre composant lorsqu’un mapping `matched` existe.
- Utiliser `themeColors.*`, `spacing.*`, `gap.*`, `radius.*`, `iconSize.*`, `typography.*` et `brandToken.*` selon le manifeste.
- Ne pas coder en dur une couleur, un espacement, un rayon, une taille d’icône ou un style typographique lorsqu’un token `matched` existe.
- Ne pas importer depuis les chemins internes de `designsystem/packages/library/src`. L’import applicatif autorisé est `@perifit/app-design-system`.
- Ne pas deviner une propriété Figma. Une variante inconnue, `Alert`, `Navbar - Pump` ou un token `NEW-*` doit rester bloqué jusqu’à validation.
- Les icônes, images et tout contenu de `old/` sont hors périmètre de cette cartographie.

Exemple autorisé :

```tsx
import { Button, spacing, useTheme } from "@perifit/app-design-system";

function Screen() {
  const { themeColors } = useTheme();
  return <Button title="Continuer" onPress={() => {}} style={{ marginTop: spacing.md, backgroundColor: themeColors.button.primaryFillDefault }} />;
}
```

Exemples interdits lorsqu’un équivalent existe :

```tsx
const localPurple = "#7B61FF";
const styles = { padding: 20, borderRadius: 16 };
const MyButton = () => null;
```

## Résoudre ou vérifier une entrée

Le validateur contrôle le schéma, les clés Figma, les exports publics du DS, les familles de tokens et les scénarios de blocage :

```bash
node rules/validate-perifit-ds-mapping.mjs
```

Il peut aussi servir de garde avant une intégration :

```bash
node rules/validate-perifit-ds-mapping.mjs --resolve-component "Button"
node rules/validate-perifit-ds-mapping.mjs --resolve-token "Spacing/spacing-md"
node rules/validate-perifit-ds-mapping.mjs --resolve-variant "Button" "primary"
```

Une résolution non `matched` ou inconnue se termine avec le code de sortie `2`.

## Gérer un écart

1. Enregistrer l’entrée comme `candidate`, `unmapped` ou `conflict` ; ne pas contourner le blocage dans `App/`.
2. Comparer visuellement Figma avec l’export public et les props réelles du DS.
3. Faire valider manuellement la correspondance et ses variantes.
4. Passer l’entrée à `matched`, renseigner les props vérifiées et relancer le validateur.

Les propriétés de composants Figma restent explicitement `unverified` tant qu’elles ne sont pas accessibles via Code Connect. Le manifeste ne prétend donc pas valider les noms de variantes côté Figma : il valide les correspondances de composants, les props disponibles côté code et une politique de blocage conservatrice.
