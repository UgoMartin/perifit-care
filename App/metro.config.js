const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const designSystemRoot = path.resolve(
  __dirname,
  '../designsystem/packages/library',
);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: [designSystemRoot],
  resolver: {
    extraNodeModules: {
      '@perifit/app-design-system': designSystemRoot,
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
