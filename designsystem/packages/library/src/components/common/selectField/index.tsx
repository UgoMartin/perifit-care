import React, { useState } from "react";
import { GestureResponderEvent, Image, Text, Pressable, View } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { spacing } from "../../../themes/spacing";
import { getStyles } from "./styles";
import { normalize } from "../../../utils";
import Images from "../../../assets/images";

export type SelectFieldProps = {
  /** Field label displayed as placeholder and floating caption */
  label: string;
  /** Currently selected value */
  value?: string;
  /** Optional error message – turns the outline red and shows message underneath */
  error?: string;
  /** Optional custom outline colour when not focused */
  borderColor?: string;
  /** Whether this SelectField is editable (disabled when false) */
  editable?: boolean;
  /** Callback when user presses the field */
  onPress?: (event: GestureResponderEvent) => void;
};

/**
 * An input-like component that mimics a Material dropdown/select field with floating label and error state support.
 */
export const SelectField = (props: SelectFieldProps) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography);

  const [isFocused, setIsFocused] = useState(false);

  const showHint = Boolean(props.value && props.value.length > 0);

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

  const handlePressIn = () => setIsFocused(true);
  const handlePressOut = () => setIsFocused(false);

  return (
    <View style={{ width: "100%" }}>
      <Pressable
        onPress={props.onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={props.editable === false}
        style={[styles.inputContainer, { borderColor: getBorderColor(), opacity: props.editable === false ? 0.5 : 1 }]}>
        <View style={{ flex: 1, justifyContent: showHint ? "flex-start" : "center" }}>
          {showHint && <Text style={[styles.label, { color: props.error ? themeColors.text.error : themeColors.text.inactive }]}>{props.label}</Text>}
          <Text
            style={[
              styles.valueText,
              showHint ? { paddingTop: spacing.md } : {},
              showHint ? typography.body : { ...typography.body, color: themeColors.text.inactive },
            ]}
            numberOfLines={1}>
            {showHint ? props.value : props.label}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={Images.chevronIcon}
            style={{ width: normalize(24), height: normalize(24), resizeMode: "contain", tintColor: themeColors.icon.primary }}
          />
        </View>
      </Pressable>
      {props.error ? <Text style={styles.errorText}>{props.error}</Text> : null}
    </View>
  );
};
