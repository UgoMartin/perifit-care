"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _utils = require("@perifit/app-design-system/src/utils");
var _themes = require("../../../themes");
var _reactNative = require("react-native");
const getStyles = (themeColors, typography) => _reactNative.StyleSheet.create({
  paywallGradient: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    gap: _themes.gap.lg,
    backgroundColor: themeColors.icon.clubPerifitRemainsBlack
  },
  paywallHeroImage: {
    width: "100%"
  },
  paywallHeroImageContent: {
    width: "100%",
    height: "100%"
  },
  paywallHeroGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  paywallLargePremiumIcon: {
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
    height: 132
  },
  paywallBody: {
    width: "100%",
    alignItems: "center",
    gap: _themes.gap.md,
    paddingHorizontal: _themes.spacing.md
  },
  paywallTitle: {
    ...typography.h4,
    color: themeColors.text.inversedRemainsWhite,
    textAlign: "center"
  },
  paywallSubtitle: {
    ...typography.body,
    color: themeColors.text.inversedRemainsWhite,
    textAlign: "center",
    opacity: 0.9
  },
  paywallButtons: {
    width: "100%",
    gap: _themes.gap.xmd
  },
  paywallPrimaryButton: {
    width: "100%",
    borderRadius: _themes.radius.xl
  },
  paywallSecondaryButton: {
    width: "100%",
    borderRadius: _themes.radius.xl,
    backgroundColor: (0, _utils.getColorWithAlpha)(themeColors.text.inversedRemainsWhite, 0.102)
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map