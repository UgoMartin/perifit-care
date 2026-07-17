"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.border = void 0;
var _brandToken = require("../brandToken");
var _text = require("./text");
const border = exports.border = {
  primary: _brandToken.brandToken.brand2["600"],
  secondary: _brandToken.brandToken.brand2["500"],
  primaryInversed: _brandToken.brandToken.brand2["600"],
  error: _text.text.error,
  warning: _text.text.warning,
  success: _text.text.success,
  selected: _brandToken.brandToken.brand1["0"],
  active: _brandToken.brandToken.brand1["0"]
};
//# sourceMappingURL=border.js.map