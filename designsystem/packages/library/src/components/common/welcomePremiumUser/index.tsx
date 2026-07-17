import React from "react";
import { View, Text, Image, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { getStyles } from "./styles";
import { Button } from "../button";
import Images from "../../../assets/images";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type WelcomePremiumUserProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonPress: () => void;
  fullScreen?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export const WelcomePremiumUser = ({ title, description, buttonText, onButtonPress, fullScreen = true, containerStyle }: WelcomePremiumUserProps) => {
  const { themeColors, typography } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = getStyles(themeColors, typography, insets);

  return (
    <View style={[styles.container, fullScreen && styles.fullScreenContainer, containerStyle]}>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={Images.contentTab.premiumLargeIcon}
            style={styles.icon}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {!!buttonText && (
        <Button
          title={buttonText}
          onPress={onButtonPress}
          variant="inversed"
          size="big"
          titleStyle={styles.textButton}
        />
      )}
    </View>
  );
};
