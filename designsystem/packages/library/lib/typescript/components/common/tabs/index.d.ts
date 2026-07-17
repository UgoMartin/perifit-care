import React from "react";
import { ViewStyle, StyleProp, AccessibilityState, PressableProps } from "react-native";
export type TabItem = {
    /** Label displayed under the icon */
    label: string;
    /** Optional icon rendered to the left of the label */
    icon?: React.ReactNode;
    /** Optional accessibility label */
    tabBarAccessibilityLabel?: string;
    /** Optional testID */
    testID?: string;
    /** Optional key */
    key?: React.Key | null;
    /** Optional accessibility state */
    accessibilityState?: AccessibilityState | undefined;
} & PressableProps;
export type TabsProps = {
    /** Array describing the tabs */
    items: TabItem[];
    /** Index of the currently selected tab */
    selectedIndex: number;
    /** Callback fired when a tab is pressed */
    onChange: (index: number) => void;
    /** Optional style override for the container */
    style?: StyleProp<ViewStyle>;
    size?: "small" | "default";
};
/**
 * Horizontally aligned set of tabs with an animated pill-shaped highlight that
 * transitions smoothly when switching tabs. Built with react-native-reanimated
 * to achieve 60 fps animations.
 */
export declare const Tabs: ({ items, selectedIndex, onChange, style, size }: TabsProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map