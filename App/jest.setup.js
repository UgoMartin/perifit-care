/* global jest */

require('react-native-gesture-handler/jestSetup');

jest.mock('react-native-device-info', () =>
  require('react-native-device-info/jest/react-native-device-info-mock'),
);
