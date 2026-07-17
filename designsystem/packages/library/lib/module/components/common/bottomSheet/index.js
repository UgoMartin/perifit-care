"use strict";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native";
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useTheme } from "../../../themes/themeContext";
import { radius, spacing } from "../../../themes";
import Images from "../../../assets/images";
import UIConstants from "../../../utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Simple bottom sheet built with react-native-reanimated & RNGH.
 * Supports wrapping content height or expanding to full screen.
 */
export const BottomSheet = ({
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
  } = useTheme();

  // Screen height is assumed constant during the lifetime of the sheet
  const screenHeight = Dimensions.get("window").height;

  /** Height of the sheet content (when mode = "content") */
  const [contentHeight, setContentHeight] = useState(0);

  /** Shared animated translationY value */
  const translateY = useSharedValue(screenHeight);

  /** Opacity for backdrop */
  const backdropOpacity = useSharedValue(0);

  // Mount whenever it becomes visible
  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(0, {
        duration: animationDuration
      });
      backdropOpacity.value = withTiming(1, {
        duration: animationDuration
      });
    } else {
      translateY.value = withTiming(screenHeight, {
        duration: animationDuration
      });
      backdropOpacity.value = withTiming(0, {
        duration: animationDuration
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  /** Handler to close the sheet */
  const runClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  /** Gesture handling */
  const startY = useSharedValue(0);
  const panGesture = useMemo(() => {
    return Gesture.Pan().onStart(() => {
      startY.value = translateY.value;
    }).onUpdate(event => {
      // Only allow dragging downward
      const newTranslate = Math.max(startY.value + event.translationY, 0);
      translateY.value = newTranslate;
      // Sync backdrop opacity with movement
      const progress = interpolate(newTranslate, [0, screenHeight], [1, 0], Extrapolate.CLAMP);
      backdropOpacity.value = progress;
    }).onEnd(() => {
      const shouldClose = translateY.value > screenHeight * 0.25; // 25% threshold
      if (shouldClose) {
        translateY.value = withTiming(screenHeight, {
          duration: animationDuration
        }, () => {
          if (onClose) {
            runOnJS(runClose)();
          }
        });
        backdropOpacity.value = withTiming(0, {
          duration: animationDuration
        });
      } else {
        translateY.value = withTiming(0, {
          duration: animationDuration
        });
        backdropOpacity.value = withTiming(1, {
          duration: animationDuration
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenHeight, onClose, animationDuration]);

  /** Animated styles */
  const animatedSheetStyle = useAnimatedStyle(() => ({
    transform: [{
      translateY: translateY.value
    }]
  }));
  const animatedBackdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value
  }));
  const onContentLayout = useCallback(e => {
    setContentHeight(e.nativeEvent.layout.height);
  }, []);
  if (!visible && backdropOpacity.value === 0) {
    return null;
  }
  const showHeader = showDragHandle || showCloseButton;
  return /*#__PURE__*/_jsxs(View, {
    pointerEvents: visible ? "auto" : "none",
    style: [StyleSheet.absoluteFill, {
      justifyContent: "flex-end"
    }],
    children: [/*#__PURE__*/_jsx(Pressable, {
      style: styles.backdrop,
      onPress: backdropClosable ? runClose : undefined,
      accessible: false,
      children: /*#__PURE__*/_jsx(Animated.View, {
        style: [styles.backdrop, animatedBackdropStyle],
        children: renderBackdrop ? renderBackdrop({
          style: styles.backdrop
        }) : /*#__PURE__*/_jsx(View, {
          style: [styles.backdrop, {
            backgroundColor: themeColors.fill.overlay
          }]
        })
      })
    }), (() => {
      const sheetContent = /*#__PURE__*/_jsxs(Animated.View, {
        style: [{
          backgroundColor: themeColors.fill.page,
          borderTopLeftRadius: mode === "full" ? 0 : radius.md,
          borderTopRightRadius: mode === "full" ? 0 : radius.md,
          overflow: "hidden"
        }, animatedSheetStyle],
        onLayout: mode === "content" ? contentHeight === 0 ? onContentLayout : undefined : undefined,
        children: [showHeader && /*#__PURE__*/_jsx(GestureDetector, {
          gesture: panGesture,
          children: /*#__PURE__*/_jsxs(View, {
            style: {
              height: 56,
              alignItems: "flex-end",
              paddingHorizontal: spacing.s
            },
            children: [showDragHandle && /*#__PURE__*/_jsx(View, {
              style: styles.handleContainer,
              children: /*#__PURE__*/_jsx(View, {
                style: [styles.handleBar, {
                  backgroundColor: themeColors.fill.overlay
                }]
              })
            }), showCloseButton && /*#__PURE__*/_jsx(Pressable, {
              hitSlop: UIConstants.TOUCHABLE_HIT_SLOP,
              style: {
                position: "absolute",
                right: spacing.s,
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              },
              onPress: runClose,
              children: /*#__PURE__*/_jsx(Image, {
                source: Images.closeIcon,
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
      return /*#__PURE__*/_jsx(GestureDetector, {
        gesture: panGesture,
        children: sheetContent
      });
    })()]
  });
};
const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFill
  },
  handleContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    paddingTop: spacing.s
  },
  handleBar: {
    width: 40,
    height: 4,
    borderRadius: 2
  }
});
//# sourceMappingURL=index.js.map