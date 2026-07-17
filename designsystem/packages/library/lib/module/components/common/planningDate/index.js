"use strict";

import React from "react";
import { Pressable, Text, Image } from "react-native";
import { radius, useTheme } from "../../../themes";
import UIConstants, { normalize } from "../../../utils";
import Images from "../../../assets/images";

/**
 * Visual state variants supported by the PlanningDate component.
 */

// Future day
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Small rounded square used to display a calendar day inside the weekly planning
 * component.  It supports six visual variants as per the design spec:
 *  - Past day without completed        → "past"
 *  - Past day with completed           → "pastCompleted"
 *  - Today without completed           → "today"
 *  - Today with completed              → "todayCompleted"
 *  - Disabled date                     → "disabled"
 *  - Future date                       → "future"
 */
export const PlanningDate = ({
  label,
  variant = "empty",
  size = normalize(36),
  onPress,
  style,
  labelStyle,
  ...restProps
}) => {
  const {
    themeColors,
    typography
  } = useTheme();

  // Compute the base visual style depending on the variant
  const computedStyle = React.useMemo(() => {
    switch (variant) {
      case "empty":
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.primary,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          completed: false,
          disabled: false
        };
      case "emptyMarked":
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.primary,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          completed: true,
          disabled: false
        };
      case "filled":
        return {
          backgroundColor: themeColors.fill.active,
          textColor: themeColors.text.inversedChangeBlack,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          completed: false,
          disabled: false
        };
      case "filledMarked":
        return {
          backgroundColor: themeColors.fill.active,
          textColor: themeColors.text.inversedChangeBlack,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          completed: true,
          disabled: false
        };
      case "disabled":
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.inactive,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          completed: false,
          disabled: true
        };
      case "emptyDashed":
      default:
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.primary,
          borderColor: themeColors.border.selected,
          borderWidth: 1,
          borderStyle: "dashed",
          completed: false,
          disabled: false
        };
    }
  }, [themeColors, variant]);
  const overlaySize = 18;
  return /*#__PURE__*/_jsxs(Pressable, {
    onPress: onPress,
    disabled: !onPress || computedStyle.disabled,
    accessibilityRole: "button",
    hitSlop: UIConstants.TOUCHABLE_HIT_SLOP,
    style: ({
      pressed
    }) => [{
      width: size,
      height: size,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: computedStyle.backgroundColor,
      borderColor: computedStyle.borderColor,
      borderWidth: computedStyle.borderWidth,
      borderStyle: computedStyle.borderStyle
    }, pressed && !computedStyle.disabled ? {
      backgroundColor: themeColors.fill.hover
    } : null, style],
    ...restProps,
    children: [/*#__PURE__*/_jsx(Text, {
      style: [{
        ...typography.captionSemi,
        color: computedStyle.textColor
      }, labelStyle],
      children: label
    }), computedStyle.completed && /*#__PURE__*/_jsx(Image, {
      source: Images.checkmarkSmallIcon,
      style: {
        position: "absolute",
        top: -overlaySize * 0.25,
        right: -overlaySize * 0.25,
        width: overlaySize,
        height: overlaySize,
        borderRadius: radius.s,
        backgroundColor: themeColors.fill.success,
        justifyContent: "center",
        alignItems: "center"
      }
    })]
  });
};
export default PlanningDate;
//# sourceMappingURL=index.js.map