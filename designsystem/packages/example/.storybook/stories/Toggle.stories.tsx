import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Toggle } from "@perifit/app-design-system";

const meta = {
  title: "Toggle",
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: false,
  },
  render: () => {
    const [isOn, setIsOn] = useState(false);

    return (
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ gap: 32, padding: 24 }}>
          <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
            <Text>Default</Text>
            <Toggle
              value={isOn}
              onValueChange={setIsOn}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
            <Text>Disabled</Text>
            <Toggle
              value={isOn}
              onValueChange={setIsOn}
              disabled
            />
          </View>
          <Text style={{ fontSize: 16 }}>State: {isOn ? "On" : "Off"}</Text>
        </View>
      </ScrollView>
    );
  },
};
