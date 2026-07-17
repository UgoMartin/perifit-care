import React from "react";
import { Pressable, Text, StyleProp, ViewStyle, TextStyle, PressableProps, Image } from "react-native";
import { radius, useTheme } from "../../../themes";
import UIConstants, { normalize } from "../../../utils";
import Images from "../../../assets/images";

/**
 * Visual state variants supported by the PlanningDate component.
 */
export type PlanningDateVariant =
  | "empty" // Empty – not filled
  | "emptyMarked" // Empty – filled
  | "filled" // Current day – not completed
  | "filledMarked" // Current day – completed
  | "disabled" // Disabled
  | "emptyDashed"; // Future day

export type PlanningDateProps = {
  /** One or two-letter label that represents the day (eg. "M", "Tu") */
  label: string;
  /** Visual state variant – defaults to "empty" */
  variant?: PlanningDateVariant;
  /** Dimension of the square in pixels – defaults to 56 */
  size?: number;
  /** Callback fired when the element is pressed. Automatically disabled for the "disabled" variant. */
  onPress?: () => void;
  /** Additional style overrides for the outer container */
  style?: StyleProp<ViewStyle>;
  /** Additional style overrides for the label */
  labelStyle?: StyleProp<TextStyle>;
} & PressableProps;

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
export const PlanningDate = ({ label, variant = "empty", size = normalize(36), onPress, style, labelStyle, ...restProps }: PlanningDateProps) => {
  const { themeColors, typography } = useTheme();

  // Compute the base visual style depending on the variant
  const computedStyle = React.useMemo(() => {
    switch (variant) {
      case "empty":
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.primary,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid" as const,
          completed: false,
          disabled: false,
        };
      case "emptyMarked":
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.primary,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid" as const,
          completed: true,
          disabled: false,
        };
      case "filled":
        return {
          backgroundColor: themeColors.fill.active,
          textColor: themeColors.text.inversedChangeBlack,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid" as const,
          completed: false,
          disabled: false,
        };
      case "filledMarked":
        return {
          backgroundColor: themeColors.fill.active,
          textColor: themeColors.text.inversedChangeBlack,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid" as const,
          completed: true,
          disabled: false,
        };
      case "disabled":
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.inactive,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid" as const,
          completed: false,
          disabled: true,
        };
      case "emptyDashed":
      default:
        return {
          backgroundColor: themeColors.fill.primary,
          textColor: themeColors.text.primary,
          borderColor: themeColors.border.selected,
          borderWidth: 1,
          borderStyle: "dashed" as const,
          completed: false,
          disabled: false,
        };
    }
  }, [themeColors, variant]);

  const overlaySize = 18;

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress || computedStyle.disabled}
      accessibilityRole="button"
      hitSlop={UIConstants.TOUCHABLE_HIT_SLOP}
      style={({ pressed }) => [
        {
          width: size,
          height: size,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: computedStyle.backgroundColor,
          borderColor: computedStyle.borderColor,
          borderWidth: computedStyle.borderWidth,
          borderStyle: computedStyle.borderStyle,
        },
        pressed && !computedStyle.disabled ? { backgroundColor: themeColors.fill.hover } : null,
        style,
      ]}
      {...restProps}>
      {/* Day label */}
      <Text
        style={[
          {
            ...typography.captionSemi,
            color: computedStyle.textColor,
          },
          labelStyle,
        ]}>
        {label}
      </Text>

      {/* Completed overlay (top-right) */}
      {computedStyle.completed && (
        <Image
          source={Images.checkmarkSmallIcon}
          style={{
            position: "absolute",
            top: -overlaySize * 0.25,
            right: -overlaySize * 0.25,
            width: overlaySize,
            height: overlaySize,
            borderRadius: radius.s,
            backgroundColor: themeColors.fill.success,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
    </Pressable>
  );
};

export default PlanningDate;
