"use strict";

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getStyles } from "./styles";
import Images from "../../../../assets/images";
import { useTheme } from "../../../../themes";
import { CachedImage } from "../utils/cachedImage";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export let FeedbackResult = /*#__PURE__*/function (FeedbackResult) {
  FeedbackResult["None"] = "None";
  FeedbackResult["ThumbUp"] = "Like";
  FeedbackResult["ThumbDown"] = "Dislike";
  return FeedbackResult;
}({});
export const ArticleRating = ({
  title,
  feedbackResult,
  onRatingChange
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = getStyles(themeColors, typography);
  const [selectedRating, setSelectedRating] = useState(feedbackResult);
  const handleRatingChange = tipUsefulState => {
    if (selectedRating === tipUsefulState) {
      tipUsefulState = FeedbackResult.None;
    }
    setSelectedRating(tipUsefulState);
    onRatingChange(tipUsefulState);
  };
  return /*#__PURE__*/_jsxs(View, {
    style: styles.feedbackCard,
    children: [/*#__PURE__*/_jsx(Text, {
      style: styles.feedbackCardTitle,
      children: title
    }), /*#__PURE__*/_jsxs(View, {
      style: styles.buttonContainer,
      children: [/*#__PURE__*/_jsx(TouchableOpacity, {
        style: [styles.feedbackBtnBg, selectedRating === FeedbackResult.ThumbUp && styles.feedbackBtnSelected],
        onPress: () => handleRatingChange(FeedbackResult.ThumbUp),
        children: /*#__PURE__*/_jsx(CachedImage, {
          source: Images.thumbUp,
          style: styles.feedbackIcon
        })
      }), /*#__PURE__*/_jsx(TouchableOpacity, {
        style: [styles.feedbackBtnBg, selectedRating === FeedbackResult.ThumbDown && styles.feedbackBtnSelected],
        onPress: () => handleRatingChange(FeedbackResult.ThumbDown),
        children: /*#__PURE__*/_jsx(CachedImage, {
          source: Images.thumbDown,
          style: styles.feedbackIcon
        })
      })]
    })]
  });
};
//# sourceMappingURL=index.js.map