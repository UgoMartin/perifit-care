import { brandToken } from "../brandToken";
import { IconColorType } from "../types";
import { text } from "./text";

export const icon: Record<IconColorType, string> = {
  primary: brandToken.brand1["0"],
  secondary: brandToken.brand2["300"],
  active: brandToken.brand1["0"],
  inactive: brandToken.brand2["400"],
  disabled: brandToken.brand2["600"],
  error: text.error,
  success: text.success,
  warning: text.warning,
  inversedRemainsWhite: brandToken.brand1["0"],
  inversedChangeBlack: brandToken.brand1["900"],
  clubPerifitChangeWhite: brandToken.brand1["0"],
  clubPerifitRemainsBlack: brandToken.clubPerifit["500"],
} as const;
