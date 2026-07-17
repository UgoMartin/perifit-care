"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = void 0;
var _brandToken = require("../brandToken");
var _text = require("./text");
const icon = exports.icon = {
  primary: _brandToken.brandToken.brand1["900"],
  secondary: _brandToken.brandToken.brand1["300"],
  active: _brandToken.brandToken.brand2["500"],
  inactive: _brandToken.brandToken.brand1["300"],
  disabled: _brandToken.brandToken.brand1["100"],
  error: _text.text.error,
  success: _text.text.success,
  warning: _text.text.warning,
  inversedRemainsWhite: _brandToken.brandToken.brand1["0"],
  inversedChangeBlack: _brandToken.brandToken.brand1["0"],
  clubPerifitChangeWhite: _brandToken.brandToken.clubPerifit["500"],
  clubPerifitRemainsBlack: _brandToken.brandToken.clubPerifit["500"]
};
//# sourceMappingURL=icon.js.map