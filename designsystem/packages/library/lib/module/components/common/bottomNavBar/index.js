"use strict";

import React from "react";
import { Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "../../../themes/themeContext";
import CustomBottomTabBar from "./customBottomTabBar";
import Images from "../../../assets/images";
import { FontNames } from "../../../themes";
import { normalize } from "../../../utils";

// Param list for the navigator – no params for any screen
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Tab = createBottomTabNavigator();

// Very small placeholder screens – consumers should replace with their own
const PlaceholderScreen = () => {
  const {
    themeColors
  } = useTheme();
  return /*#__PURE__*/_jsx(View, {
    style: {
      flex: 1,
      backgroundColor: themeColors.fill.page
    }
  });
};

/**
 * Bottom navigation bar with four fixed items (Today, Exercices, Progress, Community).
 *
 * It is built with @react-navigation/bottom-tabs and already wired with a
 * NavigationContainer so it can be rendered anywhere (even inside Storybook)
 * without having to wrap the whole app.  Consumers that already have a root
 * navigation container can copy the configuration that lives inside this
 * component instead of rendering it directly.
 */
export const BottomNavBar = () => {
  const {
    themeColors
  } = useTheme();
  const screenOptions = ({
    route
  }) => ({
    headerShown: false,
    tabBarShowLabel: true,
    tabBarActiveTintColor: themeColors.nav.activeText,
    tabBarInactiveTintColor: themeColors.nav.inactiveText,
    tabBarActiveBackgroundColor: themeColors.fill.page,
    tabBarInactiveBackgroundColor: themeColors.fill.page,
    tabBarLabelStyle: {
      fontSize: normalize(14),
      fontFamily: FontNames.semibold
    },
    tabBarIcon: ({
      focused,
      size
    }) => {
      let iconName;
      switch (route.name) {
        case "Today":
          iconName = focused ? Images.homeSelectedIcon : Images.homeIcon;
          break;
        case "Exercices":
          iconName = focused ? Images.exerciseSelectedIcon : Images.exerciseIcon;
          break;
        case "Progress":
          iconName = focused ? Images.progressSelectedIcon : Images.progressIcon;
          break;
        case "Community":
          iconName = focused ? Images.communitySelectedIcon : Images.communityIcon;
          break;
      }
      return /*#__PURE__*/_jsx(Image, {
        source: iconName,
        style: {
          width: size ?? 24,
          height: size ?? 24
        }
      });
    }
  });
  return /*#__PURE__*/_jsx(NavigationContainer, {
    children: /*#__PURE__*/_jsxs(Tab.Navigator, {
      screenOptions: screenOptions,
      tabBar: props => /*#__PURE__*/_jsx(CustomBottomTabBar, {
        ...props
      }),
      initialRouteName: "Exercices",
      children: [/*#__PURE__*/_jsx(Tab.Screen, {
        name: "Today",
        component: PlaceholderScreen
      }), /*#__PURE__*/_jsx(Tab.Screen, {
        name: "Exercices",
        component: PlaceholderScreen
      }), /*#__PURE__*/_jsx(Tab.Screen, {
        name: "Progress",
        component: PlaceholderScreen
      }), /*#__PURE__*/_jsx(Tab.Screen, {
        name: "Community",
        component: PlaceholderScreen
      })]
    })
  });
};
export default BottomNavBar;
//# sourceMappingURL=index.js.map