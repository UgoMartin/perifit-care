"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckMarkIcon = exports.CheckIcon = void 0;
var _octicons = _interopRequireDefault(require("@react-native-vector-icons/octicons"));
var _fontawesome = require("@react-native-vector-icons/fontawesome6");
var _utils = require("../../utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CheckIcon = ({
  size = (0, _utils.normalize)(24),
  color = "white"
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_octicons.default, {
    name: "check-circle-fill",
    size: size,
    color: color
  });
};
exports.CheckIcon = CheckIcon;
const CheckMarkIcon = ({
  size = (0, _utils.normalize)(24),
  color = "black"
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_fontawesome.FontAwesome6, {
    name: "check",
    color: color,
    size: size,
    iconStyle: "solid"
  });
};
exports.CheckMarkIcon = CheckMarkIcon;
//# sourceMappingURL=index.js.map