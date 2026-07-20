/* global jest */

require('react-native-gesture-handler/jestSetup');

jest.mock('react-native-device-info', () =>
  require('react-native-device-info/jest/react-native-device-info-mock'),
);

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const { View } = require('react-native');
  const insets = { bottom: 0, left: 0, right: 0, top: 0 };
  const frame = { height: 844, width: 390, x: 0, y: 0 };

  return {
    SafeAreaFrameContext: React.createContext(frame),
    SafeAreaInsetsContext: React.createContext(insets),
    SafeAreaProvider: ({ children }) => children,
    SafeAreaView: View,
    initialWindowMetrics: { frame, insets },
    useSafeAreaFrame: () => frame,
    useSafeAreaInsets: () => insets,
  };
});
