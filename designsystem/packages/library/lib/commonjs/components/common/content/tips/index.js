"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodayTips = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themes = require("../../../../themes");
var _styles = _interopRequireDefault(require("./styles"));
var _utils = _interopRequireDefault(require("../../../../utils"));
var _cachedImage = require("../utils/cachedImage");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TodayTips = ({
  image,
  title,
  actionText,
  onPress
}) => {
  const {
    themeColors,
    typography
  } = (0, _themes.useTheme)();
  const styles = (0, _styles.default)(themeColors, typography);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.container,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.imageContainer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImage, {
        source: image,
        style: styles.image
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
      activeOpacity: _utils.default.TOUCHABLE_ACTIVE_OPACITY,
      style: styles.contentContainer,
      onPress: onPress,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.title,
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.actionText,
        children: actionText
      })]
    })]
  });
};
exports.TodayTips = TodayTips;
//# sourceMappingURL=index.js.map