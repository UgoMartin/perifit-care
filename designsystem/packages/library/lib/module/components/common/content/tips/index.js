"use strict";

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../../themes";
import createStyles from "./styles";
import UIConstants from "../../../../utils";
import { CachedImage } from "../utils/cachedImage";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const TodayTips = ({
  image,
  title,
  actionText,
  onPress
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = createStyles(themeColors, typography);
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(View, {
      style: styles.imageContainer,
      children: /*#__PURE__*/_jsx(CachedImage, {
        source: image,
        style: styles.image
      })
    }), /*#__PURE__*/_jsxs(TouchableOpacity, {
      activeOpacity: UIConstants.TOUCHABLE_ACTIVE_OPACITY,
      style: styles.contentContainer,
      onPress: onPress,
      children: [/*#__PURE__*/_jsx(Text, {
        style: styles.title,
        children: title
      }), /*#__PURE__*/_jsx(Text, {
        style: styles.actionText,
        children: actionText
      })]
    })]
  });
};
//# sourceMappingURL=index.js.map