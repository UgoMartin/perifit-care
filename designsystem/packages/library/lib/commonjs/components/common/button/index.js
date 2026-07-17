"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../../themes/themeContext");
var _themes = require("../../../themes");
var _styles = require("./styles");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Variants that the Button can take.

// Size options for the Button vertical padding.

const Button = ({
  title,
  onPress,
  variant = "primary",
  size = "big",
  disabled = false,
  style,
  isLoading = false,
  titleStyle,
  icon,
  ...restProps
}) => {
  const {
    themeColors
  } = (0, _themeContext.useTheme)();

  // Return background & text colors based on current variant / state
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          background: disabled ? themeColors.button.primaryFillDisabled : themeColors.button.primaryFillDefault,
          hoverBackground: themeColors.button.primaryFillHover,
          text: disabled ? themeColors.button.primaryTextDisabled : themeColors.button.primaryTextDefault
        };
      case "secondary":
        return {
          background: disabled ? themeColors.button.secondaryFillDisabled : themeColors.button.secondaryFillDefault,
          hoverBackground: themeColors.button.secondaryFillHover,
          text: disabled ? themeColors.button.secondaryTextDisabled : themeColors.button.secondaryTextDefault
        };
      case "inversed":
        return {
          background: disabled ? themeColors.button.inversedDisabled : themeColors.button.inversedDefault,
          hoverBackground: themeColors.button.inversedHover,
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.inversedTextDefault
        };
      case "link":
      default:
        return {
          background: "transparent",
          hoverBackground: "transparent",
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.secondaryTextDefault
        };
    }
  };
  const {
    background,
    hoverBackground,
    text
  } = getColors();

  // Helper to build container style depending on press state
  const buildContainerStyle = pressed => [_styles.styles.base, variant !== "link" ? {
    height: size === "big" ? _styles.BUTTON_BIG_SIZE : _styles.BUTTON_SMALL_SIZE,
    paddingHorizontal: _themes.spacing.md
  } : null, variant !== "link" ? {
    backgroundColor: pressed && !disabled ? hoverBackground : background
  } : null, style || null];

  // Helper to build text style depending on press state
  const buildTextStyle = pressed => ({
    fontFamily: _themes.FontNames.bold,
    fontSize: (0, _utils.normalize)(18),
    color: text,
    textDecorationLine: variant === "link" && !pressed ? "underline" : "none"
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    disabled: disabled || isLoading,
    onPress: onPress,
    style: ({
      pressed
    }) => buildContainerStyle(pressed),
    ...restProps,
    children: ({
      pressed
    }) => isLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
      size: "small",
      color: text
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: _styles.styles.buttonWithIcon,
      children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        children: /*#__PURE__*/_react.default.isValidElement(icon) ? /*#__PURE__*/_react.default.cloneElement(icon, {
          color: icon.props?.color || text
        }) : icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [buildTextStyle(pressed), titleStyle],
        children: title
      })]
    })
  });
};
exports.Button = Button;
const IconButton = ({
  icon,
  onPress,
  variant = "primary",
  size = "small",
  disabled = false,
  style,
  isLoading = false,
  ...restProps
}) => {
  const {
    themeColors
  } = (0, _themeContext.useTheme)();

  // Re-use getColors helper from Button component to determine fill & text colors
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          background: disabled ? themeColors.button.primaryFillDisabled : themeColors.button.primaryFillDefault,
          hoverBackground: themeColors.button.primaryFillHover,
          text: disabled ? themeColors.button.primaryTextDisabled : themeColors.button.primaryTextDefault
        };
      case "secondary":
        return {
          background: disabled ? themeColors.button.secondaryFillDisabled : themeColors.button.secondaryFillDefault,
          hoverBackground: themeColors.button.secondaryFillHover,
          text: disabled ? themeColors.button.secondaryTextDisabled : themeColors.button.secondaryTextDefault
        };
      case "inversed":
        return {
          background: disabled ? themeColors.button.inversedDisabled : themeColors.button.inversedDefault,
          hoverBackground: themeColors.button.inversedHover,
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.inversedTextDefault
        };
      case "link":
      default:
        return {
          background: "transparent",
          hoverBackground: "transparent",
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.secondaryTextDefault
        };
    }
  };
  const {
    background,
    hoverBackground,
    text
  } = getColors();

  // Re-use container style builder from Button component
  const buildContainerStyle = pressed => [_styles.styles.base, {
    alignSelf: "baseline"
  }, variant !== "link" ? {
    width: size === "big" ? _styles.BUTTON_BIG_SIZE : _styles.BUTTON_SMALL_SIZE,
    height: size === "big" ? _styles.BUTTON_BIG_SIZE : _styles.BUTTON_SMALL_SIZE
  } : null, variant !== "link" ? {
    backgroundColor: pressed && !disabled ? hoverBackground : background
  } : null, style || null];

  // wrap in a view to allow for icon placement to avoid crash
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
      disabled: disabled || isLoading,
      onPress: onPress,
      style: ({
        pressed
      }) => buildContainerStyle(pressed),
      ...restProps,
      children: isLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
        size: "small",
        color: text
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        children: /*#__PURE__*/_react.default.isValidElement(icon) ? /*#__PURE__*/_react.default.cloneElement(icon, {
          color: icon.props?.color || text
        }) : icon
      })
    })
  });
};
exports.IconButton = IconButton;
//# sourceMappingURL=index.js.map