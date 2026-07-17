"use strict";

import { normalize } from "../utils";
export const radiusPhone = {
  none: 0,
  xs: normalize(4),
  s: normalize(8),
  md: normalize(16),
  lg: normalize(32),
  xl: normalize(400)
};
export const radius = radiusPhone;
export const gapPhone = {
  xs: normalize(4),
  s: normalize(8),
  md: normalize(12),
  xmd: normalize(16),
  lg: normalize(20),
  xl: normalize(32),
  button: normalize(12),
  form: normalize(12)
};
export const gap = gapPhone;
export const spacingPhone = {
  none: 0,
  xs3: normalize(4),
  xs2: normalize(8),
  xs: normalize(12),
  s: normalize(16),
  md: normalize(20),
  lg: normalize(32),
  xl: normalize(48)
};
export const spacing = spacingPhone;
//# sourceMappingURL=spacing.js.map