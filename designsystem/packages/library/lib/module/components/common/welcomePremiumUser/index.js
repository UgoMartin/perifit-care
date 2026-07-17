"use strict";

import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { getStyles } from "./styles";
import { Button } from "../button";
import Images from "../../../assets/images";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const WelcomePremiumUser = ({
  title,
  description,
  buttonText,
  onButtonPress,
  fullScreen = true,
  containerStyle
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = getStyles(themeColors, typography, insets);
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.container, fullScreen && styles.fullScreenContainer, containerStyle],
    children: [/*#__PURE__*/_jsxs(View, {
      style: styles.contentContainer,
      children: [/*#__PURE__*/_jsx(View, {
        style: styles.iconContainer,
        children: /*#__PURE__*/_jsx(Image, {
          source: Images.contentTab.premiumLargeIcon,
          style: styles.icon
        })
      }), /*#__PURE__*/_jsx(Text, {
        style: styles.title,
        children: title
      }), /*#__PURE__*/_jsx(Text, {
        style: styles.description,
        children: description
      })]
    }), !!buttonText && /*#__PURE__*/_jsx(Button, {
      title: buttonText,
      onPress: onButtonPress,
      variant: "inversed",
      size: "big",
      titleStyle: styles.textButton
    })]
  });
};
//# sourceMappingURL=index.js.map