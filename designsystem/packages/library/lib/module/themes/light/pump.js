"use strict";

import { getColorWithAlpha } from "../../utils";
import { brandToken } from "../brandToken";
export const pump = {
  pumpLeftFill: "#D3DEF3",
  pumpLeftText: "#161E64",
  pumpLeftSlider: "#D3DEF3",
  pumpLeftWave: getColorWithAlpha("#D3DEF3", 0.4),
  pumpLeftWaveBG: getColorWithAlpha("#D3DEF3", 0.2),
  pumpRightFill: "#DAEAE6",
  pumpRightText: brandToken.brand2["500"],
  pumpRightWave: getColorWithAlpha("#DAEAE6", 0.4),
  pumpRightWaveBG: getColorWithAlpha("#DAEAE6", 0.2),
  pumpRightSlider: "#DAEAE6",
  haloStimulation: brandToken.brand1["50"],
  haloExpression: brandToken.brand2["50"]
};
//# sourceMappingURL=pump.js.map