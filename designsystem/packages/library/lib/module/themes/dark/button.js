"use strict";

import { brandToken } from "../brandToken";
import { text } from "./text";
export const button = {
  primaryFillDefault: brandToken.brand1["0"],
  primaryFillHover: brandToken.brand2["50"],
  primaryFillDisabled: brandToken.brand2["800"],
  primaryTextDefault: brandToken.brand2["500"],
  primaryTextDisabled: text.disabled,
  secondaryFillDefault: brandToken.brand2["600"],
  secondaryFillHover: brandToken.brand2["500"],
  secondaryFillDisabled: brandToken.brand2["800"],
  secondaryTextDefault: brandToken.brand1["0"],
  secondaryTextDisabled: text.disabled,
  inversedDefault: brandToken.brand1["0"],
  inversedHover: brandToken.brand1["0"],
  inversedDisabled: brandToken.brand2["800"],
  inversedTextDefault: brandToken.brand2["500"],
  inversedTextDisabled: text.disabled,
  appleFill: "#FFFFFF",
  appleText: "#000000",
  googleFill: "#FFFFFF",
  googleText: "#000000",
  facebookFill: "#1877F2",
  facebookText: "#FFFFFF"
};
//# sourceMappingURL=button.js.map