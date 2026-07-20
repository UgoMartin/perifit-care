const ReactNative = require('react-native');

const immediateValue = value => value;
const sharedValue = value => ({ value });
const easingIdentity = value => value;

module.exports = {
  __esModule: true,
  default: {
    createAnimatedComponent: component => component,
    View: ReactNative.View,
    Text: ReactNative.Text,
    ScrollView: ReactNative.ScrollView,
  },
  Extrapolate: { CLAMP: 'clamp' },
  Easing: {
    cubic: easingIdentity,
    inOut: easing => easing,
    linear: easingIdentity,
    out: easing => easing,
  },
  cancelAnimation: jest.fn(),
  clamp: (value, min, max) => Math.min(Math.max(value, min), max),
  interpolate: immediateValue,
  interpolateColor: immediateValue,
  runOnJS: callback => callback,
  useAnimatedProps: callback => callback(),
  useAnimatedStyle: callback => callback(),
  useSharedValue: sharedValue,
  withDelay: (delay, animation) => {
    if (animation?.__reanimatedMockAnimation) {
      clearTimeout(animation.timer);
      animation.timer = setTimeout(
        () => animation.callback(true),
        delay + animation.duration,
      );
      return animation.value;
    }
    return animation;
  },
  withSequence: (...animations) => animations[animations.length - 1],
  withTiming: (value, config, callback) => {
    if (callback) {
      const duration = config?.duration || 0;
      return {
        __reanimatedMockAnimation: true,
        callback,
        duration,
        timer: setTimeout(() => callback(true), duration),
        value,
      };
    }
    return value;
  },
};
