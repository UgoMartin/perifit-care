import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ScrollView, View } from "react-native";
import { Toast } from "@perifit/app-design-system";

const meta = {
  title: "Toast",
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
  },
  render: () => (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={{ gap: 16 }}>
        <Toast
          title="Title"
          description="Description"
          actionLabel="Label"
          onActionPress={() => {}}
          onClose={() => {}}
        />
      </View>
    </ScrollView>
  ),
};
