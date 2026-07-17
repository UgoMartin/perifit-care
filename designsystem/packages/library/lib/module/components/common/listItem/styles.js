"use strict";

import { StyleSheet } from "react-native";
import { iconSize, radius, spacing } from "../../../themes";
import { normalize } from "../../../utils";
export const styles = StyleSheet.create({
  container: {
    borderRadius: radius.md,
    overflow: "hidden"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.s
  },
  contentContainer: {
    flex: 1
  },
  descriptionContainer: {
    gap: 2
  },
  alertDot: {
    width: normalize(8),
    height: normalize(8),
    borderRadius: normalize(4)
  },
  rightIconContainer: {
    minHeight: iconSize.md
  },
  defaultRightIcon: {
    width: normalize(24),
    height: normalize(24),
    resizeMode: "contain"
  },
  rightIcon: {
    width: normalize(24),
    height: normalize(24),
    resizeMode: "contain"
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    zIndex: 1
  }
});
//# sourceMappingURL=styles.js.map