"use strict";

import React from "react";
import { View, Text, Pressable } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { iconSize, spacing } from "../../../themes";
import { Button } from "../button";
import UIConstants from "../../../utils";
import { styles as baseStyles } from "./styles";
import { Lucide } from "@react-native-vector-icons/lucide";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Toast – temporary alert banner with an optional action button.
 */
export const Toast = ({
  title,
  description,
  actionLabel,
  onActionPress,
  onClose,
  disabled = false,
  style
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const renderCloseIcon = () => /*#__PURE__*/_jsx(Pressable, {
    accessibilityRole: "button",
    hitSlop: UIConstants.TOUCHABLE_HIT_SLOP,
    onPress: onClose,
    disabled: disabled || !onClose,
    children: /*#__PURE__*/_jsx(Lucide, {
      name: "x",
      size: iconSize.xs,
      color: themeColors.icon.primary
    })
  });
  return /*#__PURE__*/_jsxs(View, {
    style: [baseStyles.container, {
      backgroundColor: themeColors.fill.primary,
      opacity: disabled ? 0.6 : 1
    }, style],
    children: [/*#__PURE__*/_jsxs(View, {
      style: {
        flexDirection: "row",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/_jsx(Text, {
        style: typography.subtitle,
        children: title
      }), onClose ? renderCloseIcon() : null]
    }), description ? /*#__PURE__*/_jsx(Text, {
      style: typography.body,
      children: description
    }) : null, actionLabel && /*#__PURE__*/_jsx(Button, {
      style: {
        alignSelf: "baseline",
        marginTop: spacing.xs
      },
      title: actionLabel,
      onPress: onActionPress ?? (() => {}),
      variant: "primary",
      size: "small",
      disabled: disabled || !onActionPress
    })]
  });
};
//# sourceMappingURL=index.js.map