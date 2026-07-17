"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nav = void 0;
var _brandToken = require("../brandToken");
var _border = require("./border");
var _text = require("./text");
const nav = exports.nav = {
  activeText: _text.text.active,
  activeBorder: _border.border.active,
  activeFill: _brandToken.brandToken.brand2["50"],
  inactiveText: _text.text.inactive,
  inactiveBorder: _brandToken.brandToken.brand1["300"],
  inactiveFill: _brandToken.brandToken.brand1["50"]
};
//# sourceMappingURL=nav.js.map