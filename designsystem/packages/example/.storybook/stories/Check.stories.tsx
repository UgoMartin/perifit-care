import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useTheme, Check } from "@perifit/app-design-system";
import { checkStyles } from "./checkStyles";

const CheckView = () => {
  const [selectedCheck, setSelectedCheck] = useState(-1);
  return (
    <ScrollView style={checkStyles.scrollView}>
      <View style={checkStyles.parentContainer}>
        <Text>Selected: {selectedCheck}</Text>

        <View style={checkStyles.container}>
          <Text>This is controlled checks</Text>
          <Check
            checked={selectedCheck === 0}
            type="default"
            onPress={() => {
              setSelectedCheck(0);
            }}
          />
          <Check
            checked={selectedCheck === 1}
            type="circle"
            onPress={() => {
              setSelectedCheck(1);
            }}
          />
          <Check
            checked={selectedCheck === 2}
            type="default"
            onPress={() => {
              setSelectedCheck(2);
            }}
          />
        </View>
        <View style={checkStyles.container}>
          <Text>This is uncontrolled check</Text>
          <Check type="circle" />
          <Check type="circle" />
          <Check type="circle" />
        </View>
      </View>
    </ScrollView>
  );
};

const meta = {
  title: "Check",
  component: Check,
} satisfies Meta<typeof Check>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  args: {
    checked: true,
    type: "circle",
  },
  render: () => <CheckView />,
};
