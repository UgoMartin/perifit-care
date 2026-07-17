import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Tabs } from "@perifit/app-design-system";
import Octicons from "@react-native-vector-icons/octicons";

const meta = {
  title: "Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [],
    selectedIndex: 0,
    onChange: () => {},
  },
  render: () => {
    const [index, setIndex] = useState(0);

    const items = new Array(3).fill(null).map(() => ({
      label: "Label",
      icon: (
        <Octicons
          name="gear"
          size={20}
        />
      ),
    }));
    const itemsWithoutIcon = new Array(3).fill(null).map(() => ({
      label: "Label",
    }));

    return (
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ gap: 16 }}>
          <Tabs
            items={items}
            selectedIndex={index}
            onChange={setIndex}
          />
          <Tabs
            items={itemsWithoutIcon}
            selectedIndex={index}
            onChange={setIndex}
            size="small"
          />
        </View>
      </ScrollView>
    );
  },
};
