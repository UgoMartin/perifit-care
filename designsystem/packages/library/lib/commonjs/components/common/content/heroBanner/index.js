"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroBanner = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
var _themes = require("../../../../themes");
var _button = require("../../button");
var _cachedImage = require("../utils/cachedImage");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HeroBanner = ({
  sectionTitle,
  text,
  buttonText,
  backgroundImage,
  badgeIcon,
  onButtonPress,
  style,
  backgroundImageStyle
}) => {
  const {
    themeColors,
    typography
  } = (0, _themes.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors, typography);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [{
      gap: _themes.gap.xmd
    }, style],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: typography.h4,
      children: sectionTitle
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_cachedImage.CachedImageBackground, {
      source: backgroundImage,
      style: [styles.heroImage, backgroundImageStyle],
      children: [badgeIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.badgeIconContainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImage, {
          source: badgeIcon,
          style: styles.badgeIcon
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.contentContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.heroText,
          children: text
        }), !!buttonText && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: {
            alignSelf: "flex-start"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
            title: buttonText,
            onPress: onButtonPress ?? (() => {}),
            variant: "primary",
            size: "small"
          })
        })]
      })]
    })]
  });
};
exports.HeroBanner = HeroBanner;
//# sourceMappingURL=index.js.map