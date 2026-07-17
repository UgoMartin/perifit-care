"use strict";

import React, { createContext, useState, useContext } from "react";
import { colors } from "./colors";
import { getTypography } from "./typography";
import { jsx as _jsx } from "react/jsx-runtime";
const ThemeContext = /*#__PURE__*/createContext(undefined);
export const ThemeProvider = ({
  children
}) => {
  const [theme, setThemeState] = useState("light");
  const setTheme = newTheme => {
    setThemeState(newTheme);
  };
  const toggleTheme = () => {
    setThemeState(prevTheme => prevTheme === "light" ? "dark" : "light");
  };
  const themeColors = colors[theme];
  const typography = getTypography(themeColors);
  return /*#__PURE__*/_jsx(ThemeContext.Provider, {
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
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
//# sourceMappingURL=themeContext.js.map