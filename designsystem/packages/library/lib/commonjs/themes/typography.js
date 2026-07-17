"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypography = void 0;
var _reactNative = require("react-native");
var _fontNames = require("./fontNames");
var _utils = require("../utils");
const fontRatio = (0, _utils.IsTablet)() ? 1.25 : 1;
const getFontSize = size => (0, _utils.normalize)(size * fontRatio);
const geLineHeight = size => (0, _utils.normalize)(size * fontRatio);
const getTypography = themeColors => _reactNative.StyleSheet.create({
  big: {
    fontFamily: _fontNames.FontNames.medium,
    fontSize: getFontSize(60),
    lineHeight: geLineHeight(70),
    color: themeColors.text.primary
  },
  h1: {
    fontFamily: _fontNames.FontNames.bold,
    fontSize: getFontSize(38),
    lineHeight: geLineHeight(42),
    color: themeColors.text.primary
  },
  h2: {
    fontSize: getFontSize(32),
    lineHeight: geLineHeight(40),
    fontFamily: _fontNames.FontNames.bold,
    color: themeColors.text.primary
  },
  h3: {
    fontSize: getFontSize(28),
    lineHeight: geLineHeight(36),
    fontFamily: _fontNames.FontNames.bold,
    color: themeColors.text.primary
  },
  h4: {
    fontSize: getFontSize(22),
    lineHeight: geLineHeight(26),
    fontFamily: _fontNames.FontNames.semibold,
    color: themeColors.text.primary
  },
  h5: {
    fontSize: getFontSize(18),
    fontFamily: _fontNames.FontNames.semibold,
    color: themeColors.text.primary,
    lineHeight: geLineHeight(22)
  },
  subtitle: {
    fontSize: getFontSize(16),
    lineHeight: geLineHeight(22),
    fontFamily: _fontNames.FontNames.semibold,
    color: themeColors.text.primary
  },
  category: {
    fontSize: getFontSize(14),
    fontFamily: _fontNames.FontNames.semibold,
    color: themeColors.text.primary,
    textTransform: "uppercase",
    lineHeight: geLineHeight(18)
  },
  body: {
    fontSize: getFontSize(16),
    lineHeight: geLineHeight(22),
    fontFamily: _fontNames.FontNames.medium,
    color: themeColors.text.primary
  },
  bodyUnderline: {
    fontSize: getFontSize(16),
    lineHeight: geLineHeight(22),
    fontFamily: _fontNames.FontNames.medium,
    color: themeColors.text.primary,
    textDecorationLine: "underline"
  },
  bodyStrikethrough: {
    fontSize: getFontSize(16),
    lineHeight: geLineHeight(22),
    fontFamily: _fontNames.FontNames.medium,
    color: themeColors.text.primary,
    textDecorationLine: "line-through"
  },
  caption: {
    fontSize: getFontSize(14),
    fontFamily: _fontNames.FontNames.medium,
    color: themeColors.text.primary,
    lineHeight: geLineHeight(18)
  },
  captionUnderline: {
    fontSize: getFontSize(14),
    fontFamily: _fontNames.FontNames.medium,
    color: themeColors.text.primary,
    textDecorationLine: "underline",
    lineHeight: geLineHeight(18)
  },
  captionStrikethrough: {
    fontSize: getFontSize(14),
    fontFamily: _fontNames.FontNames.medium,
    color: themeColors.text.primary,
    textDecorationLine: "line-through",
    lineHeight: geLineHeight(18)
  },
  captionSemi: {
    fontSize: getFontSize(14),
    fontFamily: _fontNames.FontNames.bold,
    color: themeColors.text.primary,
    lineHeight: geLineHeight(18)
  }
});
exports.getTypography = getTypography;
//# sourceMappingURL=typography.js.map