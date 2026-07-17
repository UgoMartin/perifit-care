"use strict";

import { gap, iconSize, radius, spacing } from "../../../../themes";
import { StyleSheet } from "react-native";
export const getStyles = (themeColors, typography) => StyleSheet.create({
  heroImage: {
    height: 240,
    borderRadius: radius.md,
    overflow: "hidden",
    justifyContent: "space-between"
  },
  badgeIconContainer: {
    alignSelf: "flex-end",
    marginRight: spacing.xs,
    marginTop: spacing.xs2,
    padding: spacing.xs3,
    backgroundColor: themeColors.icon.inversedRemainsWhite,
    borderRadius: radius.xl
  },
  badgeIcon: {
    width: iconSize.md,
    height: iconSize.md
  },
  contentContainer: {
    marginBottom: spacing.md,
    marginLeft: spacing.md,
    gap: gap.md
  },
  heroText: {
    ...typography.h4,
    color: themeColors.text.inversedRemainsWhite,
    width: "70%"
  }
});
//# sourceMappingURL=styles.js.map