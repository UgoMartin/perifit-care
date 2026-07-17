module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@d11/react-native-fast-image$': '<rootDir>/__mocks__/fastImageMock.js',
    '^lottie-react-native$': '<rootDir>/__mocks__/nativeViewMock.js',
    '\\.(gif|jpe?g|png|ttf|webp)$': '<rootDir>/__mocks__/fileMock.js',
    '^react-native-reanimated$': '<rootDir>/__mocks__/reanimatedMock.js',
    '^react-native-htmlview$': '<rootDir>/__mocks__/nativeViewMock.js',
    '^react-native-linear-gradient$': '<rootDir>/__mocks__/nativeViewMock.js',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@perifit)/)',
  ],
};
