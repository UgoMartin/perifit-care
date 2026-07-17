"use strict";

import React from "react";
import { View } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

/**
 * Custom bottom tab bar that adds a thin divider on top and allows custom height.
 */
import { jsx as _jsx } from "react/jsx-runtime";
export const CustomBottomTabBar = props => {
  const ThemedBottomTabBar = BottomTabBar;
  return /*#__PURE__*/_jsx(View, {
    children: /*#__PURE__*/_jsx(ThemedBottomTabBar, {
      ...props
    })
  });
};
export default CustomBottomTabBar;
//# sourceMappingURL=customBottomTabBar.js.map