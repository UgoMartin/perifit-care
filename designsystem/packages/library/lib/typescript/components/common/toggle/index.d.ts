import React from "react";
import { PressableProps, StyleProp, ViewStyle } from "react-native";
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
export declare const Toggle: ({ value, onValueChange, disabled, knobSize, trackWidth, activeTrackColor, inactiveTrackColor, disabledTrackColor, knobColor, style, trackPadding, ...restProps }: ToggleProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map