"use strict";

import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useTheme } from "../../../themes/themeContext";
import Images from "../../../assets/images";
import UIConstants, { normalize } from "../../../utils";
import { styles } from "./styles";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * Simple selectable row with leading icon, title/description and trailing arrow.
 */
export const ListItem = ({
  title,
  description,
  titleStyle,
  activeValue,
  icon,
  onPress,
  selected = false,
  disabled = false,
  style,
  descriptionStyle,
  rightIcon,
  rightIconStyle,
  showAlertDot = false,
  ...restProps
}) => {
  const {
    themeColors,
    typography
  } = useTheme();

  // Build container style depending on selected / disabled state
  const containerStyle = React.useMemo(() => [{
    ...styles.container,
    backgroundColor: selected ? themeColors.fill.selected : themeColors.fill.primary,
    borderWidth: 1,
    borderColor: selected ? themeColors.border.selected : themeColors.fill.primary,
    opacity: disabled ? 0.6 : 1
  }, style || null], [disabled, selected, style, themeColors]);
  const renderIcon = () => {
    if (!icon) {
      return null;
    }
    if (/*#__PURE__*/React.isValidElement(icon)) {
      return icon;
    }
    // Fallback to default info icon when no custom icon provided
    return /*#__PURE__*/_jsx(Image, {
      source: icon ?? Images.infoIcon,
      style: {
        width: normalize(20),
        height: normalize(20),
        resizeMode: "contain"
      }
    });
  };
  const renderRightIcon = () => {
    if (rightIcon === null) {
      return null;
    }
    if (rightIcon === undefined) {
      return /*#__PURE__*/_jsx(Image, {
        source: Images.arrowNextIcon,
        style: [styles.defaultRightIcon, {
          tintColor: themeColors.icon.primary
        }]
      });
    }
    if (/*#__PURE__*/React.isValidElement(rightIcon)) {
      return rightIcon;
    }
    return /*#__PURE__*/_jsx(Image, {
      source: rightIcon,
      style: [styles.rightIcon, rightIconStyle]
    });
  };
  return /*#__PURE__*/_jsx(Pressable, {
    accessibilityRole: "button",
    disabled: disabled,
    onPress: onPress,
    hitSlop: UIConstants.TOUCHABLE_HIT_SLOP,
    style: containerStyle,
    ...restProps,
    children: ({
      pressed
    }) => /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs(View, {
        style: styles.row,
        children: [renderIcon(), /*#__PURE__*/_jsxs(View, {
          style: styles.contentContainer,
          children: [/*#__PURE__*/_jsx(Text, {
            style: [typography.body, titleStyle],
            children: title
          }), (!!description || !!activeValue) && /*#__PURE__*/_jsxs(View, {
            style: styles.descriptionContainer,
            children: [!!description && /*#__PURE__*/_jsx(Text, {
              style: [typography.caption, descriptionStyle],
              children: description
            }), !!activeValue && /*#__PURE__*/_jsx(Text, {
              style: [typography.caption, {
                color: themeColors.text.active
              }],
              children: activeValue
            })]
          })]
        }), showAlertDot && /*#__PURE__*/_jsx(View, {
          style: [styles.alertDot, {
            backgroundColor: themeColors.text.error
          }]
        }), /*#__PURE__*/_jsx(View, {
          style: styles.rightIconContainer,
          children: renderRightIcon()
        })]
      }), pressed && !disabled && /*#__PURE__*/_jsx(View, {
        pointerEvents: "none",
        style: [styles.overlay, {
          backgroundColor: themeColors.fill.hover
        }]
      })]
    })
  });
};
//# sourceMappingURL=index.js.map