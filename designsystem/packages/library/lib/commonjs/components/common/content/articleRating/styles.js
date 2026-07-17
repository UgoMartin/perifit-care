"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _reactNative = require("react-native");
var _themes = require("../../../../themes");
const getStyles = (themeColors, typography) => _reactNative.StyleSheet.create({
  feedbackCard: {
    flexDirection: "row",
    borderRadius: _themes.radius.md,
    padding: _themes.spacing.md,
    marginTop: _themes.spacing.lg,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: themeColors.fill.primary
  },
  feedbackCardTitle: {
    ...typography.subtitle,
    flex: 1
  },
  buttonContainer: {
    flexDirection: "row"
  },
  feedbackBtnBg: {
    width: 46,
    height: 46,
    borderRadius: _themes.radius.lg,
    backgroundColor: themeColors.fill.block,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: _themes.spacing.xs2
  },
  feedbackBtnSelected: {
    backgroundColor: themeColors.icon.active
  },
  feedbackIcon: {
    resizeMode: "contain",
    width: _themes.iconSize.lg,
    height: _themes.iconSize.lg
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map