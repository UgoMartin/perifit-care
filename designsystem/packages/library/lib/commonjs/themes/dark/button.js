"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = void 0;
var _brandToken = require("../brandToken");
var _text = require("./text");
const button = exports.button = {
  primaryFillDefault: _brandToken.brandToken.brand1["0"],
  primaryFillHover: _brandToken.brandToken.brand2["50"],
  primaryFillDisabled: _brandToken.brandToken.brand2["800"],
  primaryTextDefault: _brandToken.brandToken.brand2["500"],
  primaryTextDisabled: _text.text.disabled,
  secondaryFillDefault: _brandToken.brandToken.brand2["600"],
  secondaryFillHover: _brandToken.brandToken.brand2["500"],
  secondaryFillDisabled: _brandToken.brandToken.brand2["800"],
  secondaryTextDefault: _brandToken.brandToken.brand1["0"],
  secondaryTextDisabled: _text.text.disabled,
  inversedDefault: _brandToken.brandToken.brand1["0"],
  inversedHover: _brandToken.brandToken.brand1["0"],
  inversedDisabled: _brandToken.brandToken.brand2["800"],
  inversedTextDefault: _brandToken.brandToken.brand2["500"],
  inversedTextDisabled: _text.text.disabled,
  appleFill: "#FFFFFF",
  appleText: "#000000",
  googleFill: "#FFFFFF",
  googleText: "#000000",
  facebookFill: "#1877F2",
  facebookText: "#FFFFFF"
};
//# sourceMappingURL=button.js.map