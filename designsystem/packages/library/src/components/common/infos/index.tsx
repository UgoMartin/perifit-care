import React from "react";
import { Image, ImageSourcePropType, Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { getStyles } from "./styles";
import Images from "../../../assets/images";

export type InfosProps = {
  badge?: string;
  title?: string;
  body?: string;
  containerStyle?: StyleProp<ViewStyle>;
  // new props
  emoji?: ImageSourcePropType;
  arrow?: boolean;
  link?: string;
  onLinkPress?: () => void;
};

export const Infos = ({ badge, title, body, containerStyle, emoji, arrow, link, onLinkPress }: InfosProps) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography);
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Emoji */}
      {emoji && (
        <View style={styles.emojiContainer}>
          <Image
            source={emoji}
            style={styles.emoji}
          />
        </View>
      )}
      {/* Main content */}
      <View style={styles.mainContent}>
        {badge && (
          <View style={styles.badgeBg}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        {title && <Text style={typography.subtitle}>{title}</Text>}
        {body && <Text style={typography.body}>{body}</Text>}
        {link && (
          <Pressable onPress={onLinkPress}>
            <Text style={styles.linkText}>{link}</Text>
          </Pressable>
        )}
      </View>
      {/* Arrow */}
      {arrow && (
        <Image
          source={Images.arrowNextIcon}
          style={styles.arrow}
        />
      )}
    </View>
  );
};
