import React from "react";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
export type HeroBannerProps = {
    sectionTitle: string;
    text: string;
    buttonText?: string;
    backgroundImage: ImageSourcePropType;
    badgeIcon?: ImageSourcePropType | null;
    onButtonPress?: () => void;
    style?: ViewStyle;
    backgroundImageStyle?: StyleProp<ViewStyle>;
};
export declare const HeroBanner: React.FC<HeroBannerProps>;
//# sourceMappingURL=index.d.ts.map