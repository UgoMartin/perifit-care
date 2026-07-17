"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _reactNative = require("react-native");
var _themes = require("../../../../../../themes");
const getStyles = themeColors => _reactNative.StyleSheet.create({
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: _themes.radius.md,
    overflow: "hidden"
  },
  thumbnailBorder: {
    borderRadius: _themes.radius.md
  },
  premiumIconContainer: {
    position: "absolute",
    top: _themes.gap.md,
    right: _themes.gap.md,
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
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map