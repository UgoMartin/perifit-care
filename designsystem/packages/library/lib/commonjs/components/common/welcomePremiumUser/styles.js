"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _reactNative = require("react-native");
var _themes = require("../../../themes");
var _utils = require("../../../utils");
const getStyles = (themeColors, typography, insets) => _reactNative.StyleSheet.create({
  container: {
    padding: _themes.spacing.md,
    backgroundColor: themeColors.text.clubPerifit
  },
  fullScreenContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: themeColors.text.clubPerifit,
    paddingBottom: insets.bottom || _themes.spacing.md
  },
  iconContainer: {
    width: (0, _utils.normalize)(120),
    height: (0, _utils.normalize)(120),
    borderRadius: (0, _utils.normalize)(60),
    backgroundColor: themeColors.fill.blockRemainsWhite,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: _themes.spacing.md
  },
  icon: {
    width: (0, _utils.normalize)(88),
    height: (0, _utils.normalize)(81),
    resizeMode: "contain"
  },
  contentContainer: {
    gap: _themes.gap.s,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flex: 1
  },
  closeIcon: {
    width: _themes.iconSize.md,
    height: _themes.iconSize.md
  },
  title: {
    ...typography.h2,
    color: themeColors.text.inversedRemainsWhite,
    textAlign: "center"
  },
  description: {
    ...typography.body,
    color: themeColors.text.inversedRemainsWhite,
    textAlign: "center"
  },
  textButton: {
    color: themeColors.text.clubPerifit
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map