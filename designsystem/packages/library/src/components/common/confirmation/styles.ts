import { StyleSheet } from "react-native";
import { IsTablet, normalize } from "../../../utils";
import { gap, radius, spacing } from "../../../themes/spacing";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.s,
    borderRadius: radius.md,
    flexDirection: "row",
    gap: gap.md,
  },
  checkIcon: {
    width: IsTablet() ? normalize(40) : normalize(24),
    height: IsTablet() ? normalize(40) : normalize(24),
    resizeMode: "contain",
  },
});
