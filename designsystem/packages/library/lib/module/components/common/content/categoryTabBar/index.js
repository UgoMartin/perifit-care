"use strict";

import React from "react";
import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import { useTheme, spacing, radius, iconSize } from "../../../../themes";
import { decode } from "html-entities";
import { CachedImage } from "../utils/cachedImage";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const getStyles = (themeColors, typography) => StyleSheet.create({
  container: {
    marginTop: spacing.xs,
    marginBottom: spacing.xs2
  },
  tabsWrapper: {
    flexDirection: "row",
    gap: spacing.xs3
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.s,
    paddingVertical: spacing.xs,
    borderRadius: radius.xl,
    gap: spacing.xs2,
    backgroundColor: themeColors.fill.primary
  },
  tabButtonActive: {
    backgroundColor: themeColors.fill.dark
  },
  tabIcon: {
    width: iconSize.s,
    height: iconSize.s
  },
  tabText: {
    ...typography.caption,
    color: themeColors.text.primary
  },
  tabTextActive: {
    ...typography.caption,
    color: themeColors.text.inversedChangeBlack
  }
});
const CategoryTabBar = ({
  selectedTab,
  onSelectTab,
  categoryTabs
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = getStyles(themeColors, typography);
  return /*#__PURE__*/_jsx(View, {
    style: styles.container,
    children: /*#__PURE__*/_jsx(ScrollView, {
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      contentContainerStyle: styles.tabsWrapper,
      children: categoryTabs.map(tab => {
        const isActive = selectedTab === tab.id;
        return /*#__PURE__*/_jsxs(Pressable, {
          style: [styles.tabButton, isActive && styles.tabButtonActive],
          onPress: () => onSelectTab(tab.id),
          children: [!!tab.icon && /*#__PURE__*/_jsx(CachedImage, {
            source: tab.icon,
            style: styles.tabIcon,
            resizeMode: "contain"
          }), /*#__PURE__*/_jsx(Text, {
            style: [styles.tabText, isActive && styles.tabTextActive],
            children: decode(tab.name)
          })]
        }, tab.id);
      })
    })
  });
};
export default CategoryTabBar;
//# sourceMappingURL=index.js.map