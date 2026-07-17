"use strict";

import { clamp, isNaN } from "lodash";
import { Dimensions, PixelRatio } from "react-native";
import DeviceInfo from "react-native-device-info";
export const IsTablet = () => {
  return DeviceInfo.isTablet();
};
export const normalize = size => {
  if (IsTablet()) {
    return size;
  }
  const newSize = size * scaleFactor();
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
const windowSize = Dimensions.get("window");
const isTablet = IsTablet();
//ensure screen size got from portrait mode
const screenWidth = Math.min(windowSize.width, windowSize.height);
const screenHeight = Math.max(windowSize.width, windowSize.height);
export const TARGET_SCREEN_WIDTH = 390; //Figma design reference
export const TARGET_SCREEN_HEIGHT = 844;
const TARGET_TABLET_SCREEN_WIDTH = 600; //huawei mediaPad T5

const UIConstants = {
  SCREEN_WIDTH: screenWidth,
  SCREEN_HEIGHT: screenHeight,
  TEXTINPUT_HEIGHT: isTablet ? normalize(90) : normalize(52),
  TOUCHABLE_ACTIVE_OPACITY: 0.8,
  TOUCHABLE_HIT_SLOP: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  },
  PADDING_HORIZONTAL_CONTAINER: IsTablet() ? 32 : 20
};
export function scaleFactor() {
  if (IsTablet()) {
    return screenWidth / TARGET_TABLET_SCREEN_WIDTH;
  }
  return Math.min(1, screenWidth / TARGET_SCREEN_WIDTH);
}

/**
 * Convert hex color to hex color with alpha
 * @param hex - The hex color to convert
 * @param opacity - The opacity of the color (0-1)
 * @returns The hex color with alpha
 */
export const hexWithAlpha = (hex, opacity) => {
  // Remove "#" if present
  hex = hex.replace(/^#/, "");
  if (hex.length !== 6) {
    throw new Error("Invalid hex color.");
  }

  // Clamp opacity between 0 and 1
  opacity = Math.max(0, Math.min(1, opacity));

  // Convert opacity to 2-digit hex
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, "0");
  return `#${hex}${alpha}`;
};

/*
 * Lighten a hex color by blending with white
 * @param hex - The hex color to lighten
 * @param opacity - The opacity of the color (0-1)
 * @returns The hex color with the specified opacity
 */
export const lightenHex = (hex, opacity) => {
  // Remove "#" if present
  hex = hex.replace(/^#/, "");
  if (hex.length !== 6) {
    throw new Error("Invalid hex color.");
  }

  // Convert hex → RGB
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  // Lighten by blending with white
  r = Math.round(r + (255 - r) * (1 - opacity));
  g = Math.round(g + (255 - g) * (1 - opacity));
  b = Math.round(b + (255 - b) * (1 - opacity));

  // Convert back to hex
  const toHex = n => n.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
export const getColorWithAlpha = (color, opacity) => {
  if (isNaN(opacity)) {
    return color;
  }
  opacity = clamp(opacity, 0, 1);
  const val = Math.round(opacity * 255);
  return color + val.toString(16).padStart(2, "0").toUpperCase();
};
export default UIConstants;
//# sourceMappingURL=index.js.map