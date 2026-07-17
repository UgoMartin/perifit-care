import { brandToken } from "../brandToken";
import { TextColorType } from "../types";

export const text: Record<TextColorType, string> = {
  primary: brandToken.brand1["0"],
  secondary: brandToken.brand2["200"],
  active: brandToken.brand1["0"],
  inactive: brandToken.brand2["400"],
  disabled: brandToken.brand2["600"],
  error: "#F3686A",
  success: "#61B764",
  warning: "#FFA238",
  links: brandToken.brand1["0"],
  inversedRemainsWhite: brandToken.brand1["0"],
  inversedChangeBlack: brandToken.brand2["900"],
  clubPerifit: brandToken.clubPerifit["500"],
} as const;
