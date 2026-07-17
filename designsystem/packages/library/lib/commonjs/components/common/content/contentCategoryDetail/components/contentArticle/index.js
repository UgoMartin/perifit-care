"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentArticle = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _contentArticleThumbnail = require("../contentArticleThumbnail");
var _styles = require("./styles");
var _utils = _interopRequireDefault(require("../../../../../../utils"));
var _themeContext = require("../../../../../../themes/themeContext");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ContentArticle = ({
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
    activeOpacity: _utils.default.TOUCHABLE_ACTIVE_OPACITY,
    style: styles.container,
    onPress: onPress ?? (() => {}),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_contentArticleThumbnail.ContentArticleThumbnail, {
      image: image,
      showPremiumIcon: showPremiumIcon
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: styles.title,
      children: title
    })]
  });
};
exports.ContentArticle = ContentArticle;
//# sourceMappingURL=index.js.map