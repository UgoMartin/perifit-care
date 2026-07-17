import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "@perifit/app-design-system";
import { View } from "react-native";

const SelectFieldView = () => {
  const [answer, setAnswer] = useState<string | undefined>("");

  const toggleValue = () => {
    setAnswer((prev) => (prev ? "" : "Answer"));
  };

  return (
    <View style={{ gap: 20 }}>
      {/* Default */}
      <SelectField
        label="Label"
        value={answer}
        onPress={toggleValue}
      />

      {/* With border override */}
      <SelectField
        label="Label"
        borderColor="teal"
        value={answer}
        onPress={toggleValue}
      />

      {/* With value */}
      <SelectField
        label="Label"
        value="Answer"
        onPress={() => {}}
      />

      {/* Error state */}
      <SelectField
        label="Label"
        value="Answer"
        error="Error"
        onPress={() => {}}
      />

      {/* Disabled */}
      <SelectField
        label="Label"
        value="Answer"
        editable={false}
        onPress={() => {}}
      />
    </View>
  );
};

const meta: Meta<typeof SelectFieldView> = {
  title: "SelectField",
  component: SelectFieldView,
};

export default meta;

type Story = StoryObj<typeof SelectFieldView>;

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <SelectFieldView />
    </View>
  ),
};
