import React from "react";
import FastImage, { type ImageStyle as FastImageStyle, type Source as FastImageSource } from "@d11/react-native-fast-image";
import { Image, ImageResizeMode, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

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

const resolveFastResizeMode = (resizeMode?: ImageResizeMode) => {
  switch (resizeMode) {
    case "contain":
      return FastImage.resizeMode.contain;
    case "stretch":
      return FastImage.resizeMode.stretch;
    case "center":
      return FastImage.resizeMode.center;
    default:
      return FastImage.resizeMode.cover;
  }
};

const resolveFastImageSource = (source: ImageSourcePropType): FastImageSource | number | null => {
  if (typeof source === "number") {
    return source;
  }

  if (!source || Array.isArray(source)) {
    return null;
  }

  const sourceWithUri = source as { uri?: string; headers?: Record<string, string> };
  if (!sourceWithUri.uri) {
    return null;
  }

  return {
    uri: sourceWithUri.uri,
    headers: sourceWithUri.headers,
    cache: FastImage.cacheControl.immutable,
  };
};

export const CachedImage: React.FC<CachedImageProps> = ({ source, style, resizeMode = "cover" }) => {
  const fastImageSource = resolveFastImageSource(source);
  if (!fastImageSource) {
    return (
      <Image
        source={source}
        style={style}
        resizeMode={resizeMode}
      />
    );
  }

  return (
    <FastImage
      source={fastImageSource}
      style={style as StyleProp<FastImageStyle>}
      resizeMode={resolveFastResizeMode(resizeMode)}
    />
  );
};

export const CachedImageBackground: React.FC<CachedImageBackgroundProps> = ({ source, style, imageStyle, resizeMode = "cover", children }) => {
  return (
    <View style={style}>
      <CachedImage
        source={source}
        resizeMode={resizeMode}
        style={[StyleSheet.absoluteFill, imageStyle]}
      />
      {children}
    </View>
  );
};
