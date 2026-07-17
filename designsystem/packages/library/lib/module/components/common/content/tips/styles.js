"use strict";

import { gap, radius, spacing } from "../../../../themes";
import { StyleSheet } from "react-native";
const createStyles = (themeColors, typography) => {
  return StyleSheet.create({
    container: {
      gap: gap.md,
      padding: spacing.xs,
      borderRadius: radius.md,
      backgroundColor: themeColors.fill.primary,
      flexDirection: "row"
    },
    imageContainer: {
      alignItems: "center",
      justifyContent: "center"
    },
    contentContainer: {
      gap: gap.xs,
      alignItems: "flex-start",
      justifyContent: "center",
      flexShrink: 1
    },
    image: {
      width: 80,
      height: 80,
      resizeMode: "contain",
      borderRadius: radius.md
    },
    title: {
      ...typography.subtitle
    },
    actionText: {
      ...typography.subtitle,
      textDecorationLine: "underline"
    }
  });
};
export default createStyles;
//# sourceMappingURL=styles.js.map