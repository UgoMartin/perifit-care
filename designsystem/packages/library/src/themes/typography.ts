import { StyleSheet } from "react-native";
import { FontNames } from "./fontNames";
import { IsTablet, normalize } from "../utils";
import { ThemeColors } from "./types";

const fontRatio = IsTablet() ? 1.25 : 1;
const getFontSize = (size: number) => normalize(size * fontRatio);
const geLineHeight = (size: number) => normalize(size * fontRatio);

export const getTypography = (themeColors: ThemeColors) =>
  StyleSheet.create({
    big: {
      fontFamily: FontNames.medium,
      fontSize: getFontSize(60),
      lineHeight: geLineHeight(70),
      color: themeColors.text.primary,
    },
    h1: {
      fontFamily: FontNames.bold,
      fontSize: getFontSize(38),
      lineHeight: geLineHeight(42),
      color: themeColors.text.primary,
    },
    h2: {
      fontSize: getFontSize(32),
      lineHeight: geLineHeight(40),
      fontFamily: FontNames.bold,
      color: themeColors.text.primary,
    },
    h3: {
      fontSize: getFontSize(28),
      lineHeight: geLineHeight(36),
      fontFamily: FontNames.bold,
      color: themeColors.text.primary,
    },
    h4: {
      fontSize: getFontSize(22),
      lineHeight: geLineHeight(26),
      fontFamily: FontNames.semibold,
      color: themeColors.text.primary,
    },
    h5: {
      fontSize: getFontSize(18),
      fontFamily: FontNames.semibold,
      color: themeColors.text.primary,
      lineHeight: geLineHeight(22),
    },
    subtitle: {
      fontSize: getFontSize(16),
      lineHeight: geLineHeight(22),
      fontFamily: FontNames.semibold,
      color: themeColors.text.primary,
    },
    category: {
      fontSize: getFontSize(14),
      fontFamily: FontNames.semibold,
      color: themeColors.text.primary,
      textTransform: "uppercase",
      lineHeight: geLineHeight(18),
    },
    body: {
      fontSize: getFontSize(16),
      lineHeight: geLineHeight(22),
      fontFamily: FontNames.medium,
      color: themeColors.text.primary,
    },
    bodyUnderline: {
      fontSize: getFontSize(16),
      lineHeight: geLineHeight(22),
      fontFamily: FontNames.medium,
      color: themeColors.text.primary,
      textDecorationLine: "underline",
    },
    bodyStrikethrough: {
      fontSize: getFontSize(16),
      lineHeight: geLineHeight(22),
      fontFamily: FontNames.medium,
      color: themeColors.text.primary,
      textDecorationLine: "line-through",
    },
    caption: {
      fontSize: getFontSize(14),
      fontFamily: FontNames.medium,
      color: themeColors.text.primary,
      lineHeight: geLineHeight(18),
    },
    captionUnderline: {
      fontSize: getFontSize(14),
      fontFamily: FontNames.medium,
      color: themeColors.text.primary,
      textDecorationLine: "underline",
      lineHeight: geLineHeight(18),
    },
    captionStrikethrough: {
      fontSize: getFontSize(14),
      fontFamily: FontNames.medium,
      color: themeColors.text.primary,
      textDecorationLine: "line-through",
      lineHeight: geLineHeight(18),
    },
    captionSemi: {
      fontSize: getFontSize(14),
      fontFamily: FontNames.bold,
      color: themeColors.text.primary,
      lineHeight: geLineHeight(18),
    },
  });

export type Typography = ReturnType<typeof getTypography>;
