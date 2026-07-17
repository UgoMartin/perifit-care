"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Confirmation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _images = _interopRequireDefault(require("../../../assets/images"));
var _themeContext = require("../../../themes/themeContext");
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Confirmation = ({
  title,
  caption,
  type = "success",
  containerStyle,
  titleStyle,
  captionStyle,
  icon
}) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();
  const textColor = type === "success" ? themeColors.text.success : themeColors.text.error;
  const bgColor = type === "success" ? themeColors.fill.successLight : themeColors.fill.errorLight;
  const iconColor = type === "success" ? themeColors.icon.success : themeColors.icon.error;
  const defaultIcon = type === "success" ? _images.default.checkIcon : _images.default.closeCircleIcon;
  const renderIcon = (0, _react.useCallback)(() => {
    if (/*#__PURE__*/_react.default.isValidElement(icon)) {
      return icon;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
      style: [_styles.styles.checkIcon, {
        tintColor: iconColor
      }],
      source: icon ?? defaultIcon
    });
  }, [defaultIcon, icon, iconColor]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [_styles.styles.container, {
      backgroundColor: bgColor
    }, containerStyle],
    children: [renderIcon(), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: {
        flexShrink: 1
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [typography.subtitle, {
          color: textColor
        }, titleStyle],
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [typography.caption, {
          color: textColor
        }, captionStyle],
        children: caption
      })]
    })]
  });
};
exports.Confirmation = Confirmation;
//# sourceMappingURL=index.js.map