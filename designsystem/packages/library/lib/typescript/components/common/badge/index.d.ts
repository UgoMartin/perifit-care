import React from "react";
import { StyleProp, ViewStyle, TextStyle, ImageSourcePropType } from "react-native";
export type BadgeVariant = "light" | "dark";
export type BadgeProps = {
    /** Text displayed inside the badge */
    title: string;
    /** Optional icon displayed to the left of the text. It can be either an image source or a React element (e.g. from react-native-vector-icons). */
    icon?: ImageSourcePropType | React.ReactElement;
    /** Visual style of the badge */
    variant?: BadgeVariant;
    /** Optional style overrides for the outer container */
    containerStyle?: StyleProp<ViewStyle>;
    /** Optional style overrides for the text */
    textStyle?: StyleProp<TextStyle>;
    /** Size of the badge */
    size?: "small" | "default";
    /** When false (default), the icon uses original color. Set to true to use the computed tint color. */
    tintIcon?: boolean;
};
/**
 * Non-interactive label used to highlight short pieces of information.
 * It supports a light (primary) and dark (inversed) color scheme.
 */
export declare const Badge: ({ title, icon, variant, containerStyle, textStyle, size, tintIcon }: BadgeProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map