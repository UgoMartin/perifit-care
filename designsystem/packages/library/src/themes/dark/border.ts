import { brandToken } from "../brandToken";
import { BorderColorType } from "../types";
import { text } from "./text";

export const border: Record<BorderColorType, string> = {
  primary: brandToken.brand2["600"],
  secondary: brandToken.brand2["500"],
  primaryInversed: brandToken.brand2["600"],
  error: text.error,
  warning: text.warning,
  success: text.success,
  selected: brandToken.brand1["0"],
  active: brandToken.brand1["0"],
} as const;
