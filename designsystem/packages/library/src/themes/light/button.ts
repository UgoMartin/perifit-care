import { brandToken } from "../brandToken";
import { ButtonColorType } from "../types";
import { text } from "./text";

export const button: Record<ButtonColorType, string> = {
  primaryFillDefault: brandToken.brand2["500"],
  primaryFillHover: brandToken.brand2["600"],
  primaryFillDisabled: brandToken.brand1["50"],
  primaryTextDefault: brandToken.brand1["0"],
  primaryTextDisabled: text.disabled,
  secondaryFillDefault: brandToken.brand2["50"],
  secondaryFillHover: brandToken.brand2["100"],
  secondaryFillDisabled: brandToken.brand1["50"],
  secondaryTextDefault: brandToken.brand2["500"],
  secondaryTextDisabled: text.disabled,
  inversedDefault: brandToken.brand1["0"],
  inversedHover: brandToken.brand2["50"],
  inversedDisabled: brandToken.brand1["0"],
  inversedTextDefault: brandToken.brand2["500"],
  inversedTextDisabled: text.disabled,
  appleFill: "#000000",
  appleText: "#FFFFFF",
  googleFill: "#FFFFFF",
  googleText: "#000000",
  facebookFill: "#1877F2",
  facebookText: "#FFFFFF",
} as const;
