"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalize = exports.lightenHex = exports.hexWithAlpha = exports.getColorWithAlpha = exports.default = exports.TARGET_SCREEN_WIDTH = exports.TARGET_SCREEN_HEIGHT = exports.IsTablet = void 0;
exports.scaleFactor = scaleFactor;
var _lodash = require("lodash");
var _reactNative = require("react-native");
var _reactNativeDeviceInfo = _interopRequireDefault(require("react-native-device-info"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const IsTablet = () => {
  return _reactNativeDeviceInfo.default.isTablet();
};
exports.IsTablet = IsTablet;
const normalize = size => {
  if (IsTablet()) {
    return size;
  }
  const newSize = size * scaleFactor();
  return Math.round(_reactNative.PixelRatio.roundToNearestPixel(newSize));
};
exports.normalize = normalize;
const windowSize = _reactNative.Dimensions.get("window");
const isTablet = IsTablet();
//ensure screen size got from portrait mode
const screenWidth = Math.min(windowSize.width, windowSize.height);
const screenHeight = Math.max(windowSize.width, windowSize.height);
const TARGET_SCREEN_WIDTH = exports.TARGET_SCREEN_WIDTH = 390; //Figma design reference
const TARGET_SCREEN_HEIGHT = exports.TARGET_SCREEN_HEIGHT = 844;
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
function scaleFactor() {
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
const hexWithAlpha = (hex, opacity) => {
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
exports.hexWithAlpha = hexWithAlpha;
const lightenHex = (hex, opacity) => {
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
exports.lightenHex = lightenHex;
const getColorWithAlpha = (color, opacity) => {
  if ((0, _lodash.isNaN)(opacity)) {
    return color;
  }
  opacity = (0, _lodash.clamp)(opacity, 0, 1);
  const val = Math.round(opacity * 255);
  return color + val.toString(16).padStart(2, "0").toUpperCase();
};
exports.getColorWithAlpha = getColorWithAlpha;
var _default = exports.default = UIConstants;
//# sourceMappingURL=index.js.map