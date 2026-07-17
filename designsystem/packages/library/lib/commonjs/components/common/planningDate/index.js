"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PlanningDate = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themes = require("../../../themes");
var _utils = _interopRequireWildcard(require("../../../utils"));
var _images = _interopRequireDefault(require("../../../assets/images"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Visual state variants supported by the PlanningDate component.
 */

// Future day

/**
 * Small rounded square used to display a calendar day inside the weekly planning
 * component.  It supports six visual variants as per the design spec:
 *  - Past day without completed        → "past"
 *  - Past day with completed           → "pastCompleted"
 *  - Today without completed           → "today"
 *  - Today with completed              → "todayCompleted"
 *  - Disabled date                     → "disabled"
 *  - Future date                       → "future"
 */
const PlanningDate = ({
  label,
  variant = "empty",
  size = (0, _utils.normalize)(36),
  onPress,
  style,
  labelStyle,
  ...restProps
}) => {
  const {
    themeColors,
    typography
  } = (0, _themes.useTheme)();

  // Compute the base visual style depending on the variant
  const computedStyle = _react.default.useMemo(() => {
    switch (variant) {
      case "empty":
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.primary,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          completed: false,
          disabled: false
        };
      case "emptyMarked":
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.primary,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          completed: true,
          disabled: false
        };
      case "filled":
        return {
          backgroundColor: themeColors.fill.active,
          textColor: themeColors.text.inversedChangeBlack,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          completed: false,
          disabled: false
        };
      case "filledMarked":
        return {
          backgroundColor: themeColors.fill.active,
          textColor: themeColors.text.inversedChangeBlack,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          completed: true,
          disabled: false
        };
      case "disabled":
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.inactive,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          completed: false,
          disabled: true
        };
      case "emptyDashed":
      default:
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.primary,
          borderColor: themeColors.border.selected,
          borderWidth: 1,
          borderStyle: "dashed",
          completed: false,
          disabled: false
        };
    }
  }, [themeColors, variant]);
  const overlaySize = 18;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
    onPress: onPress,
    disabled: !onPress || computedStyle.disabled,
    accessibilityRole: "button",
    hitSlop: _utils.default.TOUCHABLE_HIT_SLOP,
    style: ({
      pressed
    }) => [{
      width: size,
      height: size,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: computedStyle.backgroundColor,
      borderColor: computedStyle.borderColor,
      borderWidth: computedStyle.borderWidth,
      borderStyle: computedStyle.borderStyle
    }, pressed && !computedStyle.disabled ? {
      backgroundColor: themeColors.fill.hover
    } : null, style],
    ...restProps,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [{
        ...typography.captionSemi,
        color: computedStyle.textColor
      }, labelStyle],
      children: label
    }), computedStyle.completed && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
      source: _images.default.checkmarkSmallIcon,
      style: {
        position: "absolute",
        top: -overlaySize * 0.25,
        right: -overlaySize * 0.25,
        width: overlaySize,
        height: overlaySize,
        borderRadius: _themes.radius.s,
        backgroundColor: themeColors.fill.success,
        justifyContent: "center",
        alignItems: "center"
      }
    })]
  });
};
exports.PlanningDate = PlanningDate;
var _default = exports.default = PlanningDate;
//# sourceMappingURL=index.js.map