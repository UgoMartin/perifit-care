"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _themes = require("../../../../themes");
var _htmlEntities = require("html-entities");
var _cachedImage = require("../utils/cachedImage");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getStyles = (themeColors, typography) => _reactNative.StyleSheet.create({
  container: {
    marginTop: _themes.spacing.xs,
    marginBottom: _themes.spacing.xs2
  },
  tabsWrapper: {
    flexDirection: "row",
    gap: _themes.spacing.xs3
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: _themes.spacing.s,
    paddingVertical: _themes.spacing.xs,
    borderRadius: _themes.radius.xl,
    gap: _themes.spacing.xs2,
    backgroundColor: themeColors.fill.primary
  },
  tabButtonActive: {
    backgroundColor: themeColors.fill.dark
  },
  tabIcon: {
    width: _themes.iconSize.s,
    height: _themes.iconSize.s
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
  } = (0, _themes.useTheme)();
  const styles = getStyles(themeColors, typography);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: styles.container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      contentContainerStyle: styles.tabsWrapper,
      children: categoryTabs.map(tab => {
        const isActive = selectedTab === tab.id;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
          style: [styles.tabButton, isActive && styles.tabButtonActive],
          onPress: () => onSelectTab(tab.id),
          children: [!!tab.icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_cachedImage.CachedImage, {
            source: tab.icon,
            style: styles.tabIcon,
            resizeMode: "contain"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.tabText, isActive && styles.tabTextActive],
            children: (0, _htmlEntities.decode)(tab.name)
          })]
        }, tab.id);
      })
    })
  });
};
var _default = exports.default = CategoryTabBar;
//# sourceMappingURL=index.js.map