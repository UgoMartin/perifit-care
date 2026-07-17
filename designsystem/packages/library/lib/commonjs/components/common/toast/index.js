"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../../themes/themeContext");
var _themes = require("../../../themes");
var _button = require("../button");
var _utils = _interopRequireDefault(require("../../../utils"));
var _styles = require("./styles");
var _lucide = require("@react-native-vector-icons/lucide");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Toast – temporary alert banner with an optional action button.
 */
const Toast = ({
  title,
  description,
  actionLabel,
  onActionPress,
  onClose,
  disabled = false,
  style
}) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();
  const renderCloseIcon = () => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    accessibilityRole: "button",
    hitSlop: _utils.default.TOUCHABLE_HIT_SLOP,
    onPress: onClose,
    disabled: disabled || !onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucide.Lucide, {
      name: "x",
      size: _themes.iconSize.xs,
      color: themeColors.icon.primary
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [_styles.styles.container, {
      backgroundColor: themeColors.fill.primary,
      opacity: disabled ? 0.6 : 1
    }, style],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: {
        flexDirection: "row",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: typography.subtitle,
        children: title
      }), onClose ? renderCloseIcon() : null]
    }), description ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: typography.body,
      children: description
    }) : null, actionLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
      style: {
        alignSelf: "baseline",
        marginTop: _themes.spacing.xs
      },
      title: actionLabel,
      onPress: onActionPress ?? (() => {}),
      variant: "primary",
      size: "small",
      disabled: disabled || !onActionPress
    })]
  });
};
exports.Toast = Toast;
//# sourceMappingURL=index.js.map