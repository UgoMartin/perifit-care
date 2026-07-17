"use strict";

import { StyleSheet } from "react-native";
export const BORDER_RATIO = 3 / 7;
export const ICON_RATIO = 0.5;
export const getStyles = (themeColors, size) => StyleSheet.create({
  container: {
    width: size,
    height: size,
    borderRadius: size * BORDER_RATIO,
    backgroundColor: themeColors.fill.success,
    justifyContent: "center",
    alignItems: "center"
  }
});
//# sourceMappingURL=styles.js.map