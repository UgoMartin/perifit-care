import React from "react";
import { StyleProp, ViewStyle, GestureResponderEvent } from "react-native";
export type ToastProps = {
    /** Main title text */
    title: string;
    /** Optional secondary description */
    description?: string;
    /** Label for the optional action button */
    actionLabel?: string;
    /** Fired when the action button is pressed */
    onActionPress?: (event: GestureResponderEvent) => void;
    /** Fired when the close icon is pressed */
    onClose?: (event: GestureResponderEvent) => void;
    /** Disable all interactions */
    disabled?: boolean;
    /** Additional style overrides for the container */
    style?: StyleProp<ViewStyle>;
};
/**
 * Toast – temporary alert banner with an optional action button.
 */
export declare const Toast: ({ title, description, actionLabel, onActionPress, onClose, disabled, style }: ToastProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map