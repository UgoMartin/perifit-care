"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _themeContext = require("../../../themes/themeContext");
var _themes = require("../../../themes");
var _images = _interopRequireDefault(require("../../../assets/images"));
var _utils = _interopRequireDefault(require("../../../utils"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * Simple bottom sheet built with react-native-reanimated & RNGH.
 * Supports wrapping content height or expanding to full screen.
 */
const BottomSheet = ({
  visible,
  onClose,
  mode = "content",
  children,
  showDragHandle = true,
  showCloseButton = true,
  backdropClosable = true,
  animationDuration = 250,
  renderBackdrop
}) => {
  const {
    themeColors
  } = (0, _themeContext.useTheme)();

  // Screen height is assumed constant during the lifetime of the sheet
  const screenHeight = _reactNative.Dimensions.get("window").height;

  /** Height of the sheet content (when mode = "content") */
  const [contentHeight, setContentHeight] = (0, _react.useState)(0);

  /** Shared animated translationY value */
  const translateY = (0, _reactNativeReanimated.useSharedValue)(screenHeight);

  /** Opacity for backdrop */
  const backdropOpacity = (0, _reactNativeReanimated.useSharedValue)(0);

  // Mount whenever it becomes visible
  (0, _react.useEffect)(() => {
    if (visible) {
      translateY.value = (0, _reactNativeReanimated.withTiming)(0, {
        duration: animationDuration
      });
      backdropOpacity.value = (0, _reactNativeReanimated.withTiming)(1, {
        duration: animationDuration
      });
    } else {
      translateY.value = (0, _reactNativeReanimated.withTiming)(screenHeight, {
        duration: animationDuration
      });
      backdropOpacity.value = (0, _reactNativeReanimated.withTiming)(0, {
        duration: animationDuration
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  /** Handler to close the sheet */
  const runClose = (0, _react.useCallback)(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  /** Gesture handling */
  const startY = (0, _reactNativeReanimated.useSharedValue)(0);
  const panGesture = (0, _react.useMemo)(() => {
    return _reactNativeGestureHandler.Gesture.Pan().onStart(() => {
      startY.value = translateY.value;
    }).onUpdate(event => {
      // Only allow dragging downward
      const newTranslate = Math.max(startY.value + event.translationY, 0);
      translateY.value = newTranslate;
      // Sync backdrop opacity with movement
      const progress = (0, _reactNativeReanimated.interpolate)(newTranslate, [0, screenHeight], [1, 0], _reactNativeReanimated.Extrapolate.CLAMP);
      backdropOpacity.value = progress;
    }).onEnd(() => {
      const shouldClose = translateY.value > screenHeight * 0.25; // 25% threshold
      if (shouldClose) {
        translateY.value = (0, _reactNativeReanimated.withTiming)(screenHeight, {
          duration: animationDuration
        }, () => {
          if (onClose) {
            (0, _reactNativeReanimated.runOnJS)(runClose)();
          }
        });
        backdropOpacity.value = (0, _reactNativeReanimated.withTiming)(0, {
          duration: animationDuration
        });
      } else {
        translateY.value = (0, _reactNativeReanimated.withTiming)(0, {
          duration: animationDuration
        });
        backdropOpacity.value = (0, _reactNativeReanimated.withTiming)(1, {
          duration: animationDuration
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenHeight, onClose, animationDuration]);

  /** Animated styles */
  const animatedSheetStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    transform: [{
      translateY: translateY.value
    }]
  }));
  const animatedBackdropStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    opacity: backdropOpacity.value
  }));
  const onContentLayout = (0, _react.useCallback)(e => {
    setContentHeight(e.nativeEvent.layout.height);
  }, []);
  if (!visible && backdropOpacity.value === 0) {
    return null;
  }
  const showHeader = showDragHandle || showCloseButton;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    pointerEvents: visible ? "auto" : "none",
    style: [_reactNative.StyleSheet.absoluteFill, {
      justifyContent: "flex-end"
    }],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
      style: styles.backdrop,
      onPress: backdropClosable ? runClose : undefined,
      accessible: false,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
        style: [styles.backdrop, animatedBackdropStyle],
        children: renderBackdrop ? renderBackdrop({
          style: styles.backdrop
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.backdrop, {
            backgroundColor: themeColors.fill.overlay
          }]
        })
      })
    }), (() => {
      const sheetContent = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeReanimated.default.View, {
        style: [{
          backgroundColor: themeColors.fill.page,
          borderTopLeftRadius: mode === "full" ? 0 : _themes.radius.md,
          borderTopRightRadius: mode === "full" ? 0 : _themes.radius.md,
          overflow: "hidden"
        }, animatedSheetStyle],
        onLayout: mode === "content" ? contentHeight === 0 ? onContentLayout : undefined : undefined,
        children: [showHeader && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector, {
          gesture: panGesture,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
            style: {
              height: 56,
              alignItems: "flex-end",
              paddingHorizontal: _themes.spacing.s
            },
            children: [showDragHandle && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: styles.handleContainer,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: [styles.handleBar, {
                  backgroundColor: themeColors.fill.overlay
                }]
              })
            }), showCloseButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
              hitSlop: _utils.default.TOUCHABLE_HIT_SLOP,
              style: {
                position: "absolute",
                right: _themes.spacing.s,
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              },
              onPress: runClose,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                source: _images.default.closeIcon,
                style: {
                  width: 24,
                  height: 24
                }
              })
            })]
          })
        }), children]
      });
      if (showHeader) {
        return sheetContent;
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector, {
        gesture: panGesture,
        children: sheetContent
      });
    })()]
  });
};
exports.BottomSheet = BottomSheet;
const styles = _reactNative.StyleSheet.create({
  backdrop: {
    ..._reactNative.StyleSheet.absoluteFill
  },
  handleContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    paddingTop: _themes.spacing.s
  },
  handleBar: {
    width: 40,
    height: 4,
    borderRadius: 2
  }
});
//# sourceMappingURL=index.js.map