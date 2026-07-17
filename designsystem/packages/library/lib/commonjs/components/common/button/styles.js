"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.BUTTON_SMALL_SIZE = exports.BUTTON_BIG_SIZE = void 0;
var _reactNative = require("react-native");
var _themes = require("../../../themes");
var _spacing = require("../../../themes/spacing");
var _utils = require("../../../utils");
const BUTTON_BIG_SIZE = exports.BUTTON_BIG_SIZE = (0, _utils.normalize)(60);
const BUTTON_SMALL_SIZE = exports.BUTTON_SMALL_SIZE = (0, _utils.normalize)(42);
const styles = exports.styles = _reactNative.StyleSheet.create({
  base: {
    borderRadius: _themes.radius.xl,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: _spacing.gap.md
  }
});
//# sourceMappingURL=styles.js.map