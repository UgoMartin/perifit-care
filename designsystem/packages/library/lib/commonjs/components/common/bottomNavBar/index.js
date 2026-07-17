"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BottomNavBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _native = require("@react-navigation/native");
var _bottomTabs = require("@react-navigation/bottom-tabs");
var _themeContext = require("../../../themes/themeContext");
var _customBottomTabBar = _interopRequireDefault(require("./customBottomTabBar"));
var _images = _interopRequireDefault(require("../../../assets/images"));
var _themes = require("../../../themes");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Param list for the navigator – no params for any screen

const Tab = (0, _bottomTabs.createBottomTabNavigator)();

// Very small placeholder screens – consumers should replace with their own
const PlaceholderScreen = () => {
  const {
    themeColors
  } = (0, _themeContext.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
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
const BottomNavBar = () => {
  const {
    themeColors
  } = (0, _themeContext.useTheme)();
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
      fontSize: (0, _utils.normalize)(14),
      fontFamily: _themes.FontNames.semibold
    },
    tabBarIcon: ({
      focused,
      size
    }) => {
      let iconName;
      switch (route.name) {
        case "Today":
          iconName = focused ? _images.default.homeSelectedIcon : _images.default.homeIcon;
          break;
        case "Exercices":
          iconName = focused ? _images.default.exerciseSelectedIcon : _images.default.exerciseIcon;
          break;
        case "Progress":
          iconName = focused ? _images.default.progressSelectedIcon : _images.default.progressIcon;
          break;
        case "Community":
          iconName = focused ? _images.default.communitySelectedIcon : _images.default.communityIcon;
          break;
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
        source: iconName,
        style: {
          width: size ?? 24,
          height: size ?? 24
        }
      });
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_native.NavigationContainer, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Tab.Navigator, {
      screenOptions: screenOptions,
      tabBar: props => /*#__PURE__*/(0, _jsxRuntime.jsx)(_customBottomTabBar.default, {
        ...props
      }),
      initialRouteName: "Exercices",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Tab.Screen, {
        name: "Today",
        component: PlaceholderScreen
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Tab.Screen, {
        name: "Exercices",
        component: PlaceholderScreen
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Tab.Screen, {
        name: "Progress",
        component: PlaceholderScreen
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Tab.Screen, {
        name: "Community",
        component: PlaceholderScreen
      })]
    })
  });
};
exports.BottomNavBar = BottomNavBar;
var _default = exports.default = BottomNavBar;
//# sourceMappingURL=index.js.map