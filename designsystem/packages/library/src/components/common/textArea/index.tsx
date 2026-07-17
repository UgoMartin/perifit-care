import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Text, View, TextInput, TextInputProps } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { spacing } from "../../../themes/spacing";
import { getStyles } from "./styles";
import UIConstants from "../../../utils";

export type TextAreaProps = {
  /** Field label displayed as placeholder and floating caption */
  label: string;
  /** Current text value */
  text: string;
  /** Optional error message – turns the outline red and shows message underneath */
  error?: string;
  /** Optional custom outline colour when not focused */
  borderColor?: string;
  /** Optional minimum height override */
  minHeight?: number;
} & TextInputProps;

/**
 * A multiline text area with floating label and error state support.
 */
export const TextArea = forwardRef((props: TextAreaProps, ref: ForwardedRef<TextInput>) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography);

  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const minHeight = props.minHeight ?? UIConstants.TEXTINPUT_HEIGHT * 3;
  const [inputHeight, setInputHeight] = useState(minHeight);

  // Expose inner TextInput methods
  useImperativeHandle(ref, () => inputRef.current!);

  const textValue = props.text || "";
  const showHint = textValue.length > 0;
  const dynamicPaddingTop = showHint ? spacing.xs : 0;

  const getBorderColor = (): string => {
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

  return (
    <View style={{ width: "100%" }}>
      <View
        style={[
          styles.inputContainer,
          {
            borderWidth: isFocused ? 2 : 1,
            borderColor: getBorderColor(),
            opacity: props.editable === false ? 0.5 : 1,
            minHeight,
            height: Math.max(minHeight, inputHeight),
          },
        ]}>
        {showHint && <Text style={[styles.label, { color: props.error ? themeColors.text.error : themeColors.text.inactive }]}>{props.label}</Text>}
        <TextInput
          {...props}
          ref={inputRef}
          style={[
            styles.input,
            {
              paddingTop: dynamicPaddingTop,
              height: Math.max(minHeight - spacing.md * 2, inputHeight - spacing.md * 2),
            },
          ]}
          placeholder={!showHint ? props.label : ""}
          placeholderTextColor={themeColors.text.inactive}
          underlineColorAndroid="transparent"
          multiline
          onContentSizeChange={(e) => {
            const height = e.nativeEvent.contentSize.height + spacing.md * 2;
            if (height > inputHeight) {
              setInputHeight(height);
            }
          }}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          onChangeText={(t) => {
            props.onChangeText?.(t);
          }}
          value={textValue}
        />
      </View>
      {props.error ? <Text style={styles.errorText}>{props.error}</Text> : null}
    </View>
  );
});
