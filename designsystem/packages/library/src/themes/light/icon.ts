import { brandToken } from "../brandToken";
import { IconColorType } from "../types";
import { text } from "./text";

export const icon: Record<IconColorType, string> = {
  primary: brandToken.brand1["900"],
  secondary: brandToken.brand1["300"],
  active: brandToken.brand2["500"],
  inactive: brandToken.brand1["300"],
  disabled: brandToken.brand1["100"],
  error: text.error,
  success: text.success,
  warning: text.warning,
  inversedRemainsWhite: brandToken.brand1["0"],
  inversedChangeBlack: brandToken.brand1["0"],
  clubPerifitChangeWhite: brandToken.clubPerifit["500"],
  clubPerifitRemainsBlack: brandToken.clubPerifit["500"],
} as const;
