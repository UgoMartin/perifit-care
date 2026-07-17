import React from "react";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
export type InfosProps = {
    badge?: string;
    title?: string;
    body?: string;
    containerStyle?: StyleProp<ViewStyle>;
    emoji?: ImageSourcePropType;
    arrow?: boolean;
    link?: string;
    onLinkPress?: () => void;
};
export declare const Infos: ({ badge, title, body, containerStyle, emoji, arrow, link, onLinkPress }: InfosProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map