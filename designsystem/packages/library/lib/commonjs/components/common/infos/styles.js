"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _utils = require("../../../utils");
var _reactNative = require("react-native");
var _spacing = require("../../../themes/spacing");
const getStyles = (themeColors, typography) => _reactNative.StyleSheet.create({
  container: {
    padding: _spacing.spacing.md,
    backgroundColor: themeColors.fill.primary,
    borderRadius: _spacing.radius.md,
    alignItems: "center",
    gap: _spacing.spacing.md,
    flexDirection: "row"
  },
  mainContent: {
    gap: _spacing.gap.md,
    flex: 1
  },
  badgeBg: {
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: (0, _utils.normalize)(12),
    paddingVertical: _spacing.spacing.xs3,
    backgroundColor: themeColors.fill.dark,
    borderRadius: _spacing.radius.xl
  },
  badgeText: {
    ...typography.caption,
    color: themeColors.text.inversedChangeBlack,
    alignSelf: "center"
  },
  linkText: {
    ...typography.bodyUnderline,
    color: themeColors.text.active
  },
  emojiContainer: {
    width: (0, _utils.normalize)(52),
    height: (0, _utils.normalize)(52),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColors.text.inversedRemainsWhite,
    borderRadius: _spacing.radius.xl
  },
  emoji: {
    width: (0, _utils.normalize)(25),
    height: (0, _utils.normalize)(25),
    resizeMode: "contain"
  },
  arrow: {
    width: (0, _utils.normalize)(24),
    height: (0, _utils.normalize)(24),
    resizeMode: "contain",
    tintColor: themeColors.icon.primary
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map