import { StyleSheet } from "react-native";
import UIConstants from "../../../utils";
import { spacing } from "../../../themes/spacing";
import { getTypography } from "../../../themes/typography";
import { ThemeColors } from "../../../themes/types";

export const getStyles = (themeColors: ThemeColors, typography: ReturnType<typeof getTypography>) =>
  StyleSheet.create({
    inputContainer: {
      height: UIConstants.TEXTINPUT_HEIGHT,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: themeColors.border.primary,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: spacing.md,
      paddingRight: spacing.md,
    },
    label: {
      ...typography.caption,
      color: themeColors.text.inactive,
      position: "absolute",
      top: spacing.xs3,
    },
    valueText: {
      ...typography.body,
    },
    iconContainer: {
      marginLeft: spacing.s,
      justifyContent: "center",
      alignItems: "center",
    },
    errorText: {
      ...typography.caption,
      color: themeColors.text.error,
      marginTop: spacing.xs3,
      marginLeft: spacing.xs3,
    },
  });
