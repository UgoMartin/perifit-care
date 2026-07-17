import { StyleSheet } from "react-native";
import { radius, spacing, ThemeColors, Typography } from "../../../../themes";
import { iconSize } from "../../../../themes";

export const getStyles = (themeColors: ThemeColors, typography: Typography) =>
  StyleSheet.create({
    feedbackCard: {
      flexDirection: "row",
      borderRadius: radius.md,
      padding: spacing.md,
      marginTop: spacing.lg,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: themeColors.fill.primary,
    },
    feedbackCardTitle: {
      ...typography.subtitle,
      flex: 1,
    },
    buttonContainer: {
      flexDirection: "row",
    },
    feedbackBtnBg: {
      width: 46,
      height: 46,
      borderRadius: radius.lg,
      backgroundColor: themeColors.fill.block,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: spacing.xs2,
    },
    feedbackBtnSelected: {
      backgroundColor: themeColors.icon.active,
    },
    feedbackIcon: {
      resizeMode: "contain",
      width: iconSize.lg,
      height: iconSize.lg,
    },
  });
