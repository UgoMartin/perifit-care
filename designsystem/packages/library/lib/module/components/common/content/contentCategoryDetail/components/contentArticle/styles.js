"use strict";

import { StyleSheet } from "react-native";
import { spacing } from "../../../../../../themes";
export const getStyles = (themeColors, typography) => StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing.s,
    alignItems: "center"
  },
  title: {
    ...typography.subtitle,
    color: themeColors.text.primary,
    flex: 1
  }
});
//# sourceMappingURL=styles.js.map