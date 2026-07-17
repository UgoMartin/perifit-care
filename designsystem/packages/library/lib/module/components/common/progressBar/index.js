"use strict";

import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useTheme } from "../../../themes/themeContext";
import { styles as baseStyles } from "./styles";
import { clamp } from "lodash";
import { normalize } from "../../../utils";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Horizontal progress bar that animates smoothly when the `progress` prop changes.
 * Built on top of react-native-reanimated for 60fps animations.
 */
export const ProgressBar = ({
  animated,
  from,
  to,
  height = normalize(8),
  duration = 1000,
  color,
  trackColor,
  style
}) => {
  const {
    themeColors
  } = useTheme();
  const barColor = color ?? themeColors.fill.dark;
  const barTrackColor = trackColor ?? themeColors.fill.primary;

  // Helper to clamp values between 0-1
  const clampValue = value => {
    return clamp(value ?? 0, 0, 1);
  };

  // Prefer `to` value when provided for initial rendering, otherwise fallback to `from`.
  // This fixes the issue where the progress bar wouldn't render when animated is false.
  const initialProgress = clampValue(to ?? from ?? 0);
  const progressShared = useSharedValue(initialProgress);
  useEffect(() => {
    if (animated && from !== undefined && to !== undefined) {
      progressShared.value = clampValue(from);
      progressShared.value = withTiming(clampValue(to), {
        duration
      });
      return;
    }
    const target = to ?? from;
    if (target !== undefined) {
      progressShared.value = clampValue(target);
    }
  }, [from, to, animated, duration, progressShared]);

  // Animate width as a percentage of the container width
  const animatedBarStyle = useAnimatedStyle(() => ({
    width: `${progressShared.value * 100}%`
  }));
  return /*#__PURE__*/_jsx(View, {
    style: [baseStyles.container, {
      height,
      backgroundColor: barTrackColor,
      borderRadius: height / 2
    }, style],
    children: /*#__PURE__*/_jsx(Animated.View, {
      style: [baseStyles.bar, animatedBarStyle, {
        backgroundColor: barColor,
        borderRadius: height / 2
      }]
    })
  });
};
//# sourceMappingURL=index.js.map