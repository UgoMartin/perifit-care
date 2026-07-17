"use strict";

import { radius, spacing } from "../../../../themes";
import { StyleSheet } from "react-native";
export const getStyles = (themeColors, typography, width, height) => StyleSheet.create({
  card: {
    width,
    height,
    borderRadius: radius.md,
    overflow: "hidden",
    marginBottom: spacing.s
  },
  cardImage: {
    flex: 1,
    justifyContent: "flex-end"
  },
  badgeIconContainer: {
    position: "absolute",
    top: spacing.xs2,
    right: spacing.xs,
    padding: spacing.xs3,
    backgroundColor: themeColors.icon.inversedRemainsWhite,
    borderRadius: radius.xl,
    zIndex: 1
  },
  badgeIcon: {
    width: 24,
    height: 24
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  cardTitle: {
    ...typography.h5,
    color: themeColors.text.inversedRemainsWhite,
    margin: spacing.s
  }
});
//# sourceMappingURL=styles.js.map