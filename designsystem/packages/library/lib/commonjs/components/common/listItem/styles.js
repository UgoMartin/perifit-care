"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
var _themes = require("../../../themes");
var _utils = require("../../../utils");
const styles = exports.styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: _themes.radius.md,
    overflow: "hidden"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: _themes.spacing.xs,
    paddingHorizontal: _themes.spacing.md,
    paddingVertical: _themes.spacing.s
  },
  contentContainer: {
    flex: 1
  },
  descriptionContainer: {
    gap: 2
  },
  alertDot: {
    width: (0, _utils.normalize)(8),
    height: (0, _utils.normalize)(8),
    borderRadius: (0, _utils.normalize)(4)
  },
  rightIconContainer: {
    minHeight: _themes.iconSize.md
  },
  defaultRightIcon: {
    width: (0, _utils.normalize)(24),
    height: (0, _utils.normalize)(24),
    resizeMode: "contain"
  },
  rightIcon: {
    width: (0, _utils.normalize)(24),
    height: (0, _utils.normalize)(24),
    resizeMode: "contain"
  },
  overlay: {
    ..._reactNative.StyleSheet.absoluteFill,
    zIndex: 1
  }
});
//# sourceMappingURL=styles.js.map