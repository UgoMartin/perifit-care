"use strict";

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "../../../../../../themes/themeContext";
import { getStyles } from "./styles";
import UIConstants from "../../../../../../utils";
import Images from "../../../../../../assets/images";
import { decode } from "html-entities";
import { CachedImage, CachedImageBackground } from "../../../utils/cachedImage";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const PopularArticleThumbnail = ({
  tag,
  title,
  image,
  onPress,
  showPremiumIcon = true
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = getStyles(themeColors, typography);
  return /*#__PURE__*/_jsx(TouchableOpacity, {
    activeOpacity: UIConstants.TOUCHABLE_ACTIVE_OPACITY,
    style: styles.card,
    onPress: onPress ?? (() => {}),
    children: /*#__PURE__*/_jsxs(CachedImageBackground, {
      source: image,
      style: styles.cardImage,
      imageStyle: styles.cardImageBorder,
      children: [showPremiumIcon && /*#__PURE__*/_jsx(View, {
        style: styles.premiumIconContainer,
        children: /*#__PURE__*/_jsx(CachedImage, {
          source: Images.contentTab.premiumIcon,
          style: styles.premiumIcon,
          resizeMode: "contain"
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
        colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.3)"]
      }), /*#__PURE__*/_jsxs(View, {
        style: styles.textContainer,
        children: [/*#__PURE__*/_jsx(Text, {
          style: styles.tag,
          children: tag
        }), /*#__PURE__*/_jsx(Text, {
          style: styles.title,
          children: decode(title)
        })]
      })]
    })
  });
};
//# sourceMappingURL=index.js.map