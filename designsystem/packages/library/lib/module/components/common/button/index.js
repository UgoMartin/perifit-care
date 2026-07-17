"use strict";

import React from "react";
import { Text, Pressable, View, ActivityIndicator } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { FontNames, spacing } from "../../../themes";
import { BUTTON_BIG_SIZE, BUTTON_SMALL_SIZE, styles } from "./styles";
import { normalize } from "../../../utils";

// Variants that the Button can take.

// Size options for the Button vertical padding.
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Button = ({
  title,
  onPress,
  variant = "primary",
  size = "big",
  disabled = false,
  style,
  isLoading = false,
  titleStyle,
  icon,
  ...restProps
}) => {
  const {
    themeColors
  } = useTheme();

  // Return background & text colors based on current variant / state
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          background: disabled ? themeColors.button.primaryFillDisabled : themeColors.button.primaryFillDefault,
          hoverBackground: themeColors.button.primaryFillHover,
          text: disabled ? themeColors.button.primaryTextDisabled : themeColors.button.primaryTextDefault
        };
      case "secondary":
        return {
          background: disabled ? themeColors.button.secondaryFillDisabled : themeColors.button.secondaryFillDefault,
          hoverBackground: themeColors.button.secondaryFillHover,
          text: disabled ? themeColors.button.secondaryTextDisabled : themeColors.button.secondaryTextDefault
        };
      case "inversed":
        return {
          background: disabled ? themeColors.button.inversedDisabled : themeColors.button.inversedDefault,
          hoverBackground: themeColors.button.inversedHover,
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.inversedTextDefault
        };
      case "link":
      default:
        return {
          background: "transparent",
          hoverBackground: "transparent",
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.secondaryTextDefault
        };
    }
  };
  const {
    background,
    hoverBackground,
    text
  } = getColors();

  // Helper to build container style depending on press state
  const buildContainerStyle = pressed => [styles.base, variant !== "link" ? {
    height: size === "big" ? BUTTON_BIG_SIZE : BUTTON_SMALL_SIZE,
    paddingHorizontal: spacing.md
  } : null, variant !== "link" ? {
    backgroundColor: pressed && !disabled ? hoverBackground : background
  } : null, style || null];

  // Helper to build text style depending on press state
  const buildTextStyle = pressed => ({
    fontFamily: FontNames.bold,
    fontSize: normalize(18),
    color: text,
    textDecorationLine: variant === "link" && !pressed ? "underline" : "none"
  });
  return /*#__PURE__*/_jsx(Pressable, {
    disabled: disabled || isLoading,
    onPress: onPress,
    style: ({
      pressed
    }) => buildContainerStyle(pressed),
    ...restProps,
    children: ({
      pressed
    }) => isLoading ? /*#__PURE__*/_jsx(ActivityIndicator, {
      size: "small",
      color: text
    }) : /*#__PURE__*/_jsxs(View, {
      style: styles.buttonWithIcon,
      children: [icon && /*#__PURE__*/_jsx(View, {
        children: /*#__PURE__*/React.isValidElement(icon) ? /*#__PURE__*/React.cloneElement(icon, {
          color: icon.props?.color || text
        }) : icon
      }), /*#__PURE__*/_jsx(Text, {
        style: [buildTextStyle(pressed), titleStyle],
        children: title
      })]
    })
  });
};
export const IconButton = ({
  icon,
  onPress,
  variant = "primary",
  size = "small",
  disabled = false,
  style,
  isLoading = false,
  ...restProps
}) => {
  const {
    themeColors
  } = useTheme();

  // Re-use getColors helper from Button component to determine fill & text colors
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          background: disabled ? themeColors.button.primaryFillDisabled : themeColors.button.primaryFillDefault,
          hoverBackground: themeColors.button.primaryFillHover,
          text: disabled ? themeColors.button.primaryTextDisabled : themeColors.button.primaryTextDefault
        };
      case "secondary":
        return {
          background: disabled ? themeColors.button.secondaryFillDisabled : themeColors.button.secondaryFillDefault,
          hoverBackground: themeColors.button.secondaryFillHover,
          text: disabled ? themeColors.button.secondaryTextDisabled : themeColors.button.secondaryTextDefault
        };
      case "inversed":
        return {
          background: disabled ? themeColors.button.inversedDisabled : themeColors.button.inversedDefault,
          hoverBackground: themeColors.button.inversedHover,
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.inversedTextDefault
        };
      case "link":
      default:
        return {
          background: "transparent",
          hoverBackground: "transparent",
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.secondaryTextDefault
        };
    }
  };
  const {
    background,
    hoverBackground,
    text
  } = getColors();

  // Re-use container style builder from Button component
  const buildContainerStyle = pressed => [styles.base, {
    alignSelf: "baseline"
  }, variant !== "link" ? {
    width: size === "big" ? BUTTON_BIG_SIZE : BUTTON_SMALL_SIZE,
    height: size === "big" ? BUTTON_BIG_SIZE : BUTTON_SMALL_SIZE
  } : null, variant !== "link" ? {
    backgroundColor: pressed && !disabled ? hoverBackground : background
  } : null, style || null];

  // wrap in a view to allow for icon placement to avoid crash
  return /*#__PURE__*/_jsx(View, {
    children: /*#__PURE__*/_jsx(Pressable, {
      disabled: disabled || isLoading,
      onPress: onPress,
      style: ({
        pressed
      }) => buildContainerStyle(pressed),
      ...restProps,
      children: isLoading ? /*#__PURE__*/_jsx(ActivityIndicator, {
        size: "small",
        color: text
      }) : /*#__PURE__*/_jsx(View, {
        children: /*#__PURE__*/React.isValidElement(icon) ? /*#__PURE__*/React.cloneElement(icon, {
          color: icon.props?.color || text
        }) : icon
      })
    })
  });
};
//# sourceMappingURL=index.js.map