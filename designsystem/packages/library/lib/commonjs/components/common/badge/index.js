"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../../themes/themeContext");
var _styles = require("./styles");
var _themes = require("../../../themes");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Non-interactive label used to highlight short pieces of information.
 * It supports a light (primary) and dark (inversed) color scheme.
 */
const Badge = ({
  title,
  icon,
  variant = "light",
  containerStyle,
  textStyle,
  size = "default",
  tintIcon = false
}) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();
  const baseStyles = (0, _styles.getStyles)(themeColors, typography);
  const {
    background,
    text,
    iconTint
  } = _react.default.useMemo(() => {
    switch (variant) {
      case "dark":
        return {
          background: themeColors.fill.dark,
          text: themeColors.text.inversedChangeBlack,
          iconTint: themeColors.icon.inversedChangeBlack
        };
      case "light":
      default:
        return {
          background: themeColors.fill.primary,
          text: themeColors.text.primary,
          iconTint: themeColors.icon.primary
        };
    }
  }, [variant, themeColors]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [baseStyles.container, {
      backgroundColor: background,
      paddingVertical: size === "small" ? _themes.spacing.xs3 : _themes.spacing.xs2
    }, containerStyle],
    children: [icon && (/*#__PURE__*/_react.default.isValidElement(icon) ? (/*#__PURE__*/_react.default.cloneElement(icon, {
      style: [baseStyles.icon, icon.props?.style],
      ...(tintIcon ? {
        color: iconTint
      } : {})
    })) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
      source: icon,
      resizeMode: "contain",
      style: [baseStyles.icon, !tintIcon ? undefined : {
        tintColor: iconTint
      }]
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [baseStyles.text, {
        color: text
      }, textStyle],
      children: title
    })]
  });
};
exports.Badge = Badge;
//# sourceMappingURL=index.js.map