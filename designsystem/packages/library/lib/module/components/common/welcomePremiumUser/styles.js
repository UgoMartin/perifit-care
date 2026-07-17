"use strict";

import { StyleSheet } from "react-native";
import { gap, iconSize, spacing } from "../../../themes";
import { normalize } from "../../../utils";
export const getStyles = (themeColors, typography, insets) => StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: themeColors.text.clubPerifit
  },
  fullScreenContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: themeColors.text.clubPerifit,
    paddingBottom: insets.bottom || spacing.md
  },
  iconContainer: {
    width: normalize(120),
    height: normalize(120),
    borderRadius: normalize(60),
    backgroundColor: themeColors.fill.blockRemainsWhite,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md
  },
  icon: {
    width: normalize(88),
    height: normalize(81),
    resizeMode: "contain"
  },
  contentContainer: {
    gap: gap.s,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flex: 1
  },
  closeIcon: {
    width: iconSize.md,
    height: iconSize.md
  },
  title: {
    ...typography.h2,
    color: themeColors.text.inversedRemainsWhite,
    textAlign: "center"
  },
  description: {
    ...typography.body,
    color: themeColors.text.inversedRemainsWhite,
    textAlign: "center"
  },
  textButton: {
    color: themeColors.text.clubPerifit
  }
});
//# sourceMappingURL=styles.js.map