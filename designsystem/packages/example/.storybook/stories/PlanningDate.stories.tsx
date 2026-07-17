import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollView, View } from "react-native";
import { PlanningDate, useTheme } from "@perifit/app-design-system";

// Helper to render all variants in a row
const PlanningDateVariantsView = () => {
  // Use theme to get page background
  const { themeColors } = useTheme();
  return (
    <ScrollView
      style={{ flexGrow: 1 }}
      contentContainerStyle={{ padding: 16, backgroundColor: themeColors.fill.page }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
        <PlanningDate
          label="M"
          variant="empty"
          onPress={() => {}}
        />
        <PlanningDate
          label="M"
          variant="emptyMarked"
          onPress={() => {}}
        />
        <PlanningDate
          label="M"
          variant="filled"
          onPress={() => {}}
        />
        <PlanningDate
          label="M"
          variant="filledMarked"
          onPress={() => {}}
        />
        <PlanningDate
          label="M"
          variant="disabled"
        />
        <PlanningDate
          label="M"
          variant="emptyDashed"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

const meta: Meta<typeof PlanningDate> = {
  title: "PlanningDate",
  component: PlanningDate,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => <PlanningDateVariantsView />,
};
