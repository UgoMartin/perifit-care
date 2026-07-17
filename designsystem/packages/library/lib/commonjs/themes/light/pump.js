"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pump = void 0;
var _utils = require("../../utils");
var _brandToken = require("../brandToken");
const pump = exports.pump = {
  pumpLeftFill: "#D3DEF3",
  pumpLeftText: "#161E64",
  pumpLeftSlider: "#D3DEF3",
  pumpLeftWave: (0, _utils.getColorWithAlpha)("#D3DEF3", 0.4),
  pumpLeftWaveBG: (0, _utils.getColorWithAlpha)("#D3DEF3", 0.2),
  pumpRightFill: "#DAEAE6",
  pumpRightText: _brandToken.brandToken.brand2["500"],
  pumpRightWave: (0, _utils.getColorWithAlpha)("#DAEAE6", 0.4),
  pumpRightWaveBG: (0, _utils.getColorWithAlpha)("#DAEAE6", 0.2),
  pumpRightSlider: "#DAEAE6",
  haloStimulation: _brandToken.brandToken.brand1["50"],
  haloExpression: _brandToken.brandToken.brand2["50"]
};
//# sourceMappingURL=pump.js.map