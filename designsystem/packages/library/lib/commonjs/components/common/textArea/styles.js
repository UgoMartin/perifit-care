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
    minHeight: _utils.default.TEXTINPUT_HEIGHT * 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeColors.border.primary,
    paddingHorizontal: _spacing.spacing.md,
    paddingTop: _spacing.spacing.md,
    paddingBottom: _spacing.spacing.md
  },
  label: {
    ...typography.caption,
    color: themeColors.text.inactive,
    position: "absolute",
    top: _spacing.spacing.xs2,
    left: _spacing.spacing.md
  },
  input: {
    flex: 1,
    ...typography.body,
    textAlignVertical: "top",
    paddingBottom: 0
  },
  errorText: {
    ...typography.body,
    color: themeColors.text.error,
    marginTop: _spacing.spacing.xs3,
    marginLeft: _spacing.spacing.xs3
  }
});
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map