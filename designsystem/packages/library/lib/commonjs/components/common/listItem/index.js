"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../../themes/themeContext");
var _images = _interopRequireDefault(require("../../../assets/images"));
var _utils = _interopRequireWildcard(require("../../../utils"));
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Simple selectable row with leading icon, title/description and trailing arrow.
 */
const ListItem = ({
  title,
  description,
  titleStyle,
  activeValue,
  icon,
  onPress,
  selected = false,
  disabled = false,
  style,
  descriptionStyle,
  rightIcon,
  rightIconStyle,
  showAlertDot = false,
  ...restProps
}) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();

  // Build container style depending on selected / disabled state
  const containerStyle = _react.default.useMemo(() => [{
    ..._styles.styles.container,
    backgroundColor: selected ? themeColors.fill.selected : themeColors.fill.primary,
    borderWidth: 1,
    borderColor: selected ? themeColors.border.selected : themeColors.fill.primary,
    opacity: disabled ? 0.6 : 1
  }, style || null], [disabled, selected, style, themeColors]);
  const renderIcon = () => {
    if (!icon) {
      return null;
    }
    if (/*#__PURE__*/_react.default.isValidElement(icon)) {
      return icon;
    }
    // Fallback to default info icon when no custom icon provided
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
      source: icon ?? _images.default.infoIcon,
      style: {
        width: (0, _utils.normalize)(20),
        height: (0, _utils.normalize)(20),
        resizeMode: "contain"
      }
    });
  };
  const renderRightIcon = () => {
    if (rightIcon === null) {
      return null;
    }
    if (rightIcon === undefined) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
        source: _images.default.arrowNextIcon,
        style: [_styles.styles.defaultRightIcon, {
          tintColor: themeColors.icon.primary
        }]
      });
    }
    if (/*#__PURE__*/_react.default.isValidElement(rightIcon)) {
      return rightIcon;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
      source: rightIcon,
      style: [_styles.styles.rightIcon, rightIconStyle]
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    accessibilityRole: "button",
    disabled: disabled,
    onPress: onPress,
    hitSlop: _utils.default.TOUCHABLE_HIT_SLOP,
    style: containerStyle,
    ...restProps,
    children: ({
      pressed
    }) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: _styles.styles.row,
        children: [renderIcon(), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: _styles.styles.contentContainer,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [typography.body, titleStyle],
            children: title
          }), (!!description || !!activeValue) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
            style: _styles.styles.descriptionContainer,
            children: [!!description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
              style: [typography.caption, descriptionStyle],
              children: description
            }), !!activeValue && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
              style: [typography.caption, {
                color: themeColors.text.active
              }],
              children: activeValue
            })]
          })]
        }), showAlertDot && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [_styles.styles.alertDot, {
            backgroundColor: themeColors.text.error
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: _styles.styles.rightIconContainer,
          children: renderRightIcon()
        })]
      }), pressed && !disabled && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        pointerEvents: "none",
        style: [_styles.styles.overlay, {
          backgroundColor: themeColors.fill.hover
        }]
      })]
    })
  });
};
exports.ListItem = ListItem;
//# sourceMappingURL=index.js.map