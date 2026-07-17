"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _reactNative = require("react-native");
var _utils = _interopRequireDefault(require("../../../utils"));
var _spacing = require("../../../themes/spacing");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getStyles = (themeColors, typography) => _reactNative.StyleSheet.create({
  inputContainer: {
    height: _utils.default.TEXTINPUT_HEIGHT,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeColors.border.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: _spacing.spacing.md,
    paddingRight: _spacing.spacing.md
  },
  label: {
    ...typography.caption,
    color: themeColors.text.inactive,
    position: "absolute",
    top: _spacing.spacing.xs3
  },
  valueText: {
    ...typography.body
  },
  iconContainer: {
    marginLeft: _spacing.spacing.s,
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    ...typography.caption,
    color: themeColors.text.error,
    marginTop: _spacing.spacing.xs3,
    marginLeft: _spacing.spacing.xs3
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map