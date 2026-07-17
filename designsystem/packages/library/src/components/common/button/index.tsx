import React from "react";
import { Text, Pressable, View, ViewStyle, TextStyle, GestureResponderEvent, StyleProp, ActivityIndicator, PressableProps } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { FontNames, spacing } from "../../../themes";
import { BUTTON_BIG_SIZE, BUTTON_SMALL_SIZE, styles } from "./styles";
import { normalize } from "../../../utils";

// Variants that the Button can take.
export type ButtonVariant = "primary" | "secondary" | "inversed" | "link";

// Size options for the Button vertical padding.
export type ButtonSize = "big" | "small";

export type ButtonProps = {
  /** Text to show inside the Button */
  title: string;
  /** Additional style overrides for the title */
  titleStyle?: StyleProp<TextStyle> | undefined;
  /** Callback fired when the Button is pressed */
  onPress: (event: GestureResponderEvent) => void;
  /** Visual style of the Button */
  variant?: ButtonVariant;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Size variation: 'big' has larger vertical padding */
  size?: ButtonSize;
  /** Additional style overrides for the container */
  style?: StyleProp<ViewStyle>;
  /** Whether the button is loading */
  isLoading?: boolean;
  /** Icon to show on the left of the button */
  icon?: React.ReactNode;
} & PressableProps;

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
}: ButtonProps) => {
  const { themeColors } = useTheme();

  // Return background & text colors based on current variant / state
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          background: disabled ? themeColors.button.primaryFillDisabled : themeColors.button.primaryFillDefault,
          hoverBackground: themeColors.button.primaryFillHover,
          text: disabled ? themeColors.button.primaryTextDisabled : themeColors.button.primaryTextDefault,
        };
      case "secondary":
        return {
          background: disabled ? themeColors.button.secondaryFillDisabled : themeColors.button.secondaryFillDefault,
          hoverBackground: themeColors.button.secondaryFillHover,
          text: disabled ? themeColors.button.secondaryTextDisabled : themeColors.button.secondaryTextDefault,
        };
      case "inversed":
        return {
          background: disabled ? themeColors.button.inversedDisabled : themeColors.button.inversedDefault,
          hoverBackground: themeColors.button.inversedHover,
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.inversedTextDefault,
        };
      case "link":
      default:
        return {
          background: "transparent",
          hoverBackground: "transparent",
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.secondaryTextDefault,
        };
    }
  };

  const { background, hoverBackground, text } = getColors();

  // Helper to build container style depending on press state
  const buildContainerStyle = (pressed: boolean): StyleProp<ViewStyle> => [
    styles.base,
    variant !== "link" ? { height: size === "big" ? BUTTON_BIG_SIZE : BUTTON_SMALL_SIZE, paddingHorizontal: spacing.md } : null,
    variant !== "link" ? { backgroundColor: pressed && !disabled ? hoverBackground : background } : null,
    style || null,
  ];

  // Helper to build text style depending on press state
  const buildTextStyle = (pressed: boolean): TextStyle => ({
    fontFamily: FontNames.bold,
    fontSize: normalize(18),
    color: text,
    textDecorationLine: variant === "link" && !pressed ? "underline" : "none",
  });

  return (
    <Pressable
      disabled={disabled || isLoading}
      onPress={onPress}
      style={({ pressed }) => buildContainerStyle(pressed)}
      {...restProps}>
      {({ pressed }) =>
        isLoading ? (
          <ActivityIndicator
            size="small"
            color={text}
          />
        ) : (
          <View style={styles.buttonWithIcon}>
            {icon && (
              <View>{React.isValidElement(icon) ? React.cloneElement(icon as any, { color: (icon as any).props?.color || text }) : icon}</View>
            )}
            <Text style={[buildTextStyle(pressed), titleStyle]}>{title}</Text>
          </View>
        )
      }
    </Pressable>
  );
};

export type IconButtonProps = Omit<ButtonProps, "title"> & {
  icon: React.ReactNode;
  size?: "big" | "small" | "verySmall";
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
}: IconButtonProps) => {
  const { themeColors } = useTheme();

  // Re-use getColors helper from Button component to determine fill & text colors
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          background: disabled ? themeColors.button.primaryFillDisabled : themeColors.button.primaryFillDefault,
          hoverBackground: themeColors.button.primaryFillHover,
          text: disabled ? themeColors.button.primaryTextDisabled : themeColors.button.primaryTextDefault,
        };
      case "secondary":
        return {
          background: disabled ? themeColors.button.secondaryFillDisabled : themeColors.button.secondaryFillDefault,
          hoverBackground: themeColors.button.secondaryFillHover,
          text: disabled ? themeColors.button.secondaryTextDisabled : themeColors.button.secondaryTextDefault,
        };
      case "inversed":
        return {
          background: disabled ? themeColors.button.inversedDisabled : themeColors.button.inversedDefault,
          hoverBackground: themeColors.button.inversedHover,
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.inversedTextDefault,
        };
      case "link":
      default:
        return {
          background: "transparent",
          hoverBackground: "transparent",
          text: disabled ? themeColors.button.inversedTextDisabled : themeColors.button.secondaryTextDefault,
        };
    }
  };

  const { background, hoverBackground, text } = getColors();

  // Re-use container style builder from Button component
  const buildContainerStyle = (pressed: boolean): StyleProp<ViewStyle> => [
    styles.base,
    { alignSelf: "baseline" },
    variant !== "link"
      ? {
          width: size === "big" ? BUTTON_BIG_SIZE : BUTTON_SMALL_SIZE,
          height: size === "big" ? BUTTON_BIG_SIZE : BUTTON_SMALL_SIZE,
        }
      : null,
    variant !== "link" ? { backgroundColor: pressed && !disabled ? hoverBackground : background } : null,
    style || null,
  ];

  // wrap in a view to allow for icon placement to avoid crash
  return (
    <View>
      <Pressable
        disabled={disabled || isLoading}
        onPress={onPress}
        style={({ pressed }) => buildContainerStyle(pressed)}
        {...restProps}>
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={text}
          />
        ) : (
          <View>{React.isValidElement(icon) ? React.cloneElement(icon as any, { color: (icon as any).props?.color || text }) : icon}</View>
        )}
      </Pressable>
    </View>
  );
};
