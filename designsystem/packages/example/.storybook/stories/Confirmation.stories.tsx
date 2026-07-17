import React from "react";
import { ScrollView, View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { Confirmation } from "@perifit/app-design-system";

const ConfirmationView = () => {
  return (
    <View style={{ gap: 20 }}>
      <Confirmation
        type="success"
        caption="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        title="Lorem ipsum is placeholder text commonly used in the graphic"
      />
      <Confirmation
        type="error"
        caption="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        title="Lorem ipsum is placeholder text commonly used in the graphic"
      />
    </View>
  );
};

const meta: Meta<typeof ConfirmationView> = {
  title: "Confirmation",
  component: ConfirmationView,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <ScrollView style={{ flexGrow: 1 }}>
      <ConfirmationView />
    </ScrollView>
  ),
};
