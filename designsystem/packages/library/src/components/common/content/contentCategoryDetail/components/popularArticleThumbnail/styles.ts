import { StyleSheet } from "react-native";
import { ThemeColors, Typography, spacing, iconSize, radius } from "../../../../../../themes";

export const getStyles = (themeColors: ThemeColors, typography: Typography) =>
  StyleSheet.create({
    card: {
      width: 230,
      height: 325,
      borderRadius: radius.md,
      overflow: "hidden",
    },
    cardImage: {
      width: "100%",
      height: "100%",
      justifyContent: "flex-end",
    },
    cardImageBorder: {
      borderRadius: radius.md,
    },
    premiumIconContainer: {
      position: "absolute",
      top: spacing.xs,
      right: spacing.xs,
      width: iconSize.lg,
      height: iconSize.lg,
      borderRadius: iconSize.lg,
      backgroundColor: themeColors.fill.blockRemainsWhite,
      justifyContent: "center",
      alignItems: "center",
    },
    premiumIcon: {
      width: iconSize.md,
      height: iconSize.md,
    },
    gradient: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "50%",
    },
    textContainer: {
      padding: spacing.s,
      gap: spacing.xs3,
    },
    tag: {
      ...typography.caption,
      color: themeColors.text.inversedRemainsWhite,
    },
    title: {
      ...typography.subtitle,
      color: themeColors.text.inversedRemainsWhite,
    },
  });
