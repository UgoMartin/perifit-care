"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../../themes/themeContext");
var _spacing = require("../../../themes/spacing");
var _styles = require("./styles");
var _utils = _interopRequireDefault(require("../../../utils"));
var _images = _interopRequireDefault(require("../../../assets/images"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * A Material-like text field with floating label and error state support.
 */
const TextField = exports.TextField = /*#__PURE__*/(0, _react.forwardRef)(({
  showErrorMessage = true,
  ...props
}, ref) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors, typography);
  const inputRef = (0, _react.useRef)(null);
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const [isShowPassword, setIsShowPassword] = (0, _react.useState)(props.textContentType !== "password" && props.textContentType !== "newPassword");

  // Expose inner TextInput methods
  (0, _react.useImperativeHandle)(ref, () => inputRef.current);
  const textValue = props.text || "";
  const showHint = textValue.length > 0;

  // Enable multiline on iOS to prevent secureTextEntry flicker
  const shouldBeMultiline = props.fixInputAccessoryFlicker && (props.textContentType !== "password" || props.textContentType === "password" && isShowPassword);
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
  const getPaddingTop = () => {
    const space = _spacing.spacing.md;
    switch (_reactNative.Platform.OS) {
      case "ios":
        if (shouldBeMultiline) {
          return textValue.length > 0 ? space + 4 : _spacing.spacing.xs + 2;
        }
        return textValue.length > 0 ? space - 4 : 0;
      case "android":
        return textValue.length > 0 ? space : 0;
      default:
        return space;
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: {
      width: "100%"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.inputContainer, {
        borderWidth: isFocused ? 2 : 1,
        borderColor: getBorderColor(),
        opacity: props.editable === false ? 0.5 : 1
      }],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: {
          flex: 1
        },
        children: [showHint && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.label,
          children: props.label
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, {
          ...props,
          ref: inputRef,
          style: [styles.input, {
            paddingTop: getPaddingTop()
          }, props.showHidePassword ? {} : typography.body],
          placeholder: !showHint ? props.label : "",
          placeholderTextColor: themeColors.text.inactive,
          underlineColorAndroid: "transparent",
          returnKeyType: props.returnKeyType ?? "done",
          multiline: _reactNative.Platform.OS === "ios" && shouldBeMultiline,
          numberOfLines: 1,
          blurOnSubmit: true,
          secureTextEntry: props.showHidePassword && !isShowPassword,
          onFocus: e => {
            setIsFocused(true);
            props.onFocus?.(e);
          },
          onBlur: e => {
            setIsFocused(false);
            props.onBlur?.(e);
          },
          onChangeText: t => {
            props.onChangeText?.(t);
          },
          value: textValue
        })]
      }), props.showHidePassword && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
        hitSlop: _utils.default.TOUCHABLE_HIT_SLOP,
        style: styles.showHidePasswordButton,
        onPress: () => setIsShowPassword(s => !s),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
          style: styles.showHidePasswordIcon,
          source: isShowPassword ? _images.default.hidePasswordIcon : _images.default.showPasswordIcon
        })
      })]
    }), props.error && showErrorMessage ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: styles.errorText,
      children: props.error
    }) : null]
  });
});
//# sourceMappingURL=index.js.map