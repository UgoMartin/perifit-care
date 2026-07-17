"use strict";

import React from "react";
import { Dimensions, Text, View } from "react-native";
import { spacing, useTheme } from "../../../themes";
import UIConstants from "../../../utils";
import loaderAnimation from "../../../assets/loader_animation.json";
import LottieView from "lottie-react-native";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Loader = ({
  title,
  subtitle,
  size
}) => {
  const {
    typography
  } = useTheme();
  const windowSize = Dimensions.get("window");
  const isLandscape = windowSize.width > windowSize.height;
  const loadingSize = size ?? Math.min(UIConstants.SCREEN_HEIGHT, UIConstants.SCREEN_WIDTH) * (isLandscape ? 0.65 : 0.8);
  return /*#__PURE__*/_jsxs(View, {
    style: {
      alignItems: "center",
      gap: spacing.xs
    },
    children: [/*#__PURE__*/_jsx(LottieView, {
      style: {
        width: loadingSize,
        height: loadingSize
      },
      source: loaderAnimation,
      autoPlay: true,
      loop: true
    }), /*#__PURE__*/_jsx(Text, {
      style: [typography.h2, {
        textAlign: "center"
      }],
      children: title
    }), /*#__PURE__*/_jsx(Text, {
      style: [typography.body, {
        textAlign: "center"
      }],
      children: subtitle
    })]
  });
};
//# sourceMappingURL=index.js.map