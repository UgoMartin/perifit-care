"use strict";

import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { getStyles } from "./styles";
import Images from "../../../assets/images";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Infos = ({
  badge,
  title,
  body,
  containerStyle,
  emoji,
  arrow,
  link,
  onLinkPress
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = getStyles(themeColors, typography);
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.container, containerStyle],
    children: [emoji && /*#__PURE__*/_jsx(View, {
      style: styles.emojiContainer,
      children: /*#__PURE__*/_jsx(Image, {
        source: emoji,
        style: styles.emoji
      })
    }), /*#__PURE__*/_jsxs(View, {
      style: styles.mainContent,
      children: [badge && /*#__PURE__*/_jsx(View, {
        style: styles.badgeBg,
        children: /*#__PURE__*/_jsx(Text, {
          style: styles.badgeText,
          children: badge
        })
      }), title && /*#__PURE__*/_jsx(Text, {
        style: typography.subtitle,
        children: title
      }), body && /*#__PURE__*/_jsx(Text, {
        style: typography.body,
        children: body
      }), link && /*#__PURE__*/_jsx(Pressable, {
        onPress: onLinkPress,
        children: /*#__PURE__*/_jsx(Text, {
          style: styles.linkText,
          children: link
        })
      })]
    }), arrow && /*#__PURE__*/_jsx(Image, {
      source: Images.arrowNextIcon,
      style: styles.arrow
    })]
  });
};
//# sourceMappingURL=index.js.map