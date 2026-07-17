"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentArticleThumbnail = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../../../../../themes/themeContext");
var _styles = require("./styles");
var _images = _interopRequireDefault(require("../../../../../../assets/images"));
var _cachedImage = require("../../../utils/cachedImage");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ContentArticleThumbnail = ({
  image,
  showPremiumIcon = true
}) => {
  const {
    themeColors
  } = (0, _themeContext.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImageBackground, {
    source: image,
    style: styles.thumbnail,
    imageStyle: styles.thumbnailBorder,
    children: showPremiumIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.premiumIconContainer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImage, {
        source: _images.default.contentTab.premiumIcon,
        style: styles.premiumIcon,
        resizeMode: "contain"
      })
    })
  });
};
exports.ContentArticleThumbnail = ContentArticleThumbnail;
//# sourceMappingURL=index.js.map