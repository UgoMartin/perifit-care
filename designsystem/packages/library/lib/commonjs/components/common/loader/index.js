"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themes = require("../../../themes");
var _utils = _interopRequireDefault(require("../../../utils"));
var _loader_animation = _interopRequireDefault(require("../../../assets/loader_animation.json"));
var _lottieReactNative = _interopRequireDefault(require("lottie-react-native"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Loader = ({
  title,
  subtitle,
  size
}) => {
  const {
    typography
  } = (0, _themes.useTheme)();
  const windowSize = _reactNative.Dimensions.get("window");
  const isLandscape = windowSize.width > windowSize.height;
  const loadingSize = size ?? Math.min(_utils.default.SCREEN_HEIGHT, _utils.default.SCREEN_WIDTH) * (isLandscape ? 0.65 : 0.8);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: {
      alignItems: "center",
      gap: _themes.spacing.xs
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lottieReactNative.default, {
      style: {
        width: loadingSize,
        height: loadingSize
      },
      source: _loader_animation.default,
      autoPlay: true,
      loop: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [typography.h2, {
        textAlign: "center"
      }],
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [typography.body, {
        textAlign: "center"
      }],
      children: subtitle
    })]
  });
};
exports.Loader = Loader;
//# sourceMappingURL=index.js.map