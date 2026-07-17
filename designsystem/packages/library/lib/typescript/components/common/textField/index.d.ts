import React from "react";
import { TextInput, TextInputProps } from "react-native";
export type TextFieldProps = {
    /** Field label displayed as placeholder and floating caption */
    label: string;
    /** Current text value */
    text: string;
    /** Optional error message – turns the outline red and shows message underneath */
    error?: string;
    /** Whether to show the error message */
    showErrorMessage?: boolean;
    /** Optional custom outline colour when not focused */
    borderColor?: string;
    /** Whether to add a show/hide password toggle */
    showHidePassword?: boolean;
    /** Avoid iOS inputAccessoryView flicker when secureTextEntry switches */
    fixInputAccessoryFlicker?: boolean;
} & TextInputProps;
/**
 * A Material-like text field with floating label and error state support.
 */
export declare const TextField: React.ForwardRefExoticComponent<{
    /** Field label displayed as placeholder and floating caption */
    label: string;
    /** Current text value */
    text: string;
    /** Optional error message – turns the outline red and shows message underneath */
    error?: string;
    /** Whether to show the error message */
    showErrorMessage?: boolean;
    /** Optional custom outline colour when not focused */
    borderColor?: string;
    /** Whether to add a show/hide password toggle */
    showHidePassword?: boolean;
    /** Avoid iOS inputAccessoryView flicker when secureTextEntry switches */
    fixInputAccessoryFlicker?: boolean;
} & TextInputProps & React.RefAttributes<TextInput>>;
//# sourceMappingURL=index.d.ts.map