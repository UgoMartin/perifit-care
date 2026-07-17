"use strict";

import React, { useEffect } from "react";
import { Pressable } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useTheme } from "../../../themes/themeContext";
import { spacing } from "../../../themes";
import { styles as baseStyles } from "./styles";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
}) => {
  const {
    themeColors
  } = useTheme();

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
    progress.value = withTiming(value ? 1 : 0, {
      duration: 200
    });
  }, [value, progress]);
  const animatedTrackStyle = useAnimatedStyle(() => ({
    backgroundColor: disabled ? _disabledTrackColor : interpolateColor(progress.value, [0, 1], [_inactiveTrackColor, _activeTrackColor])
  }));
  const animatedKnobStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: trackPadding + progress.value * translateDistance
    }]
  }));
  const handlePress = () => {
    if (disabled) {
      return;
    }
    onValueChange?.(!value);
  };
  return /*#__PURE__*/_jsxs(Pressable, {
    accessibilityRole: "switch",
    accessibilityState: {
      disabled,
      checked: value
    },
    onPress: handlePress,
    disabled: disabled,
    style: [{
      width: _trackWidth,
      height: trackHeight,
      justifyContent: "center"
    }, style],
    ...restProps,
    children: [/*#__PURE__*/_jsx(Animated.View, {
      style: [baseStyles.track, animatedTrackStyle, {
        width: _trackWidth,
        height: trackHeight,
        borderRadius: trackHeight / 2
      }]
    }), /*#__PURE__*/_jsx(Animated.View, {
      style: [baseStyles.knob, animatedKnobStyle, {
        width: knobSize,
        height: knobSize,
        borderRadius: knobSize / 2,
        backgroundColor: _knobColor,
        top: trackPadding
      }]
    })]
  });
};
//# sourceMappingURL=index.js.map