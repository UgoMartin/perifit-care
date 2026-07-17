import { brandToken } from "../brandToken";
import { BorderColorType } from "../types";
import { text } from "./text";

export const border: Record<BorderColorType, string> = {
  primary: brandToken.brand1["100"],
  secondary: brandToken.brand1["200"],
  primaryInversed: brandToken.brand1["0"],
  error: text.error,
  warning: text.warning,
  success: text.success,
  selected: brandToken.brand2["500"],
  active: brandToken.brand2["500"],
} as const;
