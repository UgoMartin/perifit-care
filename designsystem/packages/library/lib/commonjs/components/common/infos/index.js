"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Infos = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../../themes/themeContext");
var _styles = require("./styles");
var _images = _interopRequireDefault(require("../../../assets/images"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Infos = ({
  badge,
  title,
  body,
  containerStyle,
  emoji,
  arrow,
  link,
  onLinkPress
}) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors, typography);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, containerStyle],
    children: [emoji && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.emojiContainer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
        source: emoji,
        style: styles.emoji
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.mainContent,
      children: [badge && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.badgeBg,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.badgeText,
          children: badge
        })
      }), title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: typography.subtitle,
        children: title
      }), body && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: typography.body,
        children: body
      }), link && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
        onPress: onLinkPress,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.linkText,
          children: link
        })
      })]
    }), arrow && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
      source: _images.default.arrowNextIcon,
      style: styles.arrow
    })]
  });
};
exports.Infos = Infos;
//# sourceMappingURL=index.js.map