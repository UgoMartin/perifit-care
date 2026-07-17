"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../../themes/themeContext");
var _spacing = require("../../../themes/spacing");
var _styles = require("./styles");
var _utils = require("../../../utils");
var _images = _interopRequireDefault(require("../../../assets/images"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * An input-like component that mimics a Material dropdown/select field with floating label and error state support.
 */
const SelectField = props => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors, typography);
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const showHint = Boolean(props.value && props.value.length > 0);
  const getBorderColor = () => {
    if (props.editable === false) {
      return themeColors.border.secondary;
    }
    if (props.error) {
      return themeColors.border.error;
    }
    if (props.borderColor) {
      return props.borderColor;
    }
    return isFocused ? themeColors.border.active : themeColors.border.primary;
  };
  const handlePressIn = () => setIsFocused(true);
  const handlePressOut = () => setIsFocused(false);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: {
      width: "100%"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
      onPress: props.onPress,
      onPressIn: handlePressIn,
      onPressOut: handlePressOut,
      disabled: props.editable === false,
      style: [styles.inputContainer, {
        borderColor: getBorderColor(),
        opacity: props.editable === false ? 0.5 : 1
      }],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: {
          flex: 1,
          justifyContent: showHint ? "flex-start" : "center"
        },
        children: [showHint && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.label, {
            color: props.error ? themeColors.text.error : themeColors.text.inactive
          }],
          children: props.label
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.valueText, showHint ? {
            paddingTop: _spacing.spacing.md
          } : {}, showHint ? typography.body : {
            ...typography.body,
            color: themeColors.text.inactive
          }],
          numberOfLines: 1,
          children: showHint ? props.value : props.label
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.iconContainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
          source: _images.default.chevronIcon,
          style: {
            width: (0, _utils.normalize)(24),
            height: (0, _utils.normalize)(24),
            resizeMode: "contain",
            tintColor: themeColors.icon.primary
          }
        })
      })]
    }), props.error ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: styles.errorText,
      children: props.error
    }) : null]
  });
};
exports.SelectField = SelectField;
//# sourceMappingURL=index.js.map