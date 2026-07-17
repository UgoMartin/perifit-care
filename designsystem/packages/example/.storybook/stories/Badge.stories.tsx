import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ScrollView, View } from "react-native";
import { Badge } from "@perifit/app-design-system";
// Deep import for demonstration purposes – gives us access to sample icons shipped with the design-system package
// eslint-disable-next-line import/no-relative-packages
import Images from "@perifit/app-design-system/src/assets/images";

const meta = {
  title: "Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  args: {
    title: "",
  },
  render: () => (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={{ gap: 16 }}>
        <Badge title="Light" />
        <Badge
          title="Light with icon"
          icon={Images.hiddenIcon}
        />
        <Badge
          title="Dark"
          variant="dark"
        />
        <Badge
          title="Dark with icon with computed tint color"
          variant="dark"
          icon={Images.hiddenIcon}
          tintIcon
        />
      </View>
    </ScrollView>
  ),
};
