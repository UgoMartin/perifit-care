const ReactNative = require('react-native');

const immediateValue = value => value;
const sharedValue = value => ({value});

module.exports = {
  __esModule: true,
  default: {
    createAnimatedComponent: component => component,
    View: ReactNative.View,
    Text: ReactNative.Text,
    ScrollView: ReactNative.ScrollView,
  },
  Extrapolate: {CLAMP: 'clamp'},
  clamp: (value, min, max) => Math.min(Math.max(value, min), max),
  interpolate: immediateValue,
  interpolateColor: immediateValue,
  runOnJS: callback => callback,
  useAnimatedProps: callback => callback(),
  useAnimatedStyle: callback => callback(),
  useSharedValue: sharedValue,
  withTiming: immediateValue,
};
