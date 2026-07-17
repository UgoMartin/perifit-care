"use strict";

import { StyleSheet } from "react-native";
import { radius, spacing } from "../../../themes";
import { normalize } from "../../../utils";
export const getStyles = (themeColors, typography) => StyleSheet.create({
  container: {
    alignSelf: "baseline",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.lg,
    paddingHorizontal: spacing.xs
  },
  icon: {
    width: normalize(16),
    height: normalize(16),
    marginRight: spacing.xs2
  },
  text: {
    ...typography.caption,
    color: themeColors.text.inversedChangeBlack
  }
});
//# sourceMappingURL=styles.js.map