"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _themeContext = require("../../../themes/themeContext");
var _themes = require("../../../themes");
var _utils = require("../../../utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// ----- Constants -----
const ANIMATION_DURATION = 250;

// ----- TabButton component (top-level) -----

const TabButton = ({
  item,
  active,
  onPress,
  onLongPress,
  onLayout,
  themeColors,
  typography,
  size = "default",
  ...restProps
}) => {
  const activeShared = (0, _reactNativeReanimated.useSharedValue)(active ? 1 : 0);

  // Animate on active state change
  (0, _react.useEffect)(() => {
    activeShared.value = (0, _reactNativeReanimated.withTiming)(active ? 1 : 0, {
      duration: ANIMATION_DURATION
    });
  }, [active, activeShared]);
  const animatedTextStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    color: (0, _reactNativeReanimated.interpolateColor)(activeShared.value, [0, 1], [themeColors.text.primary, themeColors.text.inversedChangeBlack])
  }));

  // Prepare animated icon with hooks called unconditionally
  const iconElement = /*#__PURE__*/_react.default.isValidElement(item.icon) ? item.icon : null;
  const IconComponent = iconElement ? iconElement.type : null;
  const AnimatedIconComponent = (0, _react.useMemo)(() => {
    return IconComponent ? _reactNativeReanimated.default.createAnimatedComponent(IconComponent) : null;
  }, [IconComponent]);
  const animatedIconProps = (0, _reactNativeReanimated.useAnimatedProps)(() => ({
    color: (0, _reactNativeReanimated.interpolateColor)(activeShared.value, [0, 1], [themeColors.icon.primary, themeColors.icon.inversedChangeBlack])
  }));
  const renderedIcon = IconComponent && AnimatedIconComponent && iconElement ? /*#__PURE__*/(0, _jsxRuntime.jsx)(AnimatedIconComponent, {
    ...iconElement.props,
    animatedProps: animatedIconProps,
    size: size === "small" ? (0, _utils.normalize)(16) : (0, _utils.normalize)(20),
    style: {
      ...iconElement.props.style,
      width: size === "small" ? (0, _utils.normalize)(17) : (0, _utils.normalize)(21),
      height: size === "small" ? (0, _utils.normalize)(17) : (0, _utils.normalize)(21)
    }
  }) : item.icon;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
    testID: item.testID,
    accessibilityRole: "tab",
    accessibilityLabel: item.tabBarAccessibilityLabel,
    onPress: onPress,
    onLongPress: onLongPress,
    onLayout: onLayout,
    style: ({
      pressed
    }) => [{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: _themes.spacing.s,
      paddingVertical: _themes.spacing.xs,
      gap: _themes.spacing.xs2
    }, pressed ? {
      opacity: 0.8
    } : null],
    ...restProps,
    children: [renderedIcon, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.Text, {
      style: [size === "small" ? typography.caption : typography.body, animatedTextStyle],
      children: item.label
    })]
  });
};

/**
 * Horizontally aligned set of tabs with an animated pill-shaped highlight that
 * transitions smoothly when switching tabs. Built with react-native-reanimated
 * to achieve 60 fps animations.
 */
const Tabs = ({
  items,
  selectedIndex,
  onChange,
  style,
  size = "default"
}) => {
  const {
    themeColors,
    typography
  } = (0, _themeContext.useTheme)();

  /**
   * We store the x position & width of every tab after their first layout so we
   * can move/resize the animated highlight later.
   */
  const measurements = (0, _react.useRef)([]);
  const highlightX = (0, _reactNativeReanimated.useSharedValue)(0);
  const highlightWidth = (0, _reactNativeReanimated.useSharedValue)(0);

  // Initialise highlight once the selected tab has been measured
  const maybeInitHighlight = (0, _react.useCallback)(index => {
    const m = measurements.current[index];
    if (!m) {
      return;
    }
    highlightX.value = m.x;
    highlightWidth.value = m.width;
  }, [highlightX, highlightWidth]);

  // Update highlight whenever the selected index changes
  (0, _react.useEffect)(() => {
    const m = measurements.current[selectedIndex];
    if (!m) {
      // not measured yet
      return;
    }
    highlightX.value = (0, _reactNativeReanimated.withTiming)(m.x, {
      duration: ANIMATION_DURATION
    });
    highlightWidth.value = (0, _reactNativeReanimated.withTiming)(m.width, {
      duration: ANIMATION_DURATION
    });
  }, [selectedIndex, highlightX, highlightWidth]);
  const onTabLayout = index => e => {
    const {
      x,
      width
    } = e.nativeEvent.layout;
    measurements.current[index] = {
      x,
      width
    };
    if (index === selectedIndex) {
      maybeInitHighlight(index);
    }
  };
  const animatedHighlightStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    transform: [{
      translateX: highlightX.value
    }],
    width: highlightWidth.value
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [{
      flexDirection: "row",
      alignItems: "center"
    }, style],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      pointerEvents: "none",
      style: [{
        position: "absolute",
        height: "100%",
        backgroundColor: themeColors.fill.dark,
        borderRadius: _themes.radius.xl
      }, animatedHighlightStyle]
    }), items.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(TabButton, {
      item: item,
      accessibilityState: item.accessibilityState,
      active: index === selectedIndex,
      onPress: () => onChange(index),
      onLongPress: () => onChange(index),
      onLayout: onTabLayout(index),
      themeColors: themeColors,
      typography: typography,
      size: size
    }, item.key || index))]
  });
};
exports.Tabs = Tabs;
//# sourceMappingURL=index.js.map