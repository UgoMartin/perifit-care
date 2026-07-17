import React, { useEffect } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useTheme } from "../../../themes/themeContext";
import { styles as baseStyles } from "./styles";
import { clamp } from "lodash";
import { normalize } from "../../../utils";

export type ProgressBarProps = {
  /** Whether to animate the progress bar. */
  animated?: boolean;
  /** Starting progress when animating (0-1). */
  from?: number;
  /** Target progress when animating (0-1). */
  to?: number;
  /** Height of the progress bar in pixels. */
  height?: number;
  /** Duration of the animation in milliseconds. Applies only when `from`/`to` provided. */
  duration?: number;
  /** Optional color override for the filled bar. */
  color?: string;
  /** Optional color override for the track. */
  trackColor?: string;
  /** Additional style overrides for the outer container. */
  style?: StyleProp<ViewStyle>;
};

/**
 * Horizontal progress bar that animates smoothly when the `progress` prop changes.
 * Built on top of react-native-reanimated for 60fps animations.
 */
export const ProgressBar = ({ animated, from, to, height = normalize(8), duration = 1000, color, trackColor, style }: ProgressBarProps) => {
  const { themeColors } = useTheme();

  const barColor = color ?? themeColors.fill.dark;
  const barTrackColor = trackColor ?? themeColors.fill.primary;

  // Helper to clamp values between 0-1
  const clampValue = (value: number | undefined): number => {
    return clamp(value ?? 0, 0, 1);
  };

  // Prefer `to` value when provided for initial rendering, otherwise fallback to `from`.
  // This fixes the issue where the progress bar wouldn't render when animated is false.
  const initialProgress = clampValue(to ?? from ?? 0);
  const progressShared = useSharedValue(initialProgress);

  useEffect(() => {
    if (animated && from !== undefined && to !== undefined) {
      progressShared.value = clampValue(from);
      progressShared.value = withTiming(clampValue(to), { duration });
      return;
    }

    const target = to ?? from;
    if (target !== undefined) {
      progressShared.value = clampValue(target);
    }
  }, [from, to, animated, duration, progressShared]);

  // Animate width as a percentage of the container width
  const animatedBarStyle = useAnimatedStyle(() => ({
    width: `${progressShared.value * 100}%`,
  }));

  return (
    <View style={[baseStyles.container, { height, backgroundColor: barTrackColor, borderRadius: height / 2 }, style]}>
      <Animated.View style={[baseStyles.bar, animatedBarStyle, { backgroundColor: barColor, borderRadius: height / 2 }]} />
    </View>
  );
};
