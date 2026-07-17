import React, { createContext, useState, useContext } from "react";
import { colors } from "./colors";
import { Theme, ThemeColors } from "./types";
import { getTypography, Typography } from "./typography";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  themeColors: ThemeColors;
  typography: Typography;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("light");

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeColors = colors[theme];
  const typography = getTypography(themeColors);

  return <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, themeColors, typography }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
