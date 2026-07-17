"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CustomBottomTabBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _bottomTabs = require("@react-navigation/bottom-tabs");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Custom bottom tab bar that adds a thin divider on top and allows custom height.
 */
const CustomBottomTabBar = props => {
  const ThemedBottomTabBar = _bottomTabs.BottomTabBar;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ThemedBottomTabBar, {
      ...props
    })
  });
};
exports.CustomBottomTabBar = CustomBottomTabBar;
var _default = exports.default = CustomBottomTabBar;
//# sourceMappingURL=customBottomTabBar.js.map