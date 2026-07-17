import React from "react";
import { Text, TouchableOpacity, ImageSourcePropType } from "react-native";
import { ContentArticleThumbnail } from "../contentArticleThumbnail";
import { getStyles } from "./styles";
import UIConstants from "../../../../../../utils";
import { useTheme } from "../../../../../../themes/themeContext";

export type ContentArticleProps = {
  title: string;
  image: ImageSourcePropType;
  onPress?: () => void;
  showPremiumIcon?: boolean;
};

export const ContentArticle: React.FC<ContentArticleProps> = ({ title, image, onPress, showPremiumIcon = true }) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography);

  return (
    <TouchableOpacity
      activeOpacity={UIConstants.TOUCHABLE_ACTIVE_OPACITY}
      style={styles.container}
      onPress={onPress ?? (() => {})}>
      <ContentArticleThumbnail
        image={image}
        showPremiumIcon={showPremiumIcon}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
