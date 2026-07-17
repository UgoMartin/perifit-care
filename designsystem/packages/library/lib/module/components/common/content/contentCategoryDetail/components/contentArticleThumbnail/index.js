"use strict";

import React from "react";
import { View } from "react-native";
import { useTheme } from "../../../../../../themes/themeContext";
import { getStyles } from "./styles";
import Images from "../../../../../../assets/images";
import { CachedImage, CachedImageBackground } from "../../../utils/cachedImage";
import { jsx as _jsx } from "react/jsx-runtime";
export const ContentArticleThumbnail = ({
  image,
  showPremiumIcon = true
}) => {
  const {
    themeColors
  } = useTheme();
  const styles = getStyles(themeColors);
  return /*#__PURE__*/_jsx(CachedImageBackground, {
    source: image,
    style: styles.thumbnail,
    imageStyle: styles.thumbnailBorder,
    children: showPremiumIcon && /*#__PURE__*/_jsx(View, {
      style: styles.premiumIconContainer,
      children: /*#__PURE__*/_jsx(CachedImage, {
        source: Images.contentTab.premiumIcon,
        style: styles.premiumIcon,
        resizeMode: "contain"
      })
    })
  });
};
//# sourceMappingURL=index.js.map