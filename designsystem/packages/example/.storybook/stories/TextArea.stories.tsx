import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "@perifit/app-design-system";
import { ScrollView, View } from "react-native";

const TextAreaView = () => {
  const [value, setValue] = useState("");

  return (
    <View style={{ gap: 20 }}>
      {/* Default */}
      <TextArea
        label="Label"
        text={value}
        onChangeText={setValue}
      />

      {/* With border override */}
      <TextArea
        label="Label"
        text={value}
        borderColor="indigo"
        onChangeText={setValue}
      />

      {/* Disabled */}
      <TextArea
        label="Label"
        text="Answer"
        editable={false}
        onChangeText={setValue}
      />

      {/* Error state */}
      <TextArea
        label="Label"
        text="Answer"
        error="Error"
        onChangeText={setValue}
      />
    </View>
  );
};

const meta: Meta<typeof TextAreaView> = {
  title: "TextArea",
  component: TextAreaView,
};

export default meta;

type Story = StoryObj<typeof TextAreaView>;

export const Variants: Story = {
  args: {},
  render: () => (
    <ScrollView style={{ flexGrow: 1 }}>
      <TextAreaView />
    </ScrollView>
  ),
};
