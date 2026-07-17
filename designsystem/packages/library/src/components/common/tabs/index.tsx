import React, { useCallback, useEffect, useRef, useMemo } from "react";
import { LayoutChangeEvent, Pressable, View, ViewStyle, StyleProp, AccessibilityState, PressableProps } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle, interpolateColor, useAnimatedProps } from "react-native-reanimated";
import { useTheme } from "../../../themes/themeContext";
import { radius, spacing } from "../../../themes";
import { ThemeColors } from "../../../themes";
import { normalize } from "../../../utils";

export type TabItem = {
  /** Label displayed under the icon */
  label: string;
  /** Optional icon rendered to the left of the label */
  icon?: React.ReactNode;
  /** Optional accessibility label */
  tabBarAccessibilityLabel?: string;
  /** Optional testID */
  testID?: string;
  /** Optional key */
  key?: React.Key | null;
  /** Optional accessibility state */
  accessibilityState?: AccessibilityState | undefined;
} & PressableProps;

export type TabsProps = {
  /** Array describing the tabs */
  items: TabItem[];
  /** Index of the currently selected tab */
  selectedIndex: number;
  /** Callback fired when a tab is pressed */
  onChange: (index: number) => void;
  /** Optional style override for the container */
  style?: StyleProp<ViewStyle>;
  size?: "small" | "default";
};

// ----- Constants -----
const ANIMATION_DURATION = 250;

// ----- TabButton component (top-level) -----

type TabButtonProps = {
  item: TabItem;
  accessibilityState?: AccessibilityState | undefined;
  active: boolean;
  onPress: () => void;
  onLongPress: () => void;
  onLayout: (e: LayoutChangeEvent) => void;
  themeColors: ThemeColors;
  typography: ReturnType<typeof import("../../../themes/typography").getTypography>;
  size?: "small" | "default";
};

const TabButton = ({ item, active, onPress, onLongPress, onLayout, themeColors, typography, size = "default", ...restProps }: TabButtonProps) => {
  const activeShared = useSharedValue(active ? 1 : 0);

  // Animate on active state change
  useEffect(() => {
    activeShared.value = withTiming(active ? 1 : 0, { duration: ANIMATION_DURATION });
  }, [active, activeShared]);

  const animatedTextStyle = useAnimatedStyle(() => ({
    color: interpolateColor(activeShared.value, [0, 1], [themeColors.text.primary, themeColors.text.inversedChangeBlack]),
  }));

  // Prepare animated icon with hooks called unconditionally
  const iconElement = React.isValidElement(item.icon) ? (item.icon as React.ReactElement<any>) : null;
  const IconComponent = iconElement ? (iconElement.type as React.ComponentType<any>) : null;

  const AnimatedIconComponent = useMemo(() => {
    return IconComponent ? Animated.createAnimatedComponent(IconComponent) : null;
  }, [IconComponent]);

  const animatedIconProps = useAnimatedProps(() => ({
    color: interpolateColor(activeShared.value, [0, 1], [themeColors.icon.primary, themeColors.icon.inversedChangeBlack]),
  }));

  const renderedIcon =
    IconComponent && AnimatedIconComponent && iconElement ? (
      <AnimatedIconComponent
        {...iconElement.props}
        animatedProps={animatedIconProps}
        size={size === "small" ? normalize(16) : normalize(20)}
        style={{
          ...iconElement.props.style,
          width: size === "small" ? normalize(17) : normalize(21),
          height: size === "small" ? normalize(17) : normalize(21),
        }}
      />
    ) : (
      item.icon
    );

  return (
    <Pressable
      testID={item.testID}
      accessibilityRole="tab"
      accessibilityLabel={item.tabBarAccessibilityLabel}
      onPress={onPress}
      onLongPress={onLongPress}
      onLayout={onLayout}
      style={({ pressed }) => [
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: spacing.s,
          paddingVertical: spacing.xs,
          gap: spacing.xs2,
        },
        pressed ? { opacity: 0.8 } : null,
      ]}
      {...restProps}>
      {renderedIcon}
      <Animated.Text style={[size === "small" ? typography.caption : typography.body, animatedTextStyle]}>{item.label}</Animated.Text>
    </Pressable>
  );
};

/**
 * Horizontally aligned set of tabs with an animated pill-shaped highlight that
 * transitions smoothly when switching tabs. Built with react-native-reanimated
 * to achieve 60 fps animations.
 */
export const Tabs = ({ items, selectedIndex, onChange, style, size = "default" }: TabsProps) => {
  const { themeColors, typography } = useTheme();

  /**
   * We store the x position & width of every tab after their first layout so we
   * can move/resize the animated highlight later.
   */
  const measurements = useRef<{ x: number; width: number }[]>([]);

  const highlightX = useSharedValue(0);
  const highlightWidth = useSharedValue(0);

  // Initialise highlight once the selected tab has been measured
  const maybeInitHighlight = useCallback(
    (index: number) => {
      const m = measurements.current[index];
      if (!m) {
        return;
      }
      highlightX.value = m.x;
      highlightWidth.value = m.width;
    },
    [highlightX, highlightWidth],
  );

  // Update highlight whenever the selected index changes
  useEffect(() => {
    const m = measurements.current[selectedIndex];
    if (!m) {
      // not measured yet
      return;
    }
    highlightX.value = withTiming(m.x, { duration: ANIMATION_DURATION });
    highlightWidth.value = withTiming(m.width, { duration: ANIMATION_DURATION });
  }, [selectedIndex, highlightX, highlightWidth]);

  const onTabLayout = (index: number) => (e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout;
    measurements.current[index] = { x, width };
    if (index === selectedIndex) {
      maybeInitHighlight(index);
    }
  };

  const animatedHighlightStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: highlightX.value }],
    width: highlightWidth.value,
  }));

  return (
    <View style={[{ flexDirection: "row", alignItems: "center" }, style]}>
      {/* Animated highlight */}
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: "absolute",
            height: "100%",
            backgroundColor: themeColors.fill.dark,
            borderRadius: radius.xl,
          },
          animatedHighlightStyle,
        ]}
      />

      {items.map((item, index) => (
        <TabButton
          key={item.key || index}
          item={item}
          accessibilityState={item.accessibilityState}
          active={index === selectedIndex}
          onPress={() => onChange(index)}
          onLongPress={() => onChange(index)}
          onLayout={onTabLayout(index)}
          themeColors={themeColors}
          typography={typography}
          size={size}
        />
      ))}
    </View>
  );
};
