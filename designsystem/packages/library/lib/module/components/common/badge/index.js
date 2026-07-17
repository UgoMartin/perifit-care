"use strict";

import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { getStyles } from "./styles";
import { spacing } from "../../../themes";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Non-interactive label used to highlight short pieces of information.
 * It supports a light (primary) and dark (inversed) color scheme.
 */
export const Badge = ({
  title,
  icon,
  variant = "light",
  containerStyle,
  textStyle,
  size = "default",
  tintIcon = false
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const baseStyles = getStyles(themeColors, typography);
  const {
    background,
    text,
    iconTint
  } = React.useMemo(() => {
    switch (variant) {
      case "dark":
        return {
          background: themeColors.fill.dark,
          text: themeColors.text.inversedChangeBlack,
          iconTint: themeColors.icon.inversedChangeBlack
        };
      case "light":
      default:
        return {
          background: themeColors.fill.primary,
          text: themeColors.text.primary,
          iconTint: themeColors.icon.primary
        };
    }
  }, [variant, themeColors]);
  return /*#__PURE__*/_jsxs(View, {
    style: [baseStyles.container, {
      backgroundColor: background,
      paddingVertical: size === "small" ? spacing.xs3 : spacing.xs2
    }, containerStyle],
    children: [icon && (/*#__PURE__*/React.isValidElement(icon) ? (/*#__PURE__*/React.cloneElement(icon, {
      style: [baseStyles.icon, icon.props?.style],
      ...(tintIcon ? {
        color: iconTint
      } : {})
    })) : /*#__PURE__*/_jsx(Image, {
      source: icon,
      resizeMode: "contain",
      style: [baseStyles.icon, !tintIcon ? undefined : {
        tintColor: iconTint
      }]
    })), /*#__PURE__*/_jsx(Text, {
      style: [baseStyles.text, {
        color: text
      }, textStyle],
      children: title
    })]
  });
};
//# sourceMappingURL=index.js.map