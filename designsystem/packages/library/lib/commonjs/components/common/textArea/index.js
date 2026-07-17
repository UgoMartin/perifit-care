"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../../themes/themeContext");
var _spacing = require("../../../themes/spacing");
var _styles = require("./styles");
var _utils = _interopRequireDefault(require("../../../utils"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * A multiline text area with floating label and error state support.
 */
const TextArea = exports.TextArea = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();
  const styles = (0, _styles.getStyles)(themeColors, typography);
  const inputRef = (0, _react.useRef)(null);
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const minHeight = props.minHeight ?? _utils.default.TEXTINPUT_HEIGHT * 3;
  const [inputHeight, setInputHeight] = (0, _react.useState)(minHeight);

  // Expose inner TextInput methods
  (0, _react.useImperativeHandle)(ref, () => inputRef.current);
  const textValue = props.text || "";
  const showHint = textValue.length > 0;
  const dynamicPaddingTop = showHint ? _spacing.spacing.xs : 0;
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: {
      width: "100%"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.inputContainer, {
        borderWidth: isFocused ? 2 : 1,
        borderColor: getBorderColor(),
        opacity: props.editable === false ? 0.5 : 1,
        minHeight,
        height: Math.max(minHeight, inputHeight)
      }],
      children: [showHint && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.label, {
          color: props.error ? themeColors.text.error : themeColors.text.inactive
        }],
        children: props.label
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, {
        ...props,
        ref: inputRef,
        style: [styles.input, {
          paddingTop: dynamicPaddingTop,
          height: Math.max(minHeight - _spacing.spacing.md * 2, inputHeight - _spacing.spacing.md * 2)
        }],
        placeholder: !showHint ? props.label : "",
        placeholderTextColor: themeColors.text.inactive,
        underlineColorAndroid: "transparent",
        multiline: true,
        onContentSizeChange: e => {
          const height = e.nativeEvent.contentSize.height + _spacing.spacing.md * 2;
          if (height > inputHeight) {
            setInputHeight(height);
          }
        },
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
    }), props.error ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: styles.errorText,
      children: props.error
    }) : null]
  });
});
//# sourceMappingURL=index.js.map