"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryThumbnail = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _brandToken = require("../../../../themes/brandToken");
var _themeContext = require("../../../../themes/themeContext");
var _styles = require("./styles");
var _utils = _interopRequireWildcard(require("../../../../utils"));
var _htmlEntities = require("html-entities");
var _cachedImage = require("../utils/cachedImage");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CategoryThumbnail = ({
  title,
  image,
  badgeIcon,
  onPress,
  width,
  height,
  style
}) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors, typography, width, height);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    activeOpacity: _utils.default.TOUCHABLE_ACTIVE_OPACITY,
    style: [styles.card, style],
    onPress: onPress ?? (() => {}),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_cachedImage.CachedImageBackground, {
      source: image,
      style: styles.cardImage,
      children: [badgeIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.badgeIconContainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImage, {
          source: badgeIcon,
          style: styles.badgeIcon
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
        locations: [0.7, 1],
        colors: [(0, _utils.hexWithAlpha)(_brandToken.brandToken.brand2["900"], 0), (0, _utils.hexWithAlpha)(_brandToken.brandToken.brand2["900"], 0.7)]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.cardTitle,
        children: (0, _htmlEntities.decode)(title)
      })]
    })
  });
};
exports.CategoryThumbnail = CategoryThumbnail;
//# sourceMappingURL=index.js.map