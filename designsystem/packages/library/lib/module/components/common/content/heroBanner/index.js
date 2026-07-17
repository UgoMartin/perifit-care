"use strict";

import React from "react";
import { Text, View } from "react-native";
import { getStyles } from "./styles";
import { gap, useTheme } from "../../../../themes";
import { Button } from "../../button";
import { CachedImage, CachedImageBackground } from "../utils/cachedImage";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const HeroBanner = ({
  sectionTitle,
  text,
  buttonText,
  backgroundImage,
  badgeIcon,
  onButtonPress,
  style,
  backgroundImageStyle
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = getStyles(themeColors, typography);
  return /*#__PURE__*/_jsxs(View, {
    style: [{
      gap: gap.xmd
    }, style],
    children: [/*#__PURE__*/_jsx(Text, {
      style: typography.h4,
      children: sectionTitle
    }), /*#__PURE__*/_jsxs(CachedImageBackground, {
      source: backgroundImage,
      style: [styles.heroImage, backgroundImageStyle],
      children: [badgeIcon && /*#__PURE__*/_jsx(View, {
        style: styles.badgeIconContainer,
        children: /*#__PURE__*/_jsx(CachedImage, {
          source: badgeIcon,
          style: styles.badgeIcon
        })
      }), /*#__PURE__*/_jsxs(View, {
        style: styles.contentContainer,
        children: [/*#__PURE__*/_jsx(Text, {
          style: styles.heroText,
          children: text
        }), !!buttonText && /*#__PURE__*/_jsx(View, {
          style: {
            alignSelf: "flex-start"
          },
          children: /*#__PURE__*/_jsx(Button, {
            title: buttonText,
            onPress: onButtonPress ?? (() => {}),
            variant: "primary",
            size: "small"
          })
        })]
      })]
    })]
  });
};
//# sourceMappingURL=index.js.map