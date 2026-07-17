"use strict";

import React from "react";
import FastImage from "@d11/react-native-fast-image";
import { Image, StyleSheet, View } from "react-native";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const resolveFastResizeMode = resizeMode => {
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
const resolveFastImageSource = source => {
  if (typeof source === "number") {
    return source;
  }
  if (!source || Array.isArray(source)) {
    return null;
  }
  const sourceWithUri = source;
  if (!sourceWithUri.uri) {
    return null;
  }
  return {
    uri: sourceWithUri.uri,
    headers: sourceWithUri.headers,
    cache: FastImage.cacheControl.immutable
  };
};
export const CachedImage = ({
  source,
  style,
  resizeMode = "cover"
}) => {
  const fastImageSource = resolveFastImageSource(source);
  if (!fastImageSource) {
    return /*#__PURE__*/_jsx(Image, {
      source: source,
      style: style,
      resizeMode: resizeMode
    });
  }
  return /*#__PURE__*/_jsx(FastImage, {
    source: fastImageSource,
    style: style,
    resizeMode: resolveFastResizeMode(resizeMode)
  });
};
export const CachedImageBackground = ({
  source,
  style,
  imageStyle,
  resizeMode = "cover",
  children
}) => {
  return /*#__PURE__*/_jsxs(View, {
    style: style,
    children: [/*#__PURE__*/_jsx(CachedImage, {
      source: source,
      resizeMode: resizeMode,
      style: [StyleSheet.absoluteFill, imageStyle]
    }), children]
  });
};
//# sourceMappingURL=cachedImage.js.map