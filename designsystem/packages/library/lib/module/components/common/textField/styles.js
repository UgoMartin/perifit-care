"use strict";

import { StyleSheet } from "react-native";
import UIConstants, { normalize } from "../../../utils";
import { spacing } from "../../../themes/spacing";
export const getStyles = (themeColors, typography) => StyleSheet.create({
  inputContainer: {
    height: UIConstants.TEXTINPUT_HEIGHT,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeColors.border.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: spacing.md
  },
  label: {
    ...typography.caption,
    color: themeColors.text.inactive,
    position: "absolute",
    top: spacing.xs2
  },
  input: {
    ...typography.body,
    flex: 1,
    paddingBottom: 0,
    paddingLeft: 0
  },
  showHidePasswordButton: {
    width: normalize(40),
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    ...typography.caption,
    color: themeColors.text.error,
    marginTop: spacing.xs3,
    marginLeft: spacing.xs3
  },
  showHidePasswordIcon: {
    tintColor: themeColors.icon.primary
  }
});
//# sourceMappingURL=styles.js.map