import React from "react";
import { ImageSourcePropType, ViewStyle } from "react-native";
export type CategoryThumbnailProps = {
    title: string;
    image: ImageSourcePropType;
    badgeIcon?: ImageSourcePropType | null;
    onPress?: () => void;
    width: number;
    height: number;
    style?: ViewStyle;
};
export declare const CategoryThumbnail: React.FC<CategoryThumbnailProps>;
//# sourceMappingURL=index.d.ts.map