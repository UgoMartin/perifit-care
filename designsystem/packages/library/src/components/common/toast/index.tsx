import React from "react";
import { View, Text, StyleProp, ViewStyle, Pressable, GestureResponderEvent } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import { iconSize, spacing } from "../../../themes";
import { Button } from "../button";
import UIConstants from "../../../utils";
import { styles as baseStyles } from "./styles";
import { Lucide } from "@react-native-vector-icons/lucide";

export type ToastProps = {
  /** Main title text */
  title: string;
  /** Optional secondary description */
  description?: string;
  /** Label for the optional action button */
  actionLabel?: string;
  /** Fired when the action button is pressed */
  onActionPress?: (event: GestureResponderEvent) => void;
  /** Fired when the close icon is pressed */
  onClose?: (event: GestureResponderEvent) => void;
  /** Disable all interactions */
  disabled?: boolean;
  /** Additional style overrides for the container */
  style?: StyleProp<ViewStyle>;
};

/**
 * Toast – temporary alert banner with an optional action button.
 */
export const Toast = ({ title, description, actionLabel, onActionPress, onClose, disabled = false, style }: ToastProps) => {
  const { themeColors, typography } = useTheme();

  const renderCloseIcon = () => (
    <Pressable
      accessibilityRole="button"
      hitSlop={UIConstants.TOUCHABLE_HIT_SLOP}
      onPress={onClose}
      disabled={disabled || !onClose}>
      <Lucide
        name="x"
        size={iconSize.xs}
        color={themeColors.icon.primary}
      />
    </Pressable>
  );

  return (
    <View style={[baseStyles.container, { backgroundColor: themeColors.fill.primary, opacity: disabled ? 0.6 : 1 }, style]}>
      {/* Title & close button */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text style={typography.subtitle}>{title}</Text>
        {onClose ? renderCloseIcon() : null}
      </View>

      {/* Description */}
      {description ? <Text style={typography.body}>{description}</Text> : null}

      {/* Action button */}
      {actionLabel && (
        <Button
          style={{ alignSelf: "baseline", marginTop: spacing.xs }}
          title={actionLabel}
          onPress={onActionPress ?? (() => {})}
          variant="primary"
          size="small"
          disabled={disabled || !onActionPress}
        />
      )}
    </View>
  );
};
