"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _reactNative = require("react-native");
var _themes = require("../../../../themes");
const getStyles = themeColors => _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingHorizontal: _themes.spacing.md,
    paddingBottom: _themes.spacing.lg,
    gap: _themes.gap.xmd
  },
  paywallOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 300
  },
  iconContainer: {
    width: _themes.iconSize.lg,
    height: _themes.iconSize.lg,
    borderRadius: _themes.iconSize.lg,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColors.fill.primary
  },
  icon: {
    width: _themes.iconSize.s,
    height: _themes.iconSize.s
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map