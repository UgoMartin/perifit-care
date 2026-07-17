import React from "react";
import { View } from "react-native";
import { BottomTabBar, BottomTabBarProps } from "@react-navigation/bottom-tabs";

/**
 * Custom bottom tab bar that adds a thin divider on top and allows custom height.
 */
export const CustomBottomTabBar = (props: BottomTabBarProps) => {
  const ThemedBottomTabBar = BottomTabBar as React.ComponentType<BottomTabBarProps & { style?: any }>;

  return (
    <View>
      <ThemedBottomTabBar {...props} />
    </View>
  );
};

export default CustomBottomTabBar;
