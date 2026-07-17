import { getColorWithAlpha } from "@perifit/app-design-system/src/utils";
import { gap, radius, spacing, ThemeColors, Typography } from "../../../themes";
import { StyleSheet } from "react-native";

export const getStyles = (themeColors: ThemeColors, typography: Typography) =>
  StyleSheet.create({
    paywallGradient: {
      flexGrow: 1,
      width: "100%",
      alignItems: "center",
      gap: gap.lg,
      backgroundColor: themeColors.icon.clubPerifitRemainsBlack,
    },
    paywallHeroImage: {
      width: "100%",
    },
    paywallHeroImageContent: {
      width: "100%",
      height: "100%",
    },
    paywallHeroGradient: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    paywallLargePremiumIcon: {
      position: "absolute",
      alignSelf: "center",
      bottom: 0,
      height: 132,
    },
    paywallBody: {
      width: "100%",
      alignItems: "center",
      gap: gap.md,
      paddingHorizontal: spacing.md,
    },
    paywallTitle: {
      ...typography.h4,
      color: themeColors.text.inversedRemainsWhite,
      textAlign: "center",
    },
    paywallSubtitle: {
      ...typography.body,
      color: themeColors.text.inversedRemainsWhite,
      textAlign: "center",
      opacity: 0.9,
    },
    paywallButtons: {
      width: "100%",
      gap: gap.xmd,
    },
    paywallPrimaryButton: {
      width: "100%",
      borderRadius: radius.xl,
    },
    paywallSecondaryButton: {
      width: "100%",
      borderRadius: radius.xl,
      backgroundColor: getColorWithAlpha(themeColors.text.inversedRemainsWhite, 0.102),
    },
  });
