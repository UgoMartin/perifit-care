import { StyleSheet } from "react-native";

export const getThemeStyles = (theme: "light" | "dark" = "light") => {
  const backgroundColor = theme === "dark" ? "#1a1a1a" : "#ffffff";
  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const borderColor = theme === "dark" ? "#333333" : "#e0e0e0";

  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      justifyContent: "center",
      flex: 1,
      backgroundColor,
    },
    text: {
      color: textColor,
    },
    border: {
      borderColor,
    },
  });
};

export const styles = getThemeStyles("light");
