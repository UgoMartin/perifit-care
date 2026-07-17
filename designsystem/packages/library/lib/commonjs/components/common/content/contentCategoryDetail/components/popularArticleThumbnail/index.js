"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopularArticleThumbnail = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _themeContext = require("../../../../../../themes/themeContext");
var _styles = require("./styles");
var _utils = _interopRequireDefault(require("../../../../../../utils"));
var _images = _interopRequireDefault(require("../../../../../../assets/images"));
var _htmlEntities = require("html-entities");
var _cachedImage = require("../../../utils/cachedImage");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PopularArticleThumbnail = ({
  tag,
  title,
  image,
  onPress,
  showPremiumIcon = true
}) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors, typography);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    activeOpacity: _utils.default.TOUCHABLE_ACTIVE_OPACITY,
    style: styles.card,
    onPress: onPress ?? (() => {}),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_cachedImage.CachedImageBackground, {
      source: image,
      style: styles.cardImage,
      imageStyle: styles.cardImageBorder,
      children: [showPremiumIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.premiumIconContainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImage, {
          source: _images.default.contentTab.premiumIcon,
          style: styles.premiumIcon,
          resizeMode: "contain"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
        style: styles.gradient,
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 1
        },
        colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.3)"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.textContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.tag,
          children: tag
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.title,
          children: (0, _htmlEntities.decode)(title)
        })]
      })]
    })
  });
};
exports.PopularArticleThumbnail = PopularArticleThumbnail;
//# sourceMappingURL=index.js.map