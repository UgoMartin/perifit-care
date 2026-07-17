import { brandToken } from "../brandToken";
import { NavColorType } from "../types";
import { border } from "./border";
import { text } from "./text";

export const nav: Record<NavColorType, string> = {
  activeText: text.active,
  activeBorder: border.active,
  activeFill: brandToken.brand2["50"],
  inactiveText: text.inactive,
  inactiveBorder: brandToken.brand1["300"],
  inactiveFill: brandToken.brand1["50"],
} as const;
