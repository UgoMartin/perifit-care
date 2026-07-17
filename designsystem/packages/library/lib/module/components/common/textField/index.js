"use strict";

import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Platform, Text, TextInput, Pressable, View, Image } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { spacing } from "../../../themes/spacing";
import { getStyles } from "./styles";
import UIConstants from "../../../utils";
import Images from "../../../assets/images";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A Material-like text field with floating label and error state support.
 */
export const TextField = /*#__PURE__*/forwardRef(({
  showErrorMessage = true,
  ...props
}, ref) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = getStyles(themeColors, typography);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(props.textContentType !== "password" && props.textContentType !== "newPassword");

  // Expose inner TextInput methods
  useImperativeHandle(ref, () => inputRef.current);
  const textValue = props.text || "";
  const showHint = textValue.length > 0;

  // Enable multiline on iOS to prevent secureTextEntry flicker
  const shouldBeMultiline = props.fixInputAccessoryFlicker && (props.textContentType !== "password" || props.textContentType === "password" && isShowPassword);
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
  const getPaddingTop = () => {
    const space = spacing.md;
    switch (Platform.OS) {
      case "ios":
        if (shouldBeMultiline) {
          return textValue.length > 0 ? space + 4 : spacing.xs + 2;
        }
        return textValue.length > 0 ? space - 4 : 0;
      case "android":
        return textValue.length > 0 ? space : 0;
      default:
        return space;
    }
  };
  return /*#__PURE__*/_jsxs(View, {
    style: {
      width: "100%"
    },
    children: [/*#__PURE__*/_jsxs(View, {
      style: [styles.inputContainer, {
        borderWidth: isFocused ? 2 : 1,
        borderColor: getBorderColor(),
        opacity: props.editable === false ? 0.5 : 1
      }],
      children: [/*#__PURE__*/_jsxs(View, {
        style: {
          flex: 1
        },
        children: [showHint && /*#__PURE__*/_jsx(Text, {
          style: styles.label,
          children: props.label
        }), /*#__PURE__*/_jsx(TextInput, {
          ...props,
          ref: inputRef,
          style: [styles.input, {
            paddingTop: getPaddingTop()
          }, props.showHidePassword ? {} : typography.body],
          placeholder: !showHint ? props.label : "",
          placeholderTextColor: themeColors.text.inactive,
          underlineColorAndroid: "transparent",
          returnKeyType: props.returnKeyType ?? "done",
          multiline: Platform.OS === "ios" && shouldBeMultiline,
          numberOfLines: 1,
          blurOnSubmit: true,
          secureTextEntry: props.showHidePassword && !isShowPassword,
          onFocus: e => {
            setIsFocused(true);
            props.onFocus?.(e);
          },
          onBlur: e => {
            setIsFocused(false);
            props.onBlur?.(e);
          },
          onChangeText: t => {
            props.onChangeText?.(t);
          },
          value: textValue
        })]
      }), props.showHidePassword && /*#__PURE__*/_jsx(Pressable, {
        hitSlop: UIConstants.TOUCHABLE_HIT_SLOP,
        style: styles.showHidePasswordButton,
        onPress: () => setIsShowPassword(s => !s),
        children: /*#__PURE__*/_jsx(Image, {
          style: styles.showHidePasswordIcon,
          source: isShowPassword ? Images.hidePasswordIcon : Images.showPasswordIcon
        })
      })]
    }), props.error && showErrorMessage ? /*#__PURE__*/_jsx(Text, {
      style: styles.errorText,
      children: props.error
    }) : null]
  });
});
//# sourceMappingURL=index.js.map