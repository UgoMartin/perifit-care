"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = void 0;
var _brandToken = require("../brandToken");
var _text = require("./text");
const icon = exports.icon = {
  primary: _brandToken.brandToken.brand1["0"],
  secondary: _brandToken.brandToken.brand2["300"],
  active: _brandToken.brandToken.brand1["0"],
  inactive: _brandToken.brandToken.brand2["400"],
  disabled: _brandToken.brandToken.brand2["600"],
  error: _text.text.error,
  success: _text.text.success,
  warning: _text.text.warning,
  inversedRemainsWhite: _brandToken.brandToken.brand1["0"],
  inversedChangeBlack: _brandToken.brandToken.brand1["900"],
  clubPerifitChangeWhite: _brandToken.brandToken.brand1["0"],
  clubPerifitRemainsBlack: _brandToken.brandToken.clubPerifit["500"]
};
//# sourceMappingURL=icon.js.map