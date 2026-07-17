import React from "react";
import { ImageSourcePropType, StyleProp, Text, View, ViewStyle } from "react-native";
import { getStyles } from "./styles";
import { gap, useTheme } from "../../../../themes";
import { Button } from "../../button";
import { CachedImage, CachedImageBackground } from "../utils/cachedImage";

export type HeroBannerProps = {
  sectionTitle: string;
  text: string;
  buttonText?: string;
  backgroundImage: ImageSourcePropType;
  badgeIcon?: ImageSourcePropType | null;
  onButtonPress?: () => void;
  style?: ViewStyle;
  backgroundImageStyle?: StyleProp<ViewStyle>;
};

export const HeroBanner: React.FC<HeroBannerProps> = ({
  sectionTitle,
  text,
  buttonText,
  backgroundImage,
  badgeIcon,
  onButtonPress,
  style,
  backgroundImageStyle,
}) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography);

  return (
    <View style={[{ gap: gap.xmd }, style]}>
      <Text style={typography.h4}>{sectionTitle}</Text>
      <CachedImageBackground
        source={backgroundImage}
        style={[styles.heroImage, backgroundImageStyle]}>
        {badgeIcon && (
          <View style={styles.badgeIconContainer}>
            <CachedImage
              source={badgeIcon}
              style={styles.badgeIcon}
            />
          </View>
        )}
        <View style={styles.contentContainer}>
          <Text style={styles.heroText}>{text}</Text>
          {!!buttonText && (
            <View style={{ alignSelf: "flex-start" }}>
              <Button
                title={buttonText}
                onPress={onButtonPress ?? (() => {})}
                variant="primary"
                size="small"
              />
            </View>
          )}
        </View>
      </CachedImageBackground>
    </View>
  );
};
