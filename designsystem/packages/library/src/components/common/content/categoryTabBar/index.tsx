import React from "react";
import { View, StyleSheet, Pressable, Text, ScrollView, ImageSourcePropType } from "react-native";
import { useTheme, spacing, radius, ThemeColors, Typography, iconSize } from "../../../../themes";
import { decode } from "html-entities";
import { CachedImage } from "../utils/cachedImage";

export type CategoryTab = {
  id: string;
  icon?: ImageSourcePropType;
  name: string;
};

type CategoryTabBarProps = {
  categoryTabs: CategoryTab[];
  selectedTab: string;
  onSelectTab: (tabId: string) => void;
};

const getStyles = (themeColors: ThemeColors, typography: Typography) =>
  StyleSheet.create({
    container: {
      marginTop: spacing.xs,
      marginBottom: spacing.xs2,
    },
    tabsWrapper: {
      flexDirection: "row",
      gap: spacing.xs3,
    },
    tabButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: spacing.s,
      paddingVertical: spacing.xs,
      borderRadius: radius.xl,
      gap: spacing.xs2,
      backgroundColor: themeColors.fill.primary,
    },
    tabButtonActive: {
      backgroundColor: themeColors.fill.dark,
    },
    tabIcon: {
      width: iconSize.s,
      height: iconSize.s,
    },
    tabText: {
      ...typography.caption,
      color: themeColors.text.primary,
    },
    tabTextActive: {
      ...typography.caption,
      color: themeColors.text.inversedChangeBlack,
    },
  });

const CategoryTabBar: React.FC<CategoryTabBarProps> = ({ selectedTab, onSelectTab, categoryTabs }) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsWrapper}>
        {categoryTabs.map((tab) => {
          const isActive = selectedTab === tab.id;
          return (
            <Pressable
              key={tab.id}
              style={[styles.tabButton, isActive && styles.tabButtonActive]}
              onPress={() => onSelectTab(tab.id)}>
              {!!tab.icon && (
                <CachedImage
                  source={tab.icon}
                  style={styles.tabIcon}
                  resizeMode="contain"
                />
              )}
              <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{decode(tab.name)}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryTabBar;
