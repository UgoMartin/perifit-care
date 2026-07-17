import React from "react";
import { ImageSourcePropType, View } from "react-native";
import { useTheme } from "../../../../../../themes/themeContext";
import { getStyles } from "./styles";
import Images from "../../../../../../assets/images";
import { CachedImage, CachedImageBackground } from "../../../utils/cachedImage";

export type ContentArticleThumbnailProps = {
  image: ImageSourcePropType;
  showPremiumIcon?: boolean;
};

export const ContentArticleThumbnail: React.FC<ContentArticleThumbnailProps> = ({ image, showPremiumIcon = true }) => {
  const { themeColors } = useTheme();
  const styles = getStyles(themeColors);

  return (
    <CachedImageBackground
      source={image}
      style={styles.thumbnail}
      imageStyle={styles.thumbnailBorder}>
      {showPremiumIcon && (
        <View style={styles.premiumIconContainer}>
          <CachedImage
            source={Images.contentTab.premiumIcon}
            style={styles.premiumIcon}
            resizeMode="contain"
          />
        </View>
      )}
    </CachedImageBackground>
  );
};
