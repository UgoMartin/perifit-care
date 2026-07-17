import React, { useEffect, useState } from "react";
import { Pressable, PressableProps } from "react-native";
import { CheckMarkIcon } from "../../../assets/icons";
import { radius, useTheme } from "../../../themes";
import { normalize } from "../../../utils";

export type CheckProps = {
  size?: number;
  checked?: boolean;
  type?: "default" | "circle";
  onPress?: (checked: boolean) => void;
} & PressableProps;

export const Check = ({ size = normalize(24), checked, type = "default", onPress, ...restProps }: CheckProps) => {
  const { themeColors } = useTheme();
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState<boolean>(checked ?? false);

  // Sync internal state when used as a controlled component
  useEffect(() => {
    if (isControlled) {
      setInternalChecked(checked as boolean);
    }
  }, [checked, isControlled]);

  return (
    <Pressable
      onPress={() => {
        if (!isControlled) {
          setInternalChecked((prev) => !prev);
        }
        onPress?.(internalChecked);
      }}
      style={({ pressed }) => ({
        justifyContent: "center",
        alignItems: "center",
        width: size,
        height: size,
        backgroundColor: internalChecked ? themeColors.fill.dark : "transparent",
        borderRadius: type === "circle" ? size / 2 : radius.s,
        borderWidth: internalChecked ? 0 : 1,
        borderColor: themeColors.border.primary,
        opacity: pressed ? 0.7 : 1,
      })}
      {...restProps}>
      {internalChecked && (
        <CheckMarkIcon
          size={size * 0.6}
          color={themeColors.text.inversedChangeBlack}
        />
      )}
    </Pressable>
  );
};
