"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = void 0;
var _brandToken = require("../brandToken");
var _text = require("./text");
const button = exports.button = {
  primaryFillDefault: _brandToken.brandToken.brand2["500"],
  primaryFillHover: _brandToken.brandToken.brand2["600"],
  primaryFillDisabled: _brandToken.brandToken.brand1["50"],
  primaryTextDefault: _brandToken.brandToken.brand1["0"],
  primaryTextDisabled: _text.text.disabled,
  secondaryFillDefault: _brandToken.brandToken.brand2["50"],
  secondaryFillHover: _brandToken.brandToken.brand2["100"],
  secondaryFillDisabled: _brandToken.brandToken.brand1["50"],
  secondaryTextDefault: _brandToken.brandToken.brand2["500"],
  secondaryTextDisabled: _text.text.disabled,
  inversedDefault: _brandToken.brandToken.brand1["0"],
  inversedHover: _brandToken.brandToken.brand2["50"],
  inversedDisabled: _brandToken.brandToken.brand1["0"],
  inversedTextDefault: _brandToken.brandToken.brand2["500"],
  inversedTextDisabled: _text.text.disabled,
  appleFill: "#000000",
  appleText: "#FFFFFF",
  googleFill: "#FFFFFF",
  googleText: "#000000",
  facebookFill: "#1877F2",
  facebookText: "#FFFFFF"
};
//# sourceMappingURL=button.js.map