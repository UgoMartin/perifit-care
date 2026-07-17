"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _themeContext = require("../../../themes/themeContext");
var _themes = require("../../../themes");
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * Simple on/off switch with animated track colour and knob translation, built with react-native-reanimated.
 */
const Toggle = ({
  value,
  onValueChange,
  disabled = false,
  knobSize = _themes.spacing.md,
  trackWidth,
  activeTrackColor,
  inactiveTrackColor,
  disabledTrackColor,
  knobColor,
  style,
  trackPadding = 2,
  ...restProps
}) => {
  const {
    themeColors
  } = (0, _themeContext.useTheme)();

  // Fallback colors
  const _knobColor = knobColor ?? themeColors.fill.page;
  const _activeTrackColor = activeTrackColor ?? themeColors.fill.active;
  const _inactiveTrackColor = inactiveTrackColor ?? themeColors.fill.disabled;
  const _disabledTrackColor = disabledTrackColor ?? themeColors.fill.disabled;
  const trackHeight = knobSize + trackPadding * 2;
  const _trackWidth = trackWidth ?? trackHeight * 1.8;
  const translateDistance = _trackWidth - knobSize - trackPadding * 2;
  const progress = (0, _reactNativeReanimated.useSharedValue)(value ? 1 : 0);

  // Animate whenever the external value changes
  (0, _react.useEffect)(() => {
    progress.value = (0, _reactNativeReanimated.withTiming)(value ? 1 : 0, {
      duration: 200
    });
  }, [value, progress]);
  const animatedTrackStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    backgroundColor: disabled ? _disabledTrackColor : (0, _reactNativeReanimated.interpolateColor)(progress.value, [0, 1], [_inactiveTrackColor, _activeTrackColor])
  }));
  const animatedKnobStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    transform: [{
      translateX: trackPadding + progress.value * translateDistance
    }]
  }));
  const handlePress = () => {
    if (disabled) {
      return;
    }
    onValueChange?.(!value);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
    accessibilityRole: "switch",
    accessibilityState: {
      disabled,
      checked: value
    },
    onPress: handlePress,
    disabled: disabled,
    style: [{
      width: _trackWidth,
      height: trackHeight,
      justifyContent: "center"
    }, style],
    ...restProps,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      style: [_styles.styles.track, animatedTrackStyle, {
        width: _trackWidth,
        height: trackHeight,
        borderRadius: trackHeight / 2
      }]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      style: [_styles.styles.knob, animatedKnobStyle, {
        width: knobSize,
        height: knobSize,
        borderRadius: knobSize / 2,
        backgroundColor: _knobColor,
        top: trackPadding
      }]
    })]
  });
};
exports.Toggle = Toggle;
//# sourceMappingURL=index.js.map