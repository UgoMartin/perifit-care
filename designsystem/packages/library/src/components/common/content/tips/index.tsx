import React from "react";
import { ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../../themes";
import createStyles from "./styles";
import UIConstants from "../../../../utils";
import { CachedImage } from "../utils/cachedImage";

type TipsProps = {
  image: ImageSourcePropType;
  title: string;
  actionText: string;
  onPress: () => void;
};

export const TodayTips = ({ image, title, actionText, onPress }: TipsProps) => {
  const { themeColors, typography } = useTheme();
  const styles = createStyles(themeColors, typography);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <CachedImage
          source={image}
          style={styles.image}
        />
      </View>
      <TouchableOpacity
        activeOpacity={UIConstants.TOUCHABLE_ACTIVE_OPACITY}
        style={styles.contentContainer}
        onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.actionText}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
};
