"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _themes = require("../../../../themes");
var _reactNative = require("react-native");
const getStyles = (themeColors, typography) => _reactNative.StyleSheet.create({
  heroImage: {
    height: 240,
    borderRadius: _themes.radius.md,
    overflow: "hidden",
    justifyContent: "space-between"
  },
  badgeIconContainer: {
    alignSelf: "flex-end",
    marginRight: _themes.spacing.xs,
    marginTop: _themes.spacing.xs2,
    padding: _themes.spacing.xs3,
    backgroundColor: themeColors.icon.inversedRemainsWhite,
    borderRadius: _themes.radius.xl
  },
  badgeIcon: {
    width: _themes.iconSize.md,
    height: _themes.iconSize.md
  },
  contentContainer: {
    marginBottom: _themes.spacing.md,
    marginLeft: _themes.spacing.md,
    gap: _themes.gap.md
  },
  heroText: {
    ...typography.h4,
    color: themeColors.text.inversedRemainsWhite,
    width: "70%"
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map