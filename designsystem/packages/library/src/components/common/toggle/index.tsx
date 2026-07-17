import React, { useEffect } from "react";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useTheme } from "../../../themes/themeContext";
import { spacing } from "../../../themes";
import { styles as baseStyles } from "./styles";

export type ToggleProps = {
  /** Current boolean value */
  value: boolean;
  /** Callback fired when user toggles the switch */
  onValueChange?: (next: boolean) => void;
  /** Disable all interactions */
  disabled?: boolean;
  /** Diameter of the knob in pixels (default = spacing.lg) */
  knobSize?: number;
  /** Width of the track in pixels (defaults to knobSize * 1.8) */
  trackWidth?: number;
  /** Override for active track colour */
  activeTrackColor?: string;
  /** Override for inactive track colour */
  inactiveTrackColor?: string;
  /** Override for disabled track colour */
  disabledTrackColor?: string;
  /** Override for knob colour (default #FFF) */
  knobColor?: string;
  /** Additional style overrides for the container */
  style?: StyleProp<ViewStyle>;
  /** Horizontal & vertical padding between knob and track (in px) */
  trackPadding?: number;
} & PressableProps;

/**
 * Simple on/off switch with animated track colour and knob translation, built with react-native-reanimated.
 */
export const Toggle = ({
  value,
  onValueChange,
  disabled = false,
  knobSize = spacing.md,
  trackWidth,
  activeTrackColor,
  inactiveTrackColor,
  disabledTrackColor,
  knobColor,
  style,
  trackPadding = 2,
  ...restProps
}: ToggleProps) => {
  const { themeColors } = useTheme();

  // Fallback colors
  const _knobColor = knobColor ?? themeColors.fill.page;
  const _activeTrackColor = activeTrackColor ?? themeColors.fill.active;
  const _inactiveTrackColor = inactiveTrackColor ?? themeColors.fill.disabled;
  const _disabledTrackColor = disabledTrackColor ?? themeColors.fill.disabled;

  const trackHeight = knobSize + trackPadding * 2;
  const _trackWidth = trackWidth ?? trackHeight * 1.8;
  const translateDistance = _trackWidth - knobSize - trackPadding * 2;

  const progress = useSharedValue(value ? 1 : 0);

  // Animate whenever the external value changes
  useEffect(() => {
    progress.value = withTiming(value ? 1 : 0, { duration: 200 });
  }, [value, progress]);

  const animatedTrackStyle = useAnimatedStyle(() => ({
    backgroundColor: disabled ? _disabledTrackColor : interpolateColor(progress.value, [0, 1], [_inactiveTrackColor, _activeTrackColor]),
  }));

  const animatedKnobStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: trackPadding + progress.value * translateDistance }],
  }));

  const handlePress = () => {
    if (disabled) {
      return;
    }
    onValueChange?.(!value);
  };

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ disabled, checked: value }}
      onPress={handlePress}
      disabled={disabled}
      style={[{ width: _trackWidth, height: trackHeight, justifyContent: "center" }, style]}
      {...restProps}>
      <Animated.View style={[baseStyles.track, animatedTrackStyle, { width: _trackWidth, height: trackHeight, borderRadius: trackHeight / 2 }]} />
      <Animated.View
        style={[
          baseStyles.knob,
          animatedKnobStyle,
          { width: knobSize, height: knobSize, borderRadius: knobSize / 2, backgroundColor: _knobColor, top: trackPadding },
        ]}
      />
    </Pressable>
  );
};
