import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ScrollView, View } from "react-native";
import { Images, ListItem } from "@perifit/app-design-system";

const meta = {
  title: "ListItem",
  component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  args: {
    title: "Title",
  },
  render: () => (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={{ gap: 16 }}>
        <ListItem
          title="Lorem ipsum is placeholder text commonly used in the graphic"
          description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          activeValue="Active Value"
          icon={Images.checkEmptyIcon}
        />
        <ListItem
          selected
          title="Title"
          description="Description"
          activeValue="Active Value"
          icon={Images.checkEmptyIcon}
        />
      </View>
    </ScrollView>
  ),
};
