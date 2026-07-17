"use strict";

import React, { useCallback } from "react";
import { Image, Text, View } from "react-native";
import Images from "../../../assets/images";
import { useTheme } from "../../../themes/themeContext";
import { styles } from "./styles";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Confirmation = ({
  title,
  caption,
  type = "success",
  containerStyle,
  titleStyle,
  captionStyle,
  icon
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const textColor = type === "success" ? themeColors.text.success : themeColors.text.error;
  const bgColor = type === "success" ? themeColors.fill.successLight : themeColors.fill.errorLight;
  const iconColor = type === "success" ? themeColors.icon.success : themeColors.icon.error;
  const defaultIcon = type === "success" ? Images.checkIcon : Images.closeCircleIcon;
  const renderIcon = useCallback(() => {
    if (/*#__PURE__*/React.isValidElement(icon)) {
      return icon;
    }
    return /*#__PURE__*/_jsx(Image, {
      style: [styles.checkIcon, {
        tintColor: iconColor
      }],
      source: icon ?? defaultIcon
    });
  }, [defaultIcon, icon, iconColor]);
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.container, {
      backgroundColor: bgColor
    }, containerStyle],
    children: [renderIcon(), /*#__PURE__*/_jsxs(View, {
      style: {
        flexShrink: 1
      },
      children: [/*#__PURE__*/_jsx(Text, {
        style: [typography.subtitle, {
          color: textColor
        }, titleStyle],
        children: title
      }), /*#__PURE__*/_jsx(Text, {
        style: [typography.caption, {
          color: textColor
        }, captionStyle],
        children: caption
      })]
    })]
  });
};
//# sourceMappingURL=index.js.map