"use strict";

import { normalize } from "../../../utils";
import { StyleSheet } from "react-native";
import { gap, radius, spacing } from "../../../themes/spacing";
export const getStyles = (themeColors, typography) => StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: themeColors.fill.primary,
    borderRadius: radius.md,
    alignItems: "center",
    gap: spacing.md,
    flexDirection: "row"
  },
  mainContent: {
    gap: gap.md,
    flex: 1
  },
  badgeBg: {
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: normalize(12),
    paddingVertical: spacing.xs3,
    backgroundColor: themeColors.fill.dark,
    borderRadius: radius.xl
  },
  badgeText: {
    ...typography.caption,
    color: themeColors.text.inversedChangeBlack,
    alignSelf: "center"
  },
  linkText: {
    ...typography.bodyUnderline,
    color: themeColors.text.active
  },
  emojiContainer: {
    width: normalize(52),
    height: normalize(52),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColors.text.inversedRemainsWhite,
    borderRadius: radius.xl
  },
  emoji: {
    width: normalize(25),
    height: normalize(25),
    resizeMode: "contain"
  },
  arrow: {
    width: normalize(24),
    height: normalize(24),
    resizeMode: "contain",
    tintColor: themeColors.icon.primary
  }
});
//# sourceMappingURL=styles.js.map