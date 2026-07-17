"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = void 0;
var _text = require("./light/text");
var _icon = require("./light/icon");
var _fill = require("./light/fill");
var _border = require("./light/border");
var _button = require("./light/button");
var _nav = require("./light/nav");
var _pump = require("./light/pump");
var _objective = require("./light/objective");
var _text2 = require("./dark/text");
var _icon2 = require("./dark/icon");
var _fill2 = require("./dark/fill");
var _border2 = require("./dark/border");
var _button2 = require("./dark/button");
var _nav2 = require("./dark/nav");
var _pump2 = require("./dark/pump");
var _objective2 = require("./dark/objective");
const colors = exports.colors = {
  light: {
    text: _text.text,
    icon: _icon.icon,
    fill: _fill.fill,
    border: _border.border,
    button: _button.button,
    nav: _nav.nav,
    pump: _pump.pump,
    objective: _objective.objective
  },
  dark: {
    text: _text2.text,
    icon: _icon2.icon,
    fill: _fill2.fill,
    border: _border2.border,
    button: _button2.button,
    nav: _nav2.nav,
    pump: _pump2.pump,
    objective: _objective2.objective
  }
};
//# sourceMappingURL=colors.js.map