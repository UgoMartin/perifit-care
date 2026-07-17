import React from "react";
import { Image, ImageRequireSource, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "../../../themes/themeContext";
import CustomBottomTabBar from "./customBottomTabBar";
import Images from "../../../assets/images";
import { FontNames } from "../../../themes";
import { normalize } from "../../../utils";

// Param list for the navigator – no params for any screen
export type BottomNavParamList = {
  Today: undefined;
  Exercices: undefined;
  Progress: undefined;
  Community: undefined;
};

const Tab = createBottomTabNavigator<BottomNavParamList>();

// Very small placeholder screens – consumers should replace with their own
const PlaceholderScreen = () => {
  const { themeColors } = useTheme();
  return <View style={{ flex: 1, backgroundColor: themeColors.fill.page }} />;
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
  const { themeColors } = useTheme();

  const screenOptions = ({ route }: { route: { name: keyof BottomNavParamList } }) => ({
    headerShown: false,
    tabBarShowLabel: true,
    tabBarActiveTintColor: themeColors.nav.activeText,
    tabBarInactiveTintColor: themeColors.nav.inactiveText,
    tabBarActiveBackgroundColor: themeColors.fill.page,
    tabBarInactiveBackgroundColor: themeColors.fill.page,
    tabBarLabelStyle: {
      fontSize: normalize(14),
      fontFamily: FontNames.semibold,
    },
    tabBarIcon: ({ focused, size }: { focused: boolean; size: number }) => {
      let iconName: ImageRequireSource;
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
      return (
        <Image
          source={iconName}
          style={{ width: size ?? 24, height: size ?? 24 }}
        />
      );
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBar={(props) => <CustomBottomTabBar {...props} />}
        initialRouteName="Exercices">
        <Tab.Screen
          name="Today"
          component={PlaceholderScreen}
        />
        <Tab.Screen
          name="Exercices"
          component={PlaceholderScreen}
        />
        <Tab.Screen
          name="Progress"
          component={PlaceholderScreen}
        />
        <Tab.Screen
          name="Community"
          component={PlaceholderScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavBar;
