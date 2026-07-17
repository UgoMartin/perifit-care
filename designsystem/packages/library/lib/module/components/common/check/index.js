"use strict";

import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { CheckMarkIcon } from "../../../assets/icons";
import { radius, useTheme } from "../../../themes";
import { normalize } from "../../../utils";
import { jsx as _jsx } from "react/jsx-runtime";
export const Check = ({
  size = normalize(24),
  checked,
  type = "default",
  onPress,
  ...restProps
}) => {
  const {
    themeColors
  } = useTheme();
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(checked ?? false);

  // Sync internal state when used as a controlled component
  useEffect(() => {
    if (isControlled) {
      setInternalChecked(checked);
    }
  }, [checked, isControlled]);
  return /*#__PURE__*/_jsx(Pressable, {
    onPress: () => {
      if (!isControlled) {
        setInternalChecked(prev => !prev);
      }
      onPress?.(internalChecked);
    },
    style: ({
      pressed
    }) => ({
      justifyContent: "center",
      alignItems: "center",
      width: size,
      height: size,
      backgroundColor: internalChecked ? themeColors.fill.dark : "transparent",
      borderRadius: type === "circle" ? size / 2 : radius.s,
      borderWidth: internalChecked ? 0 : 1,
      borderColor: themeColors.border.primary,
      opacity: pressed ? 0.7 : 1
    }),
    ...restProps,
    children: internalChecked && /*#__PURE__*/_jsx(CheckMarkIcon, {
      size: size * 0.6,
      color: themeColors.text.inversedChangeBlack
    })
  });
};
//# sourceMappingURL=index.js.map