"use strict";

import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { clamp, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useTheme } from "../../../themes/themeContext";
import { styles as baseStyles } from "./styles";
import { brandToken, spacing } from "../../../themes";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Draggable slider built with react-native-reanimated & RNGH.
 * Supports optional snapping to a fixed `step` increment.
 */
const SliderComponent = ({
  min = 0,
  max = 1,
  initialValue = min,
  value,
  onValueChange,
  onSlidingComplete,
  step = 0,
  trackHeight = spacing.xs,
  knobSize = spacing.lg,
  activeTrackColor,
  inactiveTrackColor,
  knobColor = brandToken.brand1[0],
  disabled = false,
  style
}) => {
  const {
    themeColors
  } = useTheme();

  // Colors fall back to theme when not provided
  const activeColor = activeTrackColor ?? brandToken.brand2[500];
  const inactiveColor = inactiveTrackColor ?? themeColors.fill.disabled;
  const range = max - min;

  // Clamp initial value to within [min, max]
  const resolvedInitialValue = value ?? initialValue;
  const clampedInitialValue = clamp(resolvedInitialValue, min, max);
  const trackWidthSV = useSharedValue(0);
  const onTrackLayout = useCallback(e => {
    trackWidthSV.value = e.nativeEvent.layout.width;
  }, [trackWidthSV]);
  const progress = useSharedValue(clamp((clampedInitialValue - min) / (range || 1), 0, 1));
  const isGestureActive = useSharedValue(false);
  const gestureStartX = useSharedValue(0);

  // React state only for accessibilityValue (updated on release to limit re-renders)
  const [currentValue, setCurrentValue] = useState(clampedInitialValue);
  useEffect(() => {
    if (value === undefined) {
      return;
    }
    const clampedValue = clamp(value, min, max);
    const progressRatio = range === 0 ? 0 : clamp((clampedValue - min) / range, 0, 1);
    progress.value = progressRatio;
    setCurrentValue(prev => prev === clampedValue ? prev : clampedValue);
  }, [value, min, max, range, progress, isGestureActive]);
  const panGesture = Gesture.Pan().enabled(!disabled).onStart(_event => {
    gestureStartX.value = progress.value * trackWidthSV.value;
    isGestureActive.value = true;
  }).onUpdate(event => {
    const newX = clamp(gestureStartX.value + event.translationX, 0, trackWidthSV.value);
    const newProgress = trackWidthSV.value === 0 ? 0 : newX / trackWidthSV.value;
    progress.value = clamp(newProgress, 0, 1);
    const updatedValue = min + progress.value * range;
    if (onValueChange) {
      runOnJS(onValueChange)(updatedValue);
    }
  }).onEnd(() => {
    let finalValue = min + progress.value * range;
    if (step && step > 0) {
      const steps = Math.round((finalValue - min) / step);
      finalValue = clamp(min + steps * step, min, max);
      const snappedProgress = range === 0 ? 0 : (finalValue - min) / range;
      progress.value = withTiming(clamp(snappedProgress, 0, 1));
    }
    runOnJS(setCurrentValue)(finalValue);
    if (onSlidingComplete) {
      runOnJS(onSlidingComplete)(finalValue);
    }
    isGestureActive.value = false;
  });
  const animatedTrackFilledStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
    backgroundColor: activeColor,
    height: trackHeight,
    borderRadius: trackHeight / 2
  }));
  const animatedKnobStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: progress.value * trackWidthSV.value - knobSize / 2
    }]
  }));
  return /*#__PURE__*/_jsx(View, {
    style: [baseStyles.wrapper, {
      height: knobSize
    }],
    children: /*#__PURE__*/_jsxs(View, {
      pointerEvents: disabled ? "none" : "auto",
      style: [baseStyles.container, style],
      accessibilityRole: "adjustable",
      accessibilityValue: {
        min: 0,
        max: 100,
        now: Math.round((currentValue - min) / (range || 1) * 100),
        text: `${Math.round((currentValue - min) / (range || 1) * 100)}%`
      },
      children: [/*#__PURE__*/_jsx(View, {
        onLayout: onTrackLayout,
        style: [baseStyles.track, {
          height: trackHeight,
          borderRadius: trackHeight / 2,
          backgroundColor: inactiveColor
        }]
      }), /*#__PURE__*/_jsx(Animated.View, {
        style: [baseStyles.filledTrack, animatedTrackFilledStyle]
      }), /*#__PURE__*/_jsx(GestureDetector, {
        gesture: panGesture,
        children: /*#__PURE__*/_jsx(Animated.View, {
          style: [baseStyles.knob, animatedKnobStyle, {
            width: knobSize,
            height: knobSize,
            borderRadius: knobSize / 2,
            backgroundColor: knobColor,
            top: -(knobSize - trackHeight) / 2
          }]
        })
      })]
    })
  });
};
export const Slider = /*#__PURE__*/React.memo(SliderComponent);
Slider.displayName = "Slider";
//# sourceMappingURL=index.js.map