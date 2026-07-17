import { StyleSheet } from "react-native";

export const checkStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    borderWidth: 1,
    borderColor: "red",
    padding: 16,
  },
  parentContainer: {
    gap: 16,
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
});
