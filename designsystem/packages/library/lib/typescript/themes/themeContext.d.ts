import React from "react";
import { Theme, ThemeColors } from "./types";
import { Typography } from "./typography";
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
    themeColors: ThemeColors;
    typography: Typography;
}
export declare const ThemeProvider: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
//# sourceMappingURL=themeContext.d.ts.map