"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _themes = require("../../../../themes");
var _reactNative = require("react-native");
const getStyles = (themeColors, typography, width, height) => _reactNative.StyleSheet.create({
  card: {
    width,
    height,
    borderRadius: _themes.radius.md,
    overflow: "hidden",
    marginBottom: _themes.spacing.s
  },
  cardImage: {
    flex: 1,
    justifyContent: "flex-end"
  },
  badgeIconContainer: {
    position: "absolute",
    top: _themes.spacing.xs2,
    right: _themes.spacing.xs,
    padding: _themes.spacing.xs3,
    backgroundColor: themeColors.icon.inversedRemainsWhite,
    borderRadius: _themes.radius.xl,
    zIndex: 1
  },
  badgeIcon: {
    width: 24,
    height: 24
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  cardTitle: {
    ...typography.h5,
    color: themeColors.text.inversedRemainsWhite,
    margin: _themes.spacing.s
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map