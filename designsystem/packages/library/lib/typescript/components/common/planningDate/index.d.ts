import React from "react";
import { StyleProp, ViewStyle, TextStyle, PressableProps } from "react-native";
/**
 * Visual state variants supported by the PlanningDate component.
 */
export type PlanningDateVariant = "empty" | "emptyMarked" | "filled" | "filledMarked" | "disabled" | "emptyDashed";
export type PlanningDateProps = {
    /** One or two-letter label that represents the day (eg. "M", "Tu") */
    label: string;
    /** Visual state variant – defaults to "empty" */
    variant?: PlanningDateVariant;
    /** Dimension of the square in pixels – defaults to 56 */
    size?: number;
    /** Callback fired when the element is pressed. Automatically disabled for the "disabled" variant. */
    onPress?: () => void;
    /** Additional style overrides for the outer container */
    style?: StyleProp<ViewStyle>;
    /** Additional style overrides for the label */
    labelStyle?: StyleProp<TextStyle>;
} & PressableProps;
/**
 * Small rounded square used to display a calendar day inside the weekly planning
 * component.  It supports six visual variants as per the design spec:
 *  - Past day without completed        → "past"
 *  - Past day with completed           → "pastCompleted"
 *  - Today without completed           → "today"
 *  - Today with completed              → "todayCompleted"
 *  - Disabled date                     → "disabled"
 *  - Future date                       → "future"
 */
export declare const PlanningDate: ({ label, variant, size, onPress, style, labelStyle, ...restProps }: PlanningDateProps) => React.JSX.Element;
export default PlanningDate;
//# sourceMappingURL=index.d.ts.map