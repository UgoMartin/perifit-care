"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkmark = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _images = _interopRequireDefault(require("../../../assets/images"));
var _utils = require("../../../utils");
var _themes = require("../../../themes");
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Checkmark = ({
  size = (0, _utils.normalize)(28)
}) => {
  const {
    themeColors
  } = (0, _themes.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors, size);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: styles.container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
      source: _images.default.whiteCheckIcon,
      style: {
        width: size * _styles.ICON_RATIO,
        resizeMode: "contain"
      }
    })
  });
};
exports.Checkmark = Checkmark;
//# sourceMappingURL=index.js.map