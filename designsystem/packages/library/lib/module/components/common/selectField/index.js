"use strict";

import React, { useState } from "react";
import { Image, Text, Pressable, View } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { spacing } from "../../../themes/spacing";
import { getStyles } from "./styles";
import { normalize } from "../../../utils";
import Images from "../../../assets/images";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * An input-like component that mimics a Material dropdown/select field with floating label and error state support.
 */
export const SelectField = props => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = getStyles(themeColors, typography);
  const [isFocused, setIsFocused] = useState(false);
  const showHint = Boolean(props.value && props.value.length > 0);
  const getBorderColor = () => {
    if (props.editable === false) {
      return themeColors.border.secondary;
    }
    if (props.error) {
      return themeColors.border.error;
    }
    if (props.borderColor) {
      return props.borderColor;
    }
    return isFocused ? themeColors.border.active : themeColors.border.primary;
  };
  const handlePressIn = () => setIsFocused(true);
  const handlePressOut = () => setIsFocused(false);
  return /*#__PURE__*/_jsxs(View, {
    style: {
      width: "100%"
    },
    children: [/*#__PURE__*/_jsxs(Pressable, {
      onPress: props.onPress,
      onPressIn: handlePressIn,
      onPressOut: handlePressOut,
      disabled: props.editable === false,
      style: [styles.inputContainer, {
        borderColor: getBorderColor(),
        opacity: props.editable === false ? 0.5 : 1
      }],
      children: [/*#__PURE__*/_jsxs(View, {
        style: {
          flex: 1,
          justifyContent: showHint ? "flex-start" : "center"
        },
        children: [showHint && /*#__PURE__*/_jsx(Text, {
          style: [styles.label, {
            color: props.error ? themeColors.text.error : themeColors.text.inactive
          }],
          children: props.label
        }), /*#__PURE__*/_jsx(Text, {
          style: [styles.valueText, showHint ? {
            paddingTop: spacing.md
          } : {}, showHint ? typography.body : {
            ...typography.body,
            color: themeColors.text.inactive
          }],
          numberOfLines: 1,
          children: showHint ? props.value : props.label
        })]
      }), /*#__PURE__*/_jsx(View, {
        style: styles.iconContainer,
        children: /*#__PURE__*/_jsx(Image, {
          source: Images.chevronIcon,
          style: {
            width: normalize(24),
            height: normalize(24),
            resizeMode: "contain",
            tintColor: themeColors.icon.primary
          }
        })
      })]
    }), props.error ? /*#__PURE__*/_jsx(Text, {
      style: styles.errorText,
      children: props.error
    }) : null]
  });
};
//# sourceMappingURL=index.js.map