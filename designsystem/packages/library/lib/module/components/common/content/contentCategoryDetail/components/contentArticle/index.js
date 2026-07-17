"use strict";

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ContentArticleThumbnail } from "../contentArticleThumbnail";
import { getStyles } from "./styles";
import UIConstants from "../../../../../../utils";
import { useTheme } from "../../../../../../themes/themeContext";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ContentArticle = ({
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
  return /*#__PURE__*/_jsxs(TouchableOpacity, {
    activeOpacity: UIConstants.TOUCHABLE_ACTIVE_OPACITY,
    style: styles.container,
    onPress: onPress ?? (() => {}),
    children: [/*#__PURE__*/_jsx(ContentArticleThumbnail, {
      image: image,
      showPremiumIcon: showPremiumIcon
    }), /*#__PURE__*/_jsx(Text, {
      style: styles.title,
      children: title
    })]
  });
};
//# sourceMappingURL=index.js.map