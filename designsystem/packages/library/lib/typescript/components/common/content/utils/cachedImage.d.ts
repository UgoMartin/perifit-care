import React from "react";
import { ImageResizeMode, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from "react-native";
type CachedImageProps = {
    source: ImageSourcePropType;
    style?: StyleProp<ImageStyle>;
    resizeMode?: ImageResizeMode;
};
type CachedImageBackgroundProps = {
    source: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    resizeMode?: ImageResizeMode;
    children?: React.ReactNode;
};
export declare const CachedImage: React.FC<CachedImageProps>;
export declare const CachedImageBackground: React.FC<CachedImageBackgroundProps>;
export {};
//# sourceMappingURL=cachedImage.d.ts.map