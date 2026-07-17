"use strict";

import { StyleSheet } from "react-native";
import { spacing, gap, iconSize } from "../../../../themes";
export const getStyles = themeColors => StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.lg,
    gap: gap.xmd
  },
  paywallOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 300
  },
  iconContainer: {
    width: iconSize.lg,
    height: iconSize.lg,
    borderRadius: iconSize.lg,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColors.fill.primary
  },
  icon: {
    width: iconSize.s,
    height: iconSize.s
  }
});
//# sourceMappingURL=styles.js.map