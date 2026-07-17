import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ScrollView, View } from "react-native";
import { Loader } from "@perifit/app-design-system";

const meta = {
  title: "Loader",
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Connecting to your Perifit...",
    subtitle: "Connection can take up to 30 seconds ",
    size: 200,
  },
  render: (args) => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Loader {...args} />
    </ScrollView>
  ),
};
