"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _themeContext = require("../../../themes/themeContext");
var _styles = require("./styles");
var _lodash = require("lodash");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * Horizontal progress bar that animates smoothly when the `progress` prop changes.
 * Built on top of react-native-reanimated for 60fps animations.
 */
const ProgressBar = ({
  animated,
  from,
  to,
  height = (0, _utils.normalize)(8),
  duration = 1000,
  color,
  trackColor,
  style
}) => {
  const {
    themeColors
  } = (0, _themeContext.useTheme)();
  const barColor = color ?? themeColors.fill.dark;
  const barTrackColor = trackColor ?? themeColors.fill.primary;

  // Helper to clamp values between 0-1
  const clampValue = value => {
    return (0, _lodash.clamp)(value ?? 0, 0, 1);
  };

  // Prefer `to` value when provided for initial rendering, otherwise fallback to `from`.
  // This fixes the issue where the progress bar wouldn't render when animated is false.
  const initialProgress = clampValue(to ?? from ?? 0);
  const progressShared = (0, _reactNativeReanimated.useSharedValue)(initialProgress);
  (0, _react.useEffect)(() => {
    if (animated && from !== undefined && to !== undefined) {
      progressShared.value = clampValue(from);
      progressShared.value = (0, _reactNativeReanimated.withTiming)(clampValue(to), {
        duration
      });
      return;
    }
    const target = to ?? from;
    if (target !== undefined) {
      progressShared.value = clampValue(target);
    }
  }, [from, to, animated, duration, progressShared]);

  // Animate width as a percentage of the container width
  const animatedBarStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    width: `${progressShared.value * 100}%`
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [_styles.styles.container, {
      height,
      backgroundColor: barTrackColor,
      borderRadius: height / 2
    }, style],
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      style: [_styles.styles.bar, animatedBarStyle, {
        backgroundColor: barColor,
        borderRadius: height / 2
      }]
    })
  });
};
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=index.js.map