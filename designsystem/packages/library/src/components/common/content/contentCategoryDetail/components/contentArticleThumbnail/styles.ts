import { StyleSheet } from "react-native";
import { ThemeColors, gap, iconSize, radius } from "../../../../../../themes";

export const getStyles = (themeColors: ThemeColors) =>
  StyleSheet.create({
    thumbnail: {
      width: 100,
      height: 100,
      borderRadius: radius.md,
      overflow: "hidden",
    },
    thumbnailBorder: {
      borderRadius: radius.md,
    },
    premiumIconContainer: {
      position: "absolute",
      top: gap.md,
      right: gap.md,
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
  });
