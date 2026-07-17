"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.border = void 0;
var _brandToken = require("../brandToken");
var _text = require("./text");
const border = exports.border = {
  primary: _brandToken.brandToken.brand1["100"],
  secondary: _brandToken.brandToken.brand1["200"],
  primaryInversed: _brandToken.brandToken.brand1["0"],
  error: _text.text.error,
  warning: _text.text.warning,
  success: _text.text.success,
  selected: _brandToken.brandToken.brand2["500"],
  active: _brandToken.brandToken.brand2["500"]
};
//# sourceMappingURL=border.js.map