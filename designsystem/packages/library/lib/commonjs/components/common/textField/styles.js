"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _reactNative = require("react-native");
var _utils = _interopRequireWildcard(require("../../../utils"));
var _spacing = require("../../../themes/spacing");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const getStyles = (themeColors, typography) => _reactNative.StyleSheet.create({
  inputContainer: {
    height: _utils.default.TEXTINPUT_HEIGHT,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeColors.border.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: _spacing.spacing.md
  },
  label: {
    ...typography.caption,
    color: themeColors.text.inactive,
    position: "absolute",
    top: _spacing.spacing.xs2
  },
  input: {
    ...typography.body,
    flex: 1,
    paddingBottom: 0,
    paddingLeft: 0
  },
  showHidePasswordButton: {
    width: (0, _utils.normalize)(40),
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    ...typography.caption,
    color: themeColors.text.error,
    marginTop: _spacing.spacing.xs3,
    marginLeft: _spacing.spacing.xs3
  },
  showHidePasswordIcon: {
    tintColor: themeColors.icon.primary
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map