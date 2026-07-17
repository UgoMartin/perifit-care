"use strict";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, Image as ReactNativeImage, useWindowDimensions } from "react-native";
import HTMLView from "react-native-htmlview";
import { spacing, useTheme } from "../../../../themes";
import { ArticleRating } from "../articleRating";
import Images from "../../../../assets/images";
import { getStyles } from "./styles";
import { decode } from "html-entities";
import { CachedImage } from "../utils/cachedImage";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const getScaledSize = (width, height, maxWidth) => {
  if (width <= maxWidth) {
    return {
      width,
      height
    };
  }
  const ratio = maxWidth / width;
  return {
    width: maxWidth,
    height: height * ratio
  };
};
const resolveImageSize = ({
  maxWidth,
  width,
  height,
  naturalWidth,
  naturalHeight
}) => {
  if (width && height) {
    return getScaledSize(width, height, maxWidth);
  }
  if (!naturalWidth || !naturalHeight) {
    return null;
  }
  if (width) {
    return getScaledSize(width, naturalHeight * width / naturalWidth, maxWidth);
  }
  if (height) {
    return getScaledSize(naturalWidth * height / naturalHeight, height, maxWidth);
  }
  return getScaledSize(naturalWidth, naturalHeight, maxWidth);
};
const parseDimension = value => {
  if (!value) {
    return undefined;
  }
  const parsed = Number.parseInt(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
};
const HtmlImage = ({
  uri,
  maxWidth,
  width,
  height
}) => {
  const [size, setSize] = useState(() => resolveImageSize({
    maxWidth,
    width,
    height
  }));
  useEffect(() => {
    let isCancelled = false;
    const setResolvedSize = (naturalWidth, naturalHeight) => {
      if (isCancelled) {
        return;
      }
      setSize(resolveImageSize({
        maxWidth,
        width,
        height,
        naturalWidth,
        naturalHeight
      }));
    };
    if (width && height) {
      setResolvedSize();
      return () => {
        isCancelled = true;
      };
    }
    ReactNativeImage.getSize(uri, (naturalWidth, naturalHeight) => {
      setResolvedSize(naturalWidth, naturalHeight);
    }, () => {
      setResolvedSize();
    });
    return () => {
      isCancelled = true;
    };
  }, [height, maxWidth, uri, width]);
  if (!size) {
    return null;
  }
  return /*#__PURE__*/_jsx(CachedImage, {
    source: {
      uri
    },
    resizeMode: "contain",
    style: {
      width: size.width,
      height: size.height,
      marginVertical: spacing.xs
    }
  });
};
export const ContentArticleBody = ({
  title,
  htmlContent,
  isScrollLocked,
  bottomPadding,
  feedbackResult,
  ratingTitle,
  onRatingChange,
  showPremiumIcon = false
}) => {
  const {
    typography,
    themeColors
  } = useTheme();
  const styles = getStyles(themeColors);
  const {
    width
  } = useWindowDimensions();
  const sanitizedHtmlContent = useMemo(() => htmlContent?.replace(/\n/g, ""), [htmlContent]);
  const contentWidth = width - spacing.md * 2;
  const renderNode = useCallback((node, index) => {
    if (node.name !== "img" || !node.attribs?.src) {
      return undefined;
    }
    return /*#__PURE__*/_jsx(HtmlImage, {
      uri: node.attribs.src,
      maxWidth: contentWidth,
      width: parseDimension(node.attribs.width) ?? parseDimension(node.attribs["data-width"]),
      height: parseDimension(node.attribs.height) ?? parseDimension(node.attribs["data-height"])
    }, index);
  }, [contentWidth]);
  const stylesheet = useMemo(() => ({
    p: {
      ...typography.body
    },
    h1: {
      ...typography.h3
    },
    h2: {
      ...typography.h4
    },
    h3: {
      ...typography.h5
    },
    h4: {
      ...typography.subtitle
    },
    h5: {
      ...typography.subtitle
    },
    ul: {
      ...typography.body,
      marginBottom: spacing.s
    },
    ol: {
      ...typography.body
    },
    li: {
      ...typography.body
    }
  }), [typography]);
  return /*#__PURE__*/_jsx(View, {
    style: styles.container,
    children: /*#__PURE__*/_jsxs(ScrollView, {
      showsVerticalScrollIndicator: false,
      contentContainerStyle: [styles.contentContainer, {
        paddingBottom: bottomPadding
      }],
      scrollEnabled: !isScrollLocked,
      children: [showPremiumIcon && /*#__PURE__*/_jsx(View, {
        style: styles.iconContainer,
        children: /*#__PURE__*/_jsx(CachedImage, {
          source: Images.contentTab.premiumIcon,
          style: styles.icon
        })
      }), /*#__PURE__*/_jsx(Text, {
        style: typography.h1,
        children: decode(title)
      }), !!sanitizedHtmlContent && /*#__PURE__*/_jsx(HTMLView, {
        value: sanitizedHtmlContent,
        paragraphBreak: "",
        renderNode: renderNode,
        stylesheet: stylesheet
      }), /*#__PURE__*/_jsx(ArticleRating, {
        title: ratingTitle ?? "",
        feedbackResult: feedbackResult,
        onRatingChange: onRatingChange
      })]
    })
  });
};
//# sourceMappingURL=index.js.map