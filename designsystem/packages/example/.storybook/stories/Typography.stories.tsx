import React from "react";
import { ScrollView, View, Text } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, typography as dsTypography, useTheme } from "@perifit/app-design-system";

// Helper component to render each typography token
const TypographyRow = ({ label, style }: { label: string; style: any }) => {
  const { themeColors } = useTheme();
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={dsTypography.subtitle}>{label}</Text>
      <Text style={[style]}>The quick brown fox jumps over the lazy dog</Text>
    </View>
  );
};

const TypographyView = () => {
  const typographyList: Array<{ label: string; style: any }> = [
    { label: "H1", style: dsTypography.h1 },
    { label: "H2", style: dsTypography.h2 },
    { label: "H3", style: dsTypography.h3 },
    { label: "H4", style: dsTypography.h4 },
    { label: "H5", style: dsTypography.h5 },
    { label: "Subtitle", style: dsTypography.subtitle },
    { label: "Category", style: dsTypography.category },
    { label: "Body", style: dsTypography.body },
    { label: "Caption", style: dsTypography.caption },
  ];

  return (
    <ThemeProvider>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
        {typographyList.map(({ label, style }) => (
          <TypographyRow
            key={label}
            label={label}
            style={style}
          />
        ))}
      </ScrollView>
    </ThemeProvider>
  );
};

const meta: Meta<typeof TypographyView> = {
  title: "Typography",
  component: TypographyView,
  parameters: {
    docs: {
      description: {
        component:
          "Showcase of all typography styles defined in the design system. Tap on a style to preview how it looks across different text tokens.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TypographyView>;

export const AllTypography: Story = {
  render: () => <TypographyView />,
  name: "All Typography Tokens",
};
