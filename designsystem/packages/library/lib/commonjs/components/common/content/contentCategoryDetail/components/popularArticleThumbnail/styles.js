"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _reactNative = require("react-native");
var _themes = require("../../../../../../themes");
const getStyles = (themeColors, typography) => _reactNative.StyleSheet.create({
  card: {
    width: 230,
    height: 325,
    borderRadius: _themes.radius.md,
    overflow: "hidden"
  },
  cardImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  cardImageBorder: {
    borderRadius: _themes.radius.md
  },
  premiumIconContainer: {
    position: "absolute",
    top: _themes.spacing.xs,
    right: _themes.spacing.xs,
    width: _themes.iconSize.lg,
    height: _themes.iconSize.lg,
    borderRadius: _themes.iconSize.lg,
    backgroundColor: themeColors.fill.blockRemainsWhite,
    justifyContent: "center",
    alignItems: "center"
  },
  premiumIcon: {
    width: _themes.iconSize.md,
    height: _themes.iconSize.md
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%"
  },
  textContainer: {
    padding: _themes.spacing.s,
    gap: _themes.spacing.xs3
  },
  tag: {
    ...typography.caption,
    color: themeColors.text.inversedRemainsWhite
  },
  title: {
    ...typography.subtitle,
    color: themeColors.text.inversedRemainsWhite
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map