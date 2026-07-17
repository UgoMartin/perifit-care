"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
var _utils = require("../../../utils");
var _spacing = require("../../../themes/spacing");
const styles = exports.styles = _reactNative.StyleSheet.create({
  container: {
    paddingHorizontal: _spacing.spacing.md,
    paddingVertical: _spacing.spacing.s,
    borderRadius: _spacing.radius.md,
    flexDirection: "row",
    gap: _spacing.gap.md
  },
  checkIcon: {
    width: (0, _utils.IsTablet)() ? (0, _utils.normalize)(40) : (0, _utils.normalize)(24),
    height: (0, _utils.IsTablet)() ? (0, _utils.normalize)(40) : (0, _utils.normalize)(24),
    resizeMode: "contain"
  }
});
//# sourceMappingURL=styles.js.map