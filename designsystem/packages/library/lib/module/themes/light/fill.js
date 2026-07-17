"use strict";

import { getColorWithAlpha } from "../../utils";
import { brandToken } from "../brandToken";
import { text } from "./text";
export const fill = {
  page: brandToken.brand1["0"],
  block: brandToken.brand1["0"],
  blockRemainsWhite: brandToken.brand1["0"],
  primary: brandToken.brand1["50"],
  secondary: brandToken.brand2["50"],
  dark: brandToken.brand2["500"],
  active: brandToken.brand2["500"],
  greenScreen: brandToken.brand2["500"],
  activeReversed: brandToken.brand1["0"],
  disabled: brandToken.brand1["100"],
  selected: brandToken.brand2["100"],
  success: text.success,
  successLight: "#EBFCEC",
  warning: text.warning,
  warningLight: "#FFF3E5",
  error: text.error,
  errorLight: "#FEECED",
  hover: getColorWithAlpha("#0B1112", 0.05),
  overlay: getColorWithAlpha("#2A4347", 0.6),
  gradientColor: brandToken.brand2["100"],
  gradientFadePage: getColorWithAlpha("#FFFFFF", 0),
  gradientFadeBlock: getColorWithAlpha("#FFFFFF", 0),
  gradientFade: getColorWithAlpha("#FFFFFF", 0),
  gradientCurve: brandToken.brand2["50"]
};
//# sourceMappingURL=fill.js.map