import React from "react";
import { ViewStyle, TextStyle, GestureResponderEvent, StyleProp, PressableProps } from "react-native";
export type ButtonVariant = "primary" | "secondary" | "inversed" | "link";
export type ButtonSize = "big" | "small";
export type ButtonProps = {
    /** Text to show inside the Button */
    title: string;
    /** Additional style overrides for the title */
    titleStyle?: StyleProp<TextStyle> | undefined;
    /** Callback fired when the Button is pressed */
    onPress: (event: GestureResponderEvent) => void;
    /** Visual style of the Button */
    variant?: ButtonVariant;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Size variation: 'big' has larger vertical padding */
    size?: ButtonSize;
    /** Additional style overrides for the container */
    style?: StyleProp<ViewStyle>;
    /** Whether the button is loading */
    isLoading?: boolean;
    /** Icon to show on the left of the button */
    icon?: React.ReactNode;
} & PressableProps;
export declare const Button: ({ title, onPress, variant, size, disabled, style, isLoading, titleStyle, icon, ...restProps }: ButtonProps) => React.JSX.Element;
export type IconButtonProps = Omit<ButtonProps, "title"> & {
    icon: React.ReactNode;
    size?: "big" | "small" | "verySmall";
};
export declare const IconButton: ({ icon, onPress, variant, size, disabled, style, isLoading, ...restProps }: IconButtonProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map