import React from "react";
import { StyleProp, ViewStyle, TextStyle, GestureResponderEvent, ImageSourcePropType, PressableProps, ImageStyle } from "react-native";
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
export declare const ListItem: ({ title, description, titleStyle, activeValue, icon, onPress, selected, disabled, style, descriptionStyle, rightIcon, rightIconStyle, showAlertDot, ...restProps }: ListItemProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map