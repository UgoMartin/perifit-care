import { normalize } from "../utils";
import { GapType, RadiusType, SpacingType } from "./types";

export const radiusPhone = {
  none: 0,
  xs: normalize(4),
  s: normalize(8),
  md: normalize(16),
  lg: normalize(32),
  xl: normalize(400),
} as const satisfies Record<RadiusType, number>;

export const radius = radiusPhone;

export const gapPhone = {
  xs: normalize(4),
  s: normalize(8),
  md: normalize(12),
  xmd: normalize(16),
  lg: normalize(20),
  xl: normalize(32),
  button: normalize(12),
  form: normalize(12),
} as const satisfies Record<GapType, number>;

export const gap = gapPhone;

export const spacingPhone = {
  none: 0,
  xs3: normalize(4),
  xs2: normalize(8),
  xs: normalize(12),
  s: normalize(16),
  md: normalize(20),
  lg: normalize(32),
  xl: normalize(48),
} as const satisfies Record<SpacingType, number>;

export const spacing = spacingPhone;
