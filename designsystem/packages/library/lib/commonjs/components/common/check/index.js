"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Check = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _icons = require("../../../assets/icons");
var _themes = require("../../../themes");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Check = ({
  size = (0, _utils.normalize)(24),
  checked,
  type = "default",
  onPress,
  ...restProps
}) => {
  const {
    themeColors
  } = (0, _themes.useTheme)();
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = (0, _react.useState)(checked ?? false);

  // Sync internal state when used as a controlled component
  (0, _react.useEffect)(() => {
    if (isControlled) {
      setInternalChecked(checked);
    }
  }, [checked, isControlled]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    onPress: () => {
      if (!isControlled) {
        setInternalChecked(prev => !prev);
      }
      onPress?.(internalChecked);
    },
    style: ({
      pressed
    }) => ({
      justifyContent: "center",
      alignItems: "center",
      width: size,
      height: size,
      backgroundColor: internalChecked ? themeColors.fill.dark : "transparent",
      borderRadius: type === "circle" ? size / 2 : _themes.radius.s,
      borderWidth: internalChecked ? 0 : 1,
      borderColor: themeColors.border.primary,
      opacity: pressed ? 0.7 : 1
    }),
    ...restProps,
    children: internalChecked && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CheckMarkIcon, {
      size: size * 0.6,
      color: themeColors.text.inversedChangeBlack
    })
  });
};
exports.Check = Check;
//# sourceMappingURL=index.js.map