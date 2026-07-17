import React from "react";
import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from "react-native";
type ConfirmationProps = {
    title: string;
    caption: string;
    type?: "success" | "error";
    containerStyle?: ViewStyle;
    titleStyle?: StyleProp<TextStyle>;
    captionStyle?: StyleProp<TextStyle>;
    icon?: ImageSourcePropType | React.ReactElement;
};
export declare const Confirmation: ({ title, caption, type, containerStyle, titleStyle, captionStyle, icon }: ConfirmationProps) => React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map