"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WelcomePremiumUser = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../../themes/themeContext");
var _styles = require("./styles");
var _button = require("../button");
var _images = _interopRequireDefault(require("../../../assets/images"));
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const WelcomePremiumUser = ({
  title,
  description,
  buttonText,
  onButtonPress,
  fullScreen = true,
  containerStyle
}) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const styles = (0, _styles.getStyles)(themeColors, typography, insets);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, fullScreen && styles.fullScreenContainer, containerStyle],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.contentContainer,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.iconContainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
          source: _images.default.contentTab.premiumLargeIcon,
          style: styles.icon
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.title,
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.description,
        children: description
      })]
    }), !!buttonText && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.Button, {
      title: buttonText,
      onPress: onButtonPress,
      variant: "inversed",
      size: "big",
      titleStyle: styles.textButton
    })]
  });
};
exports.WelcomePremiumUser = WelcomePremiumUser;
//# sourceMappingURL=index.js.map