"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = exports.ICON_RATIO = exports.BORDER_RATIO = void 0;
var _reactNative = require("react-native");
const BORDER_RATIO = exports.BORDER_RATIO = 3 / 7;
const ICON_RATIO = exports.ICON_RATIO = 0.5;
const getStyles = (themeColors, size) => _reactNative.StyleSheet.create({
  container: {
    width: size,
    height: size,
    borderRadius: size * BORDER_RATIO,
    backgroundColor: themeColors.fill.success,
    justifyContent: "center",
    alignItems: "center"
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map