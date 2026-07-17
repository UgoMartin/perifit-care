import React from "react";
import { StyleProp, ViewStyle } from "react-native";
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
export declare const ProgressBar: ({ animated, from, to, height, duration, color, trackColor, style }: ProgressBarProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map