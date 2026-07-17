import React from "react";
import { ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "../../../../../../themes/themeContext";
import { getStyles } from "./styles";
import UIConstants from "../../../../../../utils";
import Images from "../../../../../../assets/images";
import { decode } from "html-entities";
import { CachedImage, CachedImageBackground } from "../../../utils/cachedImage";

export type PopularArticleThumbnailProps = {
  tag: string;
  title: string;
  image: ImageSourcePropType;
  onPress?: () => void;
  showPremiumIcon?: boolean;
};

export const PopularArticleThumbnail: React.FC<PopularArticleThumbnailProps> = ({ tag, title, image, onPress, showPremiumIcon = true }) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography);

  return (
    <TouchableOpacity
      activeOpacity={UIConstants.TOUCHABLE_ACTIVE_OPACITY}
      style={styles.card}
      onPress={onPress ?? (() => {})}>
      <CachedImageBackground
        source={image}
        style={styles.cardImage}
        imageStyle={styles.cardImageBorder}>
        {showPremiumIcon && (
          <View style={styles.premiumIconContainer}>
            <CachedImage
              source={Images.contentTab.premiumIcon}
              style={styles.premiumIcon}
              resizeMode="contain"
            />
          </View>
        )}
        <LinearGradient
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.3)"]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.tag}>{tag}</Text>
          <Text style={styles.title}>{decode(title)}</Text>
        </View>
      </CachedImageBackground>
    </TouchableOpacity>
  );
};
