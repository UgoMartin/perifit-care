import React from "react";
import { GestureResponderEvent } from "react-native";
export type SelectFieldProps = {
    /** Field label displayed as placeholder and floating caption */
    label: string;
    /** Currently selected value */
    value?: string;
    /** Optional error message – turns the outline red and shows message underneath */
    error?: string;
    /** Optional custom outline colour when not focused */
    borderColor?: string;
    /** Whether this SelectField is editable (disabled when false) */
    editable?: boolean;
    /** Callback when user presses the field */
    onPress?: (event: GestureResponderEvent) => void;
};
/**
 * An input-like component that mimics a Material dropdown/select field with floating label and error state support.
 */
export declare const SelectField: (props: SelectFieldProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map