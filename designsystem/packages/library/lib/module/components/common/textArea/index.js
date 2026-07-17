"use strict";

import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Text, View, TextInput } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { spacing } from "../../../themes/spacing";
import { getStyles } from "./styles";
import UIConstants from "../../../utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A multiline text area with floating label and error state support.
 */
export const TextArea = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = getStyles(themeColors, typography);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const minHeight = props.minHeight ?? UIConstants.TEXTINPUT_HEIGHT * 3;
  const [inputHeight, setInputHeight] = useState(minHeight);

  // Expose inner TextInput methods
  useImperativeHandle(ref, () => inputRef.current);
  const textValue = props.text || "";
  const showHint = textValue.length > 0;
  const dynamicPaddingTop = showHint ? spacing.xs : 0;
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
  return /*#__PURE__*/_jsxs(View, {
    style: {
      width: "100%"
    },
    children: [/*#__PURE__*/_jsxs(View, {
      style: [styles.inputContainer, {
        borderWidth: isFocused ? 2 : 1,
        borderColor: getBorderColor(),
        opacity: props.editable === false ? 0.5 : 1,
        minHeight,
        height: Math.max(minHeight, inputHeight)
      }],
      children: [showHint && /*#__PURE__*/_jsx(Text, {
        style: [styles.label, {
          color: props.error ? themeColors.text.error : themeColors.text.inactive
        }],
        children: props.label
      }), /*#__PURE__*/_jsx(TextInput, {
        ...props,
        ref: inputRef,
        style: [styles.input, {
          paddingTop: dynamicPaddingTop,
          height: Math.max(minHeight - spacing.md * 2, inputHeight - spacing.md * 2)
        }],
        placeholder: !showHint ? props.label : "",
        placeholderTextColor: themeColors.text.inactive,
        underlineColorAndroid: "transparent",
        multiline: true,
        onContentSizeChange: e => {
          const height = e.nativeEvent.contentSize.height + spacing.md * 2;
          if (height > inputHeight) {
            setInputHeight(height);
          }
        },
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
    }), props.error ? /*#__PURE__*/_jsx(Text, {
      style: styles.errorText,
      children: props.error
    }) : null]
  });
});
//# sourceMappingURL=index.js.map