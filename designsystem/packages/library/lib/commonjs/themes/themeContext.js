"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _colors = require("./colors");
var _typography = require("./typography");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const ThemeContext = /*#__PURE__*/(0, _react.createContext)(undefined);
const ThemeProvider = ({
  children
}) => {
  const [theme, setThemeState] = (0, _react.useState)("light");
  const setTheme = newTheme => {
    setThemeState(newTheme);
  };
  const toggleTheme = () => {
    setThemeState(prevTheme => prevTheme === "light" ? "dark" : "light");
  };
  const themeColors = _colors.colors[theme];
  const typography = (0, _typography.getTypography)(themeColors);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ThemeContext.Provider, {
    value: {
      theme,
      toggleTheme,
      setTheme,
      themeColors,
      typography
    },
    children: children
  });
};
exports.ThemeProvider = ThemeProvider;
const useTheme = () => {
  const context = (0, _react.useContext)(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
exports.useTheme = useTheme;
//# sourceMappingURL=themeContext.js.map