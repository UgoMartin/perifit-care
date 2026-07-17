import React from "react";
import { StyleProp, ViewStyle } from "react-native";
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
export declare const Slider: React.MemoExoticComponent<({ min, max, initialValue, value, onValueChange, onSlidingComplete, step, trackHeight, knobSize, activeTrackColor, inactiveTrackColor, knobColor, disabled, style, }: SliderProps) => React.JSX.Element>;
//# sourceMappingURL=index.d.ts.map