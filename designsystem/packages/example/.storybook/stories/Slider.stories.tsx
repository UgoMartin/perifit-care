import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Slider } from "@perifit/app-design-system";

const meta = {
  title: "Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Continuous: Story = {
  args: {
    initialValue: 0,
  },
  render: () => {
    const [value, setValue] = useState(0.4);

    return (
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ gap: 32, padding: 24 }}>
          <Slider
            initialValue={0.4}
            onValueChange={setValue}
            onSlidingComplete={setValue}
          />
          <Text style={{ fontSize: 16 }}>Value: {value.toFixed(2)}</Text>
        </View>
      </ScrollView>
    );
  },
};

export const WithSteps: Story = {
  args: {
    initialValue: 0,
  },
  render: () => {
    const [value, setValue] = useState(0.5);

    return (
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ gap: 32, padding: 24 }}>
          <Slider
            initialValue={0.5}
            onValueChange={setValue}
            step={0.25}
            onSlidingComplete={setValue}
          />
          <Text style={{ fontSize: 16 }}>Value (step 0.25): {value.toFixed(2)}</Text>
        </View>
      </ScrollView>
    );
  },
};
