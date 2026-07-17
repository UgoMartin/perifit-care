import React from "react";
import { View, Text, Image, StyleProp, ViewStyle, TextStyle, ImageSourcePropType } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { getStyles } from "./styles";
import { spacing } from "../../../themes";

export type BadgeVariant = "light" | "dark";

export type BadgeProps = {
  /** Text displayed inside the badge */
  title: string;
  /** Optional icon displayed to the left of the text. It can be either an image source or a React element (e.g. from react-native-vector-icons). */
  icon?: ImageSourcePropType | React.ReactElement;
  /** Visual style of the badge */
  variant?: BadgeVariant;
  /** Optional style overrides for the outer container */
  containerStyle?: StyleProp<ViewStyle>;
  /** Optional style overrides for the text */
  textStyle?: StyleProp<TextStyle>;
  /** Size of the badge */
  size?: "small" | "default";
  /** When false (default), the icon uses original color. Set to true to use the computed tint color. */
  tintIcon?: boolean;
};

/**
 * Non-interactive label used to highlight short pieces of information.
 * It supports a light (primary) and dark (inversed) color scheme.
 */
export const Badge = ({ title, icon, variant = "light", containerStyle, textStyle, size = "default", tintIcon = false }: BadgeProps) => {
  const { themeColors, typography } = useTheme();
  const baseStyles = getStyles(themeColors, typography);

  const { background, text, iconTint } = React.useMemo(() => {
    switch (variant) {
      case "dark":
        return {
          background: themeColors.fill.dark,
          text: themeColors.text.inversedChangeBlack,
          iconTint: themeColors.icon.inversedChangeBlack,
        } as const;
      case "light":
      default:
        return {
          background: themeColors.fill.primary,
          text: themeColors.text.primary,
          iconTint: themeColors.icon.primary,
        } as const;
    }
  }, [variant, themeColors]);

  return (
    <View
      style={[
        baseStyles.container,
        {
          backgroundColor: background,
          paddingVertical: size === "small" ? spacing.xs3 : spacing.xs2,
        },
        containerStyle,
      ]}>
      {icon &&
        (React.isValidElement(icon) ? (
          React.cloneElement(
            icon as React.ReactElement,
            {
              style: [baseStyles.icon, (icon as React.ReactElement<any>).props?.style],
              ...(tintIcon ? { color: iconTint } : {}),
            } as any,
          )
        ) : (
          <Image
            source={icon as ImageSourcePropType}
            resizeMode="contain"
            style={[baseStyles.icon, !tintIcon ? undefined : { tintColor: iconTint }]}
          />
        ))}
      <Text style={[baseStyles.text, { color: text }, textStyle]}>{title}</Text>
    </View>
  );
};
