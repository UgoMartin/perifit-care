const path = require("path");
const fs = require("fs");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const libraryPackage = require("../../packages/library/package.json");
const libraryName = libraryPackage.name;

const workspaceRoot = path.resolve(__dirname, "../..");
const projectRoot = __dirname;
const workspaceNodeModules = path.resolve(workspaceRoot, "node_modules");

const toPosixPath = (value) => value.split(path.sep).join("/");

const findSourceLinkedAssetPath = (assetPath) => {
  const directPath = path.resolve(projectRoot, assetPath);
  if (fs.existsSync(directPath)) {
    return assetPath;
  }

  const workspacePath = path.resolve(workspaceRoot, assetPath);
  if (fs.existsSync(workspacePath)) {
    return toPosixPath(path.relative(projectRoot, workspacePath));
  }

  const workspacePackagesPath = path.resolve(workspaceRoot, "packages", assetPath);
  if (fs.existsSync(workspacePackagesPath)) {
    return toPosixPath(path.relative(projectRoot, workspacePackagesPath));
  }

  return assetPath;
};

const config = {
  // 1. Watch all files in the monorepo
  watchFolders: [workspaceRoot],
  server: {
    rewriteRequestUrl: (incomingUrl) => {
      const [pathname, rawQuery = ""] = incomingUrl.split("?");

      if (!pathname.startsWith("/assets/") || pathname === "/assets/") {
        return incomingUrl;
      }

      const assetPath = pathname.replace(/^\/assets\//, "");
      if (!assetPath) {
        return incomingUrl;
      }

      const resolvedAssetPath = findSourceLinkedAssetPath(assetPath);
      if (resolvedAssetPath === assetPath) {
        return incomingUrl;
      }

      const params = new URLSearchParams(rawQuery);
      params.set("unstable_path", resolvedAssetPath);
      return `/assets/?${params.toString()}`;
    },
  },
  transformer: {
    // Keep source-linking while normalizing source-package asset URLs for iOS Storybook.
    assetPlugins: [path.resolve(__dirname, "./metro.assetPathFix.js")],
  },
  // 2. Let Metro know where to resolve packages from
  resolver: {
    blockList: [new RegExp(`${workspaceRoot}/node_modules/${libraryName}/.*`)],
    // 3. Force Metro to resolve certain dependencies from the `example`'s node_modules
    extraNodeModules: {
      // Point our library to its source code
      [libraryName]: path.resolve(workspaceRoot, "packages/library"),

      // Point react and react-native to the example app's node_modules
      react: path.resolve(workspaceNodeModules, "react"),
      "react-native": path.resolve(workspaceNodeModules, "react-native"),
    },
    nodeModulesPaths: [path.resolve(projectRoot, "node_modules"), path.resolve(workspaceRoot, "node_modules")],
  },
  projectRoot,
};

module.exports = withStorybook(mergeConfig(getDefaultConfig(__dirname), config), {
  enabled: true,
  storybookConfigPath: path.resolve(__dirname, "./.storybook"),
});
