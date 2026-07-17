import type { Preview } from "@storybook/react";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeProvider, useTheme } from "@perifit/app-design-system";

const ThemeToggleDecorator = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme, setTheme, themeColors } = useTheme();

  const themeControls = [
    {
      key: "toggle",
      label: `${theme === "light" ? "🌙" : "☀️"} Switch to ${theme === "light" ? "Dark" : "Light"}`,
      onPress: toggleTheme,
      disabled: false,
    },
    {
      key: "light",
      label: "☀️ Light Theme",
      onPress: () => setTheme("light"),
      disabled: theme === "light",
    },
    {
      key: "dark",
      label: "🌙 Dark Theme",
      onPress: () => setTheme("dark"),
      disabled: theme === "dark",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.fill.page }}>
      <View
        style={{
          padding: 16,
          alignItems: "flex-end",
          gap: 8,
        }}>
        <Text
          style={{
            color: themeColors.text.primary,
            fontWeight: "600",
          }}>
          Active theme: {theme === "light" ? "Light" : "Dark"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            gap: 8,
          }}>
          {themeControls.map(({ key, label, onPress, disabled }) => (
            <TouchableOpacity
              key={key}
              onPress={onPress}
              disabled={disabled}
              style={{
                backgroundColor: disabled ? themeColors.button.primaryFillDisabled : themeColors.button.primaryFillDefault,
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  color: disabled ? themeColors.button.primaryTextDisabled : themeColors.button.primaryTextDefault,
                  fontWeight: "600",
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>{children}</View>
    </View>
  );
};

const preview: Preview = {
  parameters: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <ThemeToggleDecorator>
          <Story />
        </ThemeToggleDecorator>
      </ThemeProvider>
    ),
  ],
};

export default preview;
