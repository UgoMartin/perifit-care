"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CachedImageBackground = exports.CachedImage = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeFastImage = _interopRequireDefault(require("@d11/react-native-fast-image"));
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const resolveFastResizeMode = resizeMode => {
  switch (resizeMode) {
    case "contain":
      return _reactNativeFastImage.default.resizeMode.contain;
    case "stretch":
      return _reactNativeFastImage.default.resizeMode.stretch;
    case "center":
      return _reactNativeFastImage.default.resizeMode.center;
    default:
      return _reactNativeFastImage.default.resizeMode.cover;
  }
};
const resolveFastImageSource = source => {
  if (typeof source === "number") {
    return source;
  }
  if (!source || Array.isArray(source)) {
    return null;
  }
  const sourceWithUri = source;
  if (!sourceWithUri.uri) {
    return null;
  }
  return {
    uri: sourceWithUri.uri,
    headers: sourceWithUri.headers,
    cache: _reactNativeFastImage.default.cacheControl.immutable
  };
};
const CachedImage = ({
  source,
  style,
  resizeMode = "cover"
}) => {
  const fastImageSource = resolveFastImageSource(source);
  if (!fastImageSource) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
      source: source,
      style: style,
      resizeMode: resizeMode
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeFastImage.default, {
    source: fastImageSource,
    style: style,
    resizeMode: resolveFastResizeMode(resizeMode)
  });
};
exports.CachedImage = CachedImage;
const CachedImageBackground = ({
  source,
  style,
  imageStyle,
  resizeMode = "cover",
  children
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CachedImage, {
      source: source,
      resizeMode: resizeMode,
      style: [_reactNative.StyleSheet.absoluteFill, imageStyle]
    }), children]
  });
};
exports.CachedImageBackground = CachedImageBackground;
//# sourceMappingURL=cachedImage.js.map