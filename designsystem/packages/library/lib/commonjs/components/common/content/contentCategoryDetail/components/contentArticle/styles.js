"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _reactNative = require("react-native");
var _themes = require("../../../../../../themes");
const getStyles = (themeColors, typography) => _reactNative.StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: _themes.spacing.s,
    alignItems: "center"
  },
  title: {
    ...typography.subtitle,
    color: themeColors.text.primary,
    flex: 1
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map