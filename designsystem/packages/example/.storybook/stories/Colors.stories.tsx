import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { brandToken, ThemeProvider, useTheme } from "@perifit/app-design-system";
import Clipboard from "@react-native-clipboard/clipboard";
import Toast from "react-native-toast-message";

// Color swatch component to display individual colors
const ColorSwatch = ({ name, value }: { name: string; value: string }) => (
  <TouchableOpacity
    onPress={() => {
      Clipboard.setString(value);
      Toast.show({
        text1: `Copied ${value} to clipboard`,
        type: "success",
        position: "bottom",
        bottomOffset: 60,
      });
    }}>
    <View
      style={{
        marginBottom: 8,
        borderRadius: 8,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#ddd",
      }}>
      <View
        style={{
          backgroundColor: value,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <View
        style={{
          padding: 8,
          backgroundColor: "#f5f5f5",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}>
        <Text style={{ fontSize: 12, fontWeight: "600" }}>{name}</Text>
        <Text style={{ fontSize: 12, fontWeight: "600" }}>{value}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

// Brand tokens section
const BrandTokensSection = () => {
  return (
    <View style={{ marginBottom: 24, paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>Brand Tokens</Text>

      {Object.entries(brandToken).map(([brandName, brandColors]) => {
        return (
          <View
            key={brandName}
            style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 12,
                textTransform: "capitalize",
              }}>
              {brandName}
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "space-between",
              }}>
              {Object.entries(brandColors).map(([shade, color]) => (
                <View
                  key={shade}
                  style={{ width: "30%" }}>
                  <ColorSwatch
                    name={`${brandName}-${shade}`}
                    value={color}
                  />
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
};

// Theme colors section
const ThemeColorsSection = () => {
  const { theme, themeColors, toggleTheme, setTheme } = useTheme();

  const themeControls = [
    {
      key: "toggle",
      label: `Switch to ${theme === "light" ? "Dark" : "Light"}`,
      onPress: toggleTheme,
      disabled: false,
    },
    {
      key: "light",
      label: "Set Light Theme",
      onPress: () => setTheme("light"),
      disabled: theme === "light",
    },
    {
      key: "dark",
      label: "Set Dark Theme",
      onPress: () => setTheme("dark"),
      disabled: theme === "dark",
    },
  ];

  const renderColorCategory = (categoryName: string, categoryColors: any) => (
    <View
      key={categoryName}
      style={{ marginBottom: 20 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 12,
          textTransform: "capitalize",
          color: themeColors.text.primary,
        }}>
        {categoryName}
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "space-between",
        }}>
        {Object.entries(categoryColors).map(([colorName, colorValue]) => (
          <View
            key={colorName}
            style={{ width: "30%" }}>
            <ColorSwatch
              name={colorName}
              value={colorValue as string}
            />
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={{ marginBottom: 24, flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          backgroundColor: themeColors.fill.page,
        }}>
        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 12,
              color: themeColors.text.primary,
            }}>
            Active theme: {theme === "light" ? "Light" : "Dark"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 8,
            }}>
            {themeControls.map(({ key, label, onPress, disabled }) => (
              <TouchableOpacity
                key={key}
                onPress={onPress}
                disabled={disabled}
                style={{
                  backgroundColor: disabled ? themeColors.button.primaryFillDisabled : themeColors.button.primaryFillDefault,
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 16,
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
        {Object.entries(themeColors).map(([categoryName, categoryColors]) => renderColorCategory(categoryName, categoryColors))}
      </ScrollView>
    </View>
  );
};

// Main colors view component
const ColorsView = () => {
  return (
    <ThemeProvider>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 24,
              textAlign: "center",
            }}>
            Design System Colors
          </Text>

          <BrandTokensSection />
          <ThemeColorsSection />

          {/* Usage Examples */}
          <View style={{ marginTop: 24 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>Usage Examples</Text>
            <View
              style={{
                backgroundColor: "#f9f9f9",
                padding: 16,
                borderRadius: 8,
              }}>
              <Text style={{ fontSize: 14, fontFamily: "monospace" }}>
                {`import { colors, brandToken } from '@perifit/app-design-system';

// Using brand tokens
backgroundColor: brandToken.brand1['500']

// Using theme colors (with ThemeProvider)
const { themeColors } = useTheme();
color: themeColors.text.primary

// Direct colors access
backgroundColor: colors.light.fill.primary
color: colors.dark.text.secondary`}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
};

const ColorsMeta: Meta<typeof ColorsView> = {
  title: "Colors",
  component: ColorsView,
  parameters: {
    docs: {
      description: {
        component:
          "Complete color system showcasing brand tokens, theme-aware colors, and usage examples. Toggle between light and dark themes to see how colors adapt.",
      },
    },
  },
};

export default ColorsMeta;

export const AllColors: StoryObj<typeof ColorsView> = {
  name: "Color Tokens",
};

// Individual category stories for focused viewing
export const BrandTokens: StoryObj<typeof BrandTokensSection> = {
  render: () => (
    <ScrollView style={{ flex: 1 }}>
      <BrandTokensSection />
    </ScrollView>
  ),
  name: "Brand Tokens Only",
};

export const ThemeColors: StoryObj<typeof ThemeColorsSection> = {
  render: () => <ThemeColorsSection />,
  name: "Theme Colors Only",
};
