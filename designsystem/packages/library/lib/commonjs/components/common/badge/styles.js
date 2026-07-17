"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _reactNative = require("react-native");
var _themes = require("../../../themes");
var _utils = require("../../../utils");
const getStyles = (themeColors, typography) => _reactNative.StyleSheet.create({
  container: {
    alignSelf: "baseline",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: _themes.radius.lg,
    paddingHorizontal: _themes.spacing.xs
  },
  icon: {
    width: (0, _utils.normalize)(16),
    height: (0, _utils.normalize)(16),
    marginRight: _themes.spacing.xs2
  },
  text: {
    ...typography.caption,
    color: themeColors.text.inversedChangeBlack
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map