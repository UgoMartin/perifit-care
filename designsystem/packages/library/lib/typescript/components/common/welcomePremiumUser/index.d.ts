import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export type WelcomePremiumUserProps = {
    title: string;
    description: string;
    buttonText: string;
    onButtonPress: () => void;
    fullScreen?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
};
export declare const WelcomePremiumUser: ({ title, description, buttonText, onButtonPress, fullScreen, containerStyle }: WelcomePremiumUserProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map