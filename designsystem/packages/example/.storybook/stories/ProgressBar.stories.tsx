import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ScrollView, View } from "react-native";
import { ProgressBar } from "@perifit/app-design-system";

const meta = {
  title: "Progress Bar",
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  args: {
    animated: false,
  },
  render: () => (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={{ gap: 32 }}>
        <ProgressBar to={0.3} />
        <ProgressBar to={0.6} />
        <ProgressBar to={1} />
      </View>
    </ScrollView>
  ),
};

export const AnimatedTransition: Story = {
  render: () => (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={{ gap: 32 }}>
        <ProgressBar
          animated
          from={0}
          to={1}
          duration={2000}
        />
        <ProgressBar
          animated
          from={0.2}
          to={0.8}
          duration={1500}
        />
      </View>
    </ScrollView>
  ),
};
