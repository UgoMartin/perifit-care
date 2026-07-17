import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../themes";

export const BORDER_RATIO = 3 / 7;
export const ICON_RATIO = 0.5;

export const getStyles = (themeColors: ThemeColors, size: number) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size * BORDER_RATIO,
      backgroundColor: themeColors.fill.success,
      justifyContent: "center",
      alignItems: "center",
    },
  });
