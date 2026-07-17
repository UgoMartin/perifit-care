import React from "react";
import { PressableProps } from "react-native";
export type CheckProps = {
    size?: number;
    checked?: boolean;
    type?: "default" | "circle";
    onPress?: (checked: boolean) => void;
} & PressableProps;
export declare const Check: ({ size, checked, type, onPress, ...restProps }: CheckProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map