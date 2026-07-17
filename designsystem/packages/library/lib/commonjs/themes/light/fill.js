"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill = void 0;
var _utils = require("../../utils");
var _brandToken = require("../brandToken");
var _text = require("./text");
const fill = exports.fill = {
  page: _brandToken.brandToken.brand1["0"],
  block: _brandToken.brandToken.brand1["0"],
  blockRemainsWhite: _brandToken.brandToken.brand1["0"],
  primary: _brandToken.brandToken.brand1["50"],
  secondary: _brandToken.brandToken.brand2["50"],
  dark: _brandToken.brandToken.brand2["500"],
  active: _brandToken.brandToken.brand2["500"],
  greenScreen: _brandToken.brandToken.brand2["500"],
  activeReversed: _brandToken.brandToken.brand1["0"],
  disabled: _brandToken.brandToken.brand1["100"],
  selected: _brandToken.brandToken.brand2["100"],
  success: _text.text.success,
  successLight: "#EBFCEC",
  warning: _text.text.warning,
  warningLight: "#FFF3E5",
  error: _text.text.error,
  errorLight: "#FEECED",
  hover: (0, _utils.getColorWithAlpha)("#0B1112", 0.05),
  overlay: (0, _utils.getColorWithAlpha)("#2A4347", 0.6),
  gradientColor: _brandToken.brandToken.brand2["100"],
  gradientFadePage: (0, _utils.getColorWithAlpha)("#FFFFFF", 0),
  gradientFadeBlock: (0, _utils.getColorWithAlpha)("#FFFFFF", 0),
  gradientFade: (0, _utils.getColorWithAlpha)("#FFFFFF", 0),
  gradientCurve: _brandToken.brandToken.brand2["50"]
};
//# sourceMappingURL=fill.js.map