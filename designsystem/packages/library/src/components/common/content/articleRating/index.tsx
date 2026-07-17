import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getStyles } from "./styles";
import Images from "../../../../assets/images";
import { useTheme } from "../../../../themes";
import { CachedImage } from "../utils/cachedImage";

export enum FeedbackResult {
  None = "None",
  ThumbUp = "Like",
  ThumbDown = "Dislike",
}

interface ArticleRatingProps {
  title: string;
  feedbackResult: FeedbackResult;
  onRatingChange: (rating: FeedbackResult) => void;
}

export const ArticleRating: React.FC<ArticleRatingProps> = ({ title, feedbackResult, onRatingChange }) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography);
  const [selectedRating, setSelectedRating] = useState<FeedbackResult>(feedbackResult);

  const handleRatingChange = (tipUsefulState: FeedbackResult) => {
    if (selectedRating === tipUsefulState) {
      tipUsefulState = FeedbackResult.None;
    }
    setSelectedRating(tipUsefulState);
    onRatingChange(tipUsefulState);
  };

  return (
    <View style={styles.feedbackCard}>
      <Text style={styles.feedbackCardTitle}>{title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.feedbackBtnBg, selectedRating === FeedbackResult.ThumbUp && styles.feedbackBtnSelected]}
          onPress={() => handleRatingChange(FeedbackResult.ThumbUp)}>
          <CachedImage
            source={Images.thumbUp}
            style={styles.feedbackIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.feedbackBtnBg, selectedRating === FeedbackResult.ThumbDown && styles.feedbackBtnSelected]}
          onPress={() => handleRatingChange(FeedbackResult.ThumbDown)}>
          <CachedImage
            source={Images.thumbDown}
            style={styles.feedbackIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
