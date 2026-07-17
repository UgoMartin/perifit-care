import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Platform, Text, TextInput, TextInputProps, Pressable, View, Image } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { spacing } from "../../../themes/spacing";
import { getStyles } from "./styles";
import UIConstants from "../../../utils";
import Images from "../../../assets/images";

export type TextFieldProps = {
  /** Field label displayed as placeholder and floating caption */
  label: string;
  /** Current text value */
  text: string;
  /** Optional error message – turns the outline red and shows message underneath */
  error?: string;
  /** Whether to show the error message */
  showErrorMessage?: boolean;
  /** Optional custom outline colour when not focused */
  borderColor?: string;
  /** Whether to add a show/hide password toggle */
  showHidePassword?: boolean;
  /** Avoid iOS inputAccessoryView flicker when secureTextEntry switches */
  fixInputAccessoryFlicker?: boolean;
} & TextInputProps;

/**
 * A Material-like text field with floating label and error state support.
 */
export const TextField = forwardRef(({ showErrorMessage = true, ...props }: TextFieldProps, ref: ForwardedRef<TextInput>) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography);

  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(props.textContentType !== "password" && props.textContentType !== "newPassword");

  // Expose inner TextInput methods
  useImperativeHandle(ref, () => inputRef.current!);

  const textValue = props.text || "";
  const showHint = textValue.length > 0;

  // Enable multiline on iOS to prevent secureTextEntry flicker
  const shouldBeMultiline =
    props.fixInputAccessoryFlicker && (props.textContentType !== "password" || (props.textContentType === "password" && isShowPassword));

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

  const getPaddingTop = (): number => {
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

  return (
    <View style={{ width: "100%" }}>
      <View
        style={[
          styles.inputContainer,
          {
            borderWidth: isFocused ? 2 : 1,
            borderColor: getBorderColor(),
            opacity: props.editable === false ? 0.5 : 1,
          },
        ]}>
        <View style={{ flex: 1 }}>
          {showHint && <Text style={styles.label}>{props.label}</Text>}
          <TextInput
            {...props}
            ref={inputRef}
            style={[styles.input, { paddingTop: getPaddingTop() }, props.showHidePassword ? {} : typography.body]}
            placeholder={!showHint ? props.label : ""}
            placeholderTextColor={themeColors.text.inactive}
            underlineColorAndroid="transparent"
            returnKeyType={props.returnKeyType ?? "done"}
            multiline={Platform.OS === "ios" && shouldBeMultiline}
            numberOfLines={1}
            blurOnSubmit
            secureTextEntry={props.showHidePassword && !isShowPassword}
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
        {props.showHidePassword && (
          <Pressable
            hitSlop={UIConstants.TOUCHABLE_HIT_SLOP}
            style={styles.showHidePasswordButton}
            onPress={() => setIsShowPassword((s) => !s)}>
            <Image
              style={styles.showHidePasswordIcon}
              source={isShowPassword ? Images.hidePasswordIcon : Images.showPasswordIcon}
            />
          </Pressable>
        )}
      </View>
      {props.error && showErrorMessage ? <Text style={styles.errorText}>{props.error}</Text> : null}
    </View>
  );
});
