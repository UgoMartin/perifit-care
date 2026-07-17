import { StyleSheet } from "react-native";
import { radius } from "../../../themes";
import { gap } from "../../../themes/spacing";
import { normalize } from "../../../utils";

export const BUTTON_BIG_SIZE = normalize(60);
export const BUTTON_SMALL_SIZE = normalize(42);

export const styles = StyleSheet.create({
  base: {
    borderRadius: radius.xl,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: gap.md,
  },
});
