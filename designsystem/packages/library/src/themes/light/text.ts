import { brandToken } from "../brandToken";
import { TextColorType } from "../types";

export const text: Record<TextColorType, string> = {
  primary: brandToken.brand1["900"],
  secondary: brandToken.brand1["500"],
  active: brandToken.brand2["500"],
  inactive: brandToken.brand1["300"],
  disabled: brandToken.brand1["200"],
  error: "#F3686A",
  warning: "#FFA238",
  success: "#61B764",
  links: brandToken.brand2["500"],
  inversedRemainsWhite: brandToken.brand1["0"],
  inversedChangeBlack: brandToken.brand1["0"],
  clubPerifit: brandToken.clubPerifit["500"],
} as const;
