import React from "react";
import { TextInput, TextInputProps } from "react-native";
export type TextAreaProps = {
    /** Field label displayed as placeholder and floating caption */
    label: string;
    /** Current text value */
    text: string;
    /** Optional error message – turns the outline red and shows message underneath */
    error?: string;
    /** Optional custom outline colour when not focused */
    borderColor?: string;
    /** Optional minimum height override */
    minHeight?: number;
} & TextInputProps;
/**
 * A multiline text area with floating label and error state support.
 */
export declare const TextArea: React.ForwardRefExoticComponent<{
    /** Field label displayed as placeholder and floating caption */
    label: string;
    /** Current text value */
    text: string;
    /** Optional error message – turns the outline red and shows message underneath */
    error?: string;
    /** Optional custom outline colour when not focused */
    borderColor?: string;
    /** Optional minimum height override */
    minHeight?: number;
} & TextInputProps & React.RefAttributes<TextInput>>;
//# sourceMappingURL=index.d.ts.map