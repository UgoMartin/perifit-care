"use strict";

import Octicons from "@react-native-vector-icons/octicons";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { normalize } from "../../utils";
import { jsx as _jsx } from "react/jsx-runtime";
export const CheckIcon = ({
  size = normalize(24),
  color = "white"
}) => {
  return /*#__PURE__*/_jsx(Octicons, {
    name: "check-circle-fill",
    size: size,
    color: color
  });
};
export const CheckMarkIcon = ({
  size = normalize(24),
  color = "black"
}) => {
  return /*#__PURE__*/_jsx(FontAwesome6, {
    name: "check",
    color: color,
    size: size,
    iconStyle: "solid"
  });
};
//# sourceMappingURL=index.js.map