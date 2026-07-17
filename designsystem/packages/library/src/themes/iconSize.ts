import { normalize } from "../utils";
import { IconSize } from "./types";

export const iconSize = {
  xs: normalize(12),
  s: normalize(16),
  md: normalize(24),
  lg: normalize(32),
  xl: normalize(104),
} as const satisfies Record<IconSize, number>;
