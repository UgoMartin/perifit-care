import { StyleSheet } from "react-native";
import { ThemeColors, Typography, spacing } from "../../../../../../themes";

export const getStyles = (themeColors: ThemeColors, typography: Typography) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: spacing.s,
      alignItems: "center",
    },
    title: {
      ...typography.subtitle,
      color: themeColors.text.primary,
      flex: 1,
    },
  });
