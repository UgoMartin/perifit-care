"use strict";

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { brandToken } from "../../../../themes/brandToken";
import { useTheme } from "../../../../themes/themeContext";
import { getStyles } from "./styles";
import UIConstants, { hexWithAlpha } from "../../../../utils";
import { decode } from "html-entities";
import { CachedImage, CachedImageBackground } from "../utils/cachedImage";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const CategoryThumbnail = ({
  title,
  image,
  badgeIcon,
  onPress,
  width,
  height,
  style
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = getStyles(themeColors, typography, width, height);
  return /*#__PURE__*/_jsx(TouchableOpacity, {
    activeOpacity: UIConstants.TOUCHABLE_ACTIVE_OPACITY,
    style: [styles.card, style],
    onPress: onPress ?? (() => {}),
    children: /*#__PURE__*/_jsxs(CachedImageBackground, {
      source: image,
      style: styles.cardImage,
      children: [badgeIcon && /*#__PURE__*/_jsx(View, {
        style: styles.badgeIconContainer,
        children: /*#__PURE__*/_jsx(CachedImage, {
          source: badgeIcon,
          style: styles.badgeIcon
        })
      }), /*#__PURE__*/_jsx(LinearGradient, {
        style: styles.gradient,
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 1
        },
        locations: [0.7, 1],
        colors: [hexWithAlpha(brandToken.brand2["900"], 0), hexWithAlpha(brandToken.brand2["900"], 0.7)]
      }), /*#__PURE__*/_jsx(Text, {
        style: styles.cardTitle,
        children: decode(title)
      })]
    })
  });
};
//# sourceMappingURL=index.js.map