"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeedbackResult = exports.ArticleRating = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
var _images = _interopRequireDefault(require("../../../../assets/images"));
var _themes = require("../../../../themes");
var _cachedImage = require("../utils/cachedImage");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
let FeedbackResult = exports.FeedbackResult = /*#__PURE__*/function (FeedbackResult) {
  FeedbackResult["None"] = "None";
  FeedbackResult["ThumbUp"] = "Like";
  FeedbackResult["ThumbDown"] = "Dislike";
  return FeedbackResult;
}({});
const ArticleRating = ({
  title,
  feedbackResult,
  onRatingChange
}) => {
  const {
    themeColors,
    typography
  } = (0, _themes.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors, typography);
  const [selectedRating, setSelectedRating] = (0, _react.useState)(feedbackResult);
  const handleRatingChange = tipUsefulState => {
    if (selectedRating === tipUsefulState) {
      tipUsefulState = FeedbackResult.None;
    }
    setSelectedRating(tipUsefulState);
    onRatingChange(tipUsefulState);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.feedbackCard,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: styles.feedbackCardTitle,
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.buttonContainer,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        style: [styles.feedbackBtnBg, selectedRating === FeedbackResult.ThumbUp && styles.feedbackBtnSelected],
        onPress: () => handleRatingChange(FeedbackResult.ThumbUp),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImage, {
          source: _images.default.thumbUp,
          style: styles.feedbackIcon
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        style: [styles.feedbackBtnBg, selectedRating === FeedbackResult.ThumbDown && styles.feedbackBtnSelected],
        onPress: () => handleRatingChange(FeedbackResult.ThumbDown),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImage, {
          source: _images.default.thumbDown,
          style: styles.feedbackIcon
        })
      })]
    })]
  });
};
exports.ArticleRating = ArticleRating;
//# sourceMappingURL=index.js.map