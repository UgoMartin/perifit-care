import React from "react";
import {
  Image,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  ImageSourcePropType,
  PressableProps,
  ImageStyle,
} from "react-native";
import { useTheme } from "../../../themes/themeContext";
import Images from "../../../assets/images";
import UIConstants, { normalize } from "../../../utils";
import { styles } from "./styles";

export type ListItemProps = {
  /** Main title text */
  title: string;
  /** Secondary description text */
  description?: string;
  /** Optional style overrides for the title text */
  titleStyle?: StyleProp<TextStyle>;
  /** Highlighted value text (uses active colour) */
  activeValue?: string;
  /** Optional custom icon (defaults to info icon)  */
  icon?: ImageSourcePropType;
  /** Called when the item is pressed */
  onPress?: (event: GestureResponderEvent) => void;
  /** Whether the item is currently selected */
  selected?: boolean;
  /** Disable all interactions */
  disabled?: boolean;
  /** Additional style overrides for the container */
  style?: StyleProp<ViewStyle>;
  /** Optional custom icon displayed on the right side (defaults to arrow icon) */
  rightIcon?: ImageSourcePropType | React.ReactElement | null;
  /** Optional style overrides for the right icon */
  rightIconStyle?: StyleProp<ImageStyle>;
  /** Displays a small red dot indicator to the left of the right icon */
  showAlertDot?: boolean;
  /** Optional style overrides for the description text */
  descriptionStyle?: StyleProp<TextStyle>;
} & PressableProps;

/**
 * Simple selectable row with leading icon, title/description and trailing arrow.
 */
export const ListItem = ({
  title,
  description,
  titleStyle,
  activeValue,
  icon,
  onPress,
  selected = false,
  disabled = false,
  style,
  descriptionStyle,
  rightIcon,
  rightIconStyle,
  showAlertDot = false,
  ...restProps
}: ListItemProps) => {
  const { themeColors, typography } = useTheme();

  // Build container style depending on selected / disabled state
  const containerStyle = React.useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        ...styles.container,
        backgroundColor: selected ? themeColors.fill.selected : themeColors.fill.primary,
        borderWidth: 1,
        borderColor: selected ? themeColors.border.selected : themeColors.fill.primary,
        opacity: disabled ? 0.6 : 1,
      },
      style || null,
    ],
    [disabled, selected, style, themeColors],
  );

  const renderIcon = () => {
    if (!icon) {
      return null;
    }
    if (React.isValidElement(icon)) {
      return icon;
    }
    // Fallback to default info icon when no custom icon provided
    return (
      <Image
        source={(icon as ImageSourcePropType) ?? Images.infoIcon}
        style={{ width: normalize(20), height: normalize(20), resizeMode: "contain" }}
      />
    );
  };

  const renderRightIcon = () => {
    if (rightIcon === null) {
      return null;
    }
    if (rightIcon === undefined) {
      return (
        <Image
          source={Images.arrowNextIcon}
          style={[styles.defaultRightIcon, { tintColor: themeColors.icon.primary }]}
        />
      );
    }
    if (React.isValidElement(rightIcon)) {
      return rightIcon;
    }
    return (
      <Image
        source={rightIcon as ImageSourcePropType}
        style={[styles.rightIcon, rightIconStyle]}
      />
    );
  };

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      hitSlop={UIConstants.TOUCHABLE_HIT_SLOP}
      style={containerStyle}
      {...restProps}>
      {({ pressed }) => (
        <>
          <View style={styles.row}>
            {renderIcon()}
            <View style={styles.contentContainer}>
              <Text style={[typography.body, titleStyle]}>{title}</Text>
              {(!!description || !!activeValue) && (
                <View style={styles.descriptionContainer}>
                  {!!description && <Text style={[typography.caption, descriptionStyle]}>{description}</Text>}
                  {!!activeValue && <Text style={[typography.caption, { color: themeColors.text.active }]}>{activeValue}</Text>}
                </View>
              )}
            </View>

            {/* Optional alert / notification red dot */}
            {showAlertDot && <View style={[styles.alertDot, { backgroundColor: themeColors.text.error }]} />}

            {/* Right icon (defaults to arrow) */}
            <View style={styles.rightIconContainer}>{renderRightIcon()}</View>
          </View>
          {pressed && !disabled && (
            <View
              pointerEvents="none"
              style={[styles.overlay, { backgroundColor: themeColors.fill.hover }]}
            />
          )}
        </>
      )}
    </Pressable>
  );
};
