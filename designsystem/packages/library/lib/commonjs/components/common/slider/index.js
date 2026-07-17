"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _themeContext = require("../../../themes/themeContext");
var _styles = require("./styles");
var _themes = require("../../../themes");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * Draggable slider built with react-native-reanimated & RNGH.
 * Supports optional snapping to a fixed `step` increment.
 */
const SliderComponent = ({
  min = 0,
  max = 1,
  initialValue = min,
  value,
  onValueChange,
  onSlidingComplete,
  step = 0,
  trackHeight = _themes.spacing.xs,
  knobSize = _themes.spacing.lg,
  activeTrackColor,
  inactiveTrackColor,
  knobColor = _themes.brandToken.brand1[0],
  disabled = false,
  style
}) => {
  const {
    themeColors
  } = (0, _themeContext.useTheme)();

  // Colors fall back to theme when not provided
  const activeColor = activeTrackColor ?? _themes.brandToken.brand2[500];
  const inactiveColor = inactiveTrackColor ?? themeColors.fill.disabled;
  const range = max - min;

  // Clamp initial value to within [min, max]
  const resolvedInitialValue = value ?? initialValue;
  const clampedInitialValue = (0, _reactNativeReanimated.clamp)(resolvedInitialValue, min, max);
  const trackWidthSV = (0, _reactNativeReanimated.useSharedValue)(0);
  const onTrackLayout = (0, _react.useCallback)(e => {
    trackWidthSV.value = e.nativeEvent.layout.width;
  }, [trackWidthSV]);
  const progress = (0, _reactNativeReanimated.useSharedValue)((0, _reactNativeReanimated.clamp)((clampedInitialValue - min) / (range || 1), 0, 1));
  const isGestureActive = (0, _reactNativeReanimated.useSharedValue)(false);
  const gestureStartX = (0, _reactNativeReanimated.useSharedValue)(0);

  // React state only for accessibilityValue (updated on release to limit re-renders)
  const [currentValue, setCurrentValue] = (0, _react.useState)(clampedInitialValue);
  (0, _react.useEffect)(() => {
    if (value === undefined) {
      return;
    }
    const clampedValue = (0, _reactNativeReanimated.clamp)(value, min, max);
    const progressRatio = range === 0 ? 0 : (0, _reactNativeReanimated.clamp)((clampedValue - min) / range, 0, 1);
    progress.value = progressRatio;
    setCurrentValue(prev => prev === clampedValue ? prev : clampedValue);
  }, [value, min, max, range, progress, isGestureActive]);
  const panGesture = _reactNativeGestureHandler.Gesture.Pan().enabled(!disabled).onStart(_event => {
    gestureStartX.value = progress.value * trackWidthSV.value;
    isGestureActive.value = true;
  }).onUpdate(event => {
    const newX = (0, _reactNativeReanimated.clamp)(gestureStartX.value + event.translationX, 0, trackWidthSV.value);
    const newProgress = trackWidthSV.value === 0 ? 0 : newX / trackWidthSV.value;
    progress.value = (0, _reactNativeReanimated.clamp)(newProgress, 0, 1);
    const updatedValue = min + progress.value * range;
    if (onValueChange) {
      (0, _reactNativeReanimated.runOnJS)(onValueChange)(updatedValue);
    }
  }).onEnd(() => {
    let finalValue = min + progress.value * range;
    if (step && step > 0) {
      const steps = Math.round((finalValue - min) / step);
      finalValue = (0, _reactNativeReanimated.clamp)(min + steps * step, min, max);
      const snappedProgress = range === 0 ? 0 : (finalValue - min) / range;
      progress.value = (0, _reactNativeReanimated.withTiming)((0, _reactNativeReanimated.clamp)(snappedProgress, 0, 1));
    }
    (0, _reactNativeReanimated.runOnJS)(setCurrentValue)(finalValue);
    if (onSlidingComplete) {
      (0, _reactNativeReanimated.runOnJS)(onSlidingComplete)(finalValue);
    }
    isGestureActive.value = false;
  });
  const animatedTrackFilledStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    width: `${progress.value * 100}%`,
    backgroundColor: activeColor,
    height: trackHeight,
    borderRadius: trackHeight / 2
  }));
  const animatedKnobStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    transform: [{
      translateX: progress.value * trackWidthSV.value - knobSize / 2
    }]
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [_styles.styles.wrapper, {
      height: knobSize
    }],
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      pointerEvents: disabled ? "none" : "auto",
      style: [_styles.styles.container, style],
      accessibilityRole: "adjustable",
      accessibilityValue: {
        min: 0,
        max: 100,
        now: Math.round((currentValue - min) / (range || 1) * 100),
        text: `${Math.round((currentValue - min) / (range || 1) * 100)}%`
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        onLayout: onTrackLayout,
        style: [_styles.styles.track, {
          height: trackHeight,
          borderRadius: trackHeight / 2,
          backgroundColor: inactiveColor
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
        style: [_styles.styles.filledTrack, animatedTrackFilledStyle]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector, {
        gesture: panGesture,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
          style: [_styles.styles.knob, animatedKnobStyle, {
            width: knobSize,
            height: knobSize,
            borderRadius: knobSize / 2,
            backgroundColor: knobColor,
            top: -(knobSize - trackHeight) / 2
          }]
        })
      })]
    })
  });
};
const Slider = exports.Slider = /*#__PURE__*/_react.default.memo(SliderComponent);
Slider.displayName = "Slider";
//# sourceMappingURL=index.js.map