import React, { useCallback, useEffect, useState } from "react";
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { clamp, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useTheme } from "../../../themes/themeContext";
import { styles as baseStyles } from "./styles";
import { brandToken, spacing } from "../../../themes";

export type SliderProps = {
  /** Initial value of the slider (between min & max). Used only on mount when `value` is undefined. */
  initialValue?: number;
  /** Controlled value of the slider (between min & max). Overrides `initialValue` when provided. */
  value?: number;
  /** Callback fired continuously while the slider is being dragged */
  onValueChange?: (value: number) => void;
  /** Callback fired when the user releases the knob */
  onSlidingComplete?: (value: number) => void;
  /** Minimum value – defaults to 0 */
  min?: number;
  /** Maximum value – defaults to 1 */
  max?: number;
  /** Step size between min & max. If omitted or 0, the slider is continuous. */
  step?: number;
  /** Height of the track in pixels (default 8) */
  trackHeight?: number;
  /** Diameter of the knob in pixels (default 24) */
  knobSize?: number;
  /** Optional color override for the active portion of the track */
  activeTrackColor?: string;
  /** Optional color override for the inactive portion of the track */
  inactiveTrackColor?: string;
  /** Optional color override for the knob */
  knobColor?: string;
  /** Disable all interactions */
  disabled?: boolean;
  /** Additional style overrides for the outer container */
  style?: StyleProp<ViewStyle>;
};

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
  style,
}: SliderProps) => {
  const { themeColors } = useTheme();

  // Colors fall back to theme when not provided
  const activeColor = activeTrackColor ?? brandToken.brand2[500];
  const inactiveColor = inactiveTrackColor ?? themeColors.fill.disabled;

  const range = max - min;

  // Clamp initial value to within [min, max]
  const resolvedInitialValue = value ?? initialValue;
  const clampedInitialValue = clamp(resolvedInitialValue, min, max);

  const trackWidthSV = useSharedValue(0);
  const onTrackLayout = useCallback(
    (e: LayoutChangeEvent) => {
      trackWidthSV.value = e.nativeEvent.layout.width;
    },
    [trackWidthSV],
  );

  const progress = useSharedValue(clamp((clampedInitialValue - min) / (range || 1), 0, 1));
  const isGestureActive = useSharedValue(false);
  const gestureStartX = useSharedValue(0);

  // React state only for accessibilityValue (updated on release to limit re-renders)
  const [currentValue, setCurrentValue] = useState<number>(clampedInitialValue);

  useEffect(() => {
    if (value === undefined) {
      return;
    }

    const clampedValue = clamp(value, min, max);
    const progressRatio = range === 0 ? 0 : clamp((clampedValue - min) / range, 0, 1);

    progress.value = progressRatio;

    setCurrentValue((prev) => (prev === clampedValue ? prev : clampedValue));
  }, [value, min, max, range, progress, isGestureActive]);

  const panGesture = Gesture.Pan()
    .enabled(!disabled)
    .onStart((_event) => {
      gestureStartX.value = progress.value * trackWidthSV.value;
      isGestureActive.value = true;
    })
    .onUpdate((event) => {
      const newX = clamp(gestureStartX.value + event.translationX, 0, trackWidthSV.value);
      const newProgress = trackWidthSV.value === 0 ? 0 : newX / trackWidthSV.value;
      progress.value = clamp(newProgress, 0, 1);

      const updatedValue = min + progress.value * range;
      if (onValueChange) {
        runOnJS(onValueChange)(updatedValue);
      }
    })
    .onEnd(() => {
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
    borderRadius: trackHeight / 2,
  }));

  const animatedKnobStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: progress.value * trackWidthSV.value - knobSize / 2,
      },
    ],
  }));

  return (
    <View style={[baseStyles.wrapper, { height: knobSize }]}>
      <View
        pointerEvents={disabled ? "none" : "auto"}
        style={[baseStyles.container, style]}
        accessibilityRole="adjustable"
        accessibilityValue={{
          min: 0,
          max: 100,
          now: Math.round(((currentValue - min) / (range || 1)) * 100),
          text: `${Math.round(((currentValue - min) / (range || 1)) * 100)}%`,
        }}>
        {/* Track */}
        <View
          onLayout={onTrackLayout}
          style={[baseStyles.track, { height: trackHeight, borderRadius: trackHeight / 2, backgroundColor: inactiveColor }]}
        />
        {/* Filled Track */}
        <Animated.View style={[baseStyles.filledTrack, animatedTrackFilledStyle]} />
        {/* Knob */}
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              baseStyles.knob,
              animatedKnobStyle,
              {
                width: knobSize,
                height: knobSize,
                borderRadius: knobSize / 2,
                backgroundColor: knobColor,
                top: -(knobSize - trackHeight) / 2,
              },
            ]}
          />
        </GestureDetector>
      </View>
    </View>
  );
};

export const Slider = React.memo(SliderComponent);
Slider.displayName = "Slider";
