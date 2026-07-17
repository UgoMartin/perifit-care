"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _themes = require("../../../../themes");
var _reactNative = require("react-native");
const createStyles = (themeColors, typography) => {
  return _reactNative.StyleSheet.create({
    container: {
      gap: _themes.gap.md,
      padding: _themes.spacing.xs,
      borderRadius: _themes.radius.md,
      backgroundColor: themeColors.fill.primary,
      flexDirection: "row"
    },
    imageContainer: {
      alignItems: "center",
      justifyContent: "center"
    },
    contentContainer: {
      gap: _themes.gap.xs,
      alignItems: "flex-start",
      justifyContent: "center",
      flexShrink: 1
    },
    image: {
      width: 80,
      height: 80,
      resizeMode: "contain",
      borderRadius: _themes.radius.md
    },
    title: {
      ...typography.subtitle
    },
    actionText: {
      ...typography.subtitle,
      textDecorationLine: "underline"
    }
  });
};
var _default = exports.default = createStyles;
//# sourceMappingURL=styles.js.map