import React, { useCallback } from "react";
import { Image, ImageSourcePropType, StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import Images from "../../../assets/images";
import { useTheme } from "../../../themes/themeContext";
import { styles } from "./styles";

type ConfirmationProps = {
  title: string;
  caption: string;
  type?: "success" | "error";
  containerStyle?: ViewStyle;
  titleStyle?: StyleProp<TextStyle>;
  captionStyle?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType | React.ReactElement;
};

export const Confirmation = ({ title, caption, type = "success", containerStyle, titleStyle, captionStyle, icon }: ConfirmationProps) => {
  const { themeColors, typography } = useTheme();
  const textColor = type === "success" ? themeColors.text.success : themeColors.text.error;
  const bgColor = type === "success" ? themeColors.fill.successLight : themeColors.fill.errorLight;
  const iconColor = type === "success" ? themeColors.icon.success : themeColors.icon.error;
  const defaultIcon = type === "success" ? Images.checkIcon : Images.closeCircleIcon;

  const renderIcon = useCallback(() => {
    if (React.isValidElement(icon)) {
      return icon;
    }
    return (
      <Image
        style={[styles.checkIcon, { tintColor: iconColor }]}
        source={icon ?? defaultIcon}
      />
    );
  }, [defaultIcon, icon, iconColor]);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }, containerStyle]}>
      {renderIcon()}
      <View style={{ flexShrink: 1 }}>
        <Text style={[typography.subtitle, { color: textColor }, titleStyle]}>{title}</Text>
        <Text style={[typography.caption, { color: textColor }, captionStyle]}>{caption}</Text>
      </View>
    </View>
  );
};
