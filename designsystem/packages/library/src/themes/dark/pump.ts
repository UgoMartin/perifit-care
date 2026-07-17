import { getColorWithAlpha } from "../../utils";
import { brandToken } from "../brandToken";
import { PumpColorType } from "../types";

export const pump: Record<PumpColorType, string> = {
  pumpLeftFill: "#D3DEF3",
  pumpLeftText: "#161E64",
  pumpLeftSlider: "#D3DEF3",
  pumpLeftWave: getColorWithAlpha("#D3DEF3", 0.4),
  pumpLeftWaveBG: getColorWithAlpha("#D3DEF3", 0.2),
  pumpRightFill: "#DAEAE6",
  pumpRightText: brandToken.brand2["500"],
  pumpRightSlider: "#DAEAE6",
  pumpRightWave: getColorWithAlpha("#DAEAE6", 0.4),
  pumpRightWaveBG: getColorWithAlpha("#DAEAE6", 0.2),
  haloStimulation: brandToken.brand1["900"],
  haloExpression: brandToken.brand2["800"],
} as const;
