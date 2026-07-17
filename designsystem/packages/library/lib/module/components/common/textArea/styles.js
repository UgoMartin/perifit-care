"use strict";

import { StyleSheet } from "react-native";
import UIConstants from "../../../utils";
import { spacing } from "../../../themes/spacing";
export const getStyles = (themeColors, typography) => StyleSheet.create({
  inputContainer: {
    minHeight: UIConstants.TEXTINPUT_HEIGHT * 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeColors.border.primary,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.md
  },
  label: {
    ...typography.caption,
    color: themeColors.text.inactive,
    position: "absolute",
    top: spacing.xs2,
    left: spacing.md
  },
  input: {
    flex: 1,
    ...typography.body,
    textAlignVertical: "top",
    paddingBottom: 0
  },
  errorText: {
    ...typography.body,
    color: themeColors.text.error,
    marginTop: spacing.xs3,
    marginLeft: spacing.xs3
  }
});
//# sourceMappingURL=styles.js.map