import { getColorWithAlpha } from "../../utils";
import { brandToken } from "../brandToken";
import { FillColorType } from "../types";
import { text } from "./text";

export const fill: Record<FillColorType, string> = {
  page: brandToken.brand2["900"],
  block: brandToken.brand2["700"],
  blockRemainsWhite: brandToken.brand1["0"],
  primary: brandToken.brand2["600"],
  secondary: brandToken.brand2["600"],
  dark: brandToken.brand1["0"],
  active: brandToken.brand1["0"],
  greenScreen: brandToken.brand2["500"],
  activeReversed: brandToken.brand2["900"],
  disabled: brandToken.brand2["800"],
  selected: brandToken.brand2["500"],
  success: text.success,
  successLight: "#EBFCEC",
  warning: text.warning,
  warningLight: "#FFF3E5",
  error: text.error,
  errorLight: "#FEECED",
  hover: getColorWithAlpha("#0B1112", 0.05),
  overlay: getColorWithAlpha("#2A4347", 0.6),
  gradientColor: brandToken.brand2["500"],
  gradientFadePage: getColorWithAlpha("#0B1112", 0),
  gradientFadeBlock: getColorWithAlpha("#203235", 0),
  gradientFade: "rgba(11, 17, 18, 0)",
  gradientCurve: brandToken.brand2["600"],
} as const;
