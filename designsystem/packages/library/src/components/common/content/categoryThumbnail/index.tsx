import React from "react";
import { ImageSourcePropType, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { brandToken } from "../../../../themes/brandToken";
import { useTheme } from "../../../../themes/themeContext";
import { getStyles } from "./styles";
import UIConstants, { hexWithAlpha } from "../../../../utils";
import { decode } from "html-entities";
import { CachedImage, CachedImageBackground } from "../utils/cachedImage";

export type CategoryThumbnailProps = {
  title: string;
  image: ImageSourcePropType;
  badgeIcon?: ImageSourcePropType | null;
  onPress?: () => void;
  width: number;
  height: number;
  style?: ViewStyle;
};

export const CategoryThumbnail: React.FC<CategoryThumbnailProps> = ({ title, image, badgeIcon, onPress, width, height, style }) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography, width, height);

  return (
    <TouchableOpacity
      activeOpacity={UIConstants.TOUCHABLE_ACTIVE_OPACITY}
      style={[styles.card, style]}
      onPress={onPress ?? (() => {})}>
      <CachedImageBackground
        source={image}
        style={styles.cardImage}>
        {badgeIcon && (
          <View style={styles.badgeIconContainer}>
            <CachedImage
              source={badgeIcon}
              style={styles.badgeIcon}
            />
          </View>
        )}
        <LinearGradient
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.7, 1]}
          colors={[hexWithAlpha(brandToken.brand2["900"], 0), hexWithAlpha(brandToken.brand2["900"], 0.7)]}
        />
        <Text style={styles.cardTitle}>{decode(title)}</Text>
      </CachedImageBackground>
    </TouchableOpacity>
  );
};
