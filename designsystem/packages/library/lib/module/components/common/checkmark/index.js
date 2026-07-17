"use strict";

import React from "react";
import { Image, View } from "react-native";
import Images from "../../../assets/images";
import { normalize } from "../../../utils";
import { useTheme } from "../../../themes";
import { getStyles, ICON_RATIO } from "./styles";
import { jsx as _jsx } from "react/jsx-runtime";
export const Checkmark = ({
  size = normalize(28)
}) => {
  const {
    themeColors
  } = useTheme();
  const styles = getStyles(themeColors, size);
  return /*#__PURE__*/_jsx(View, {
    style: styles.container,
    children: /*#__PURE__*/_jsx(Image, {
      source: Images.whiteCheckIcon,
      style: {
        width: size * ICON_RATIO,
        resizeMode: "contain"
      }
    })
  });
};
//# sourceMappingURL=index.js.map