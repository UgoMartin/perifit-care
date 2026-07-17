import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BottomNavBar } from "@perifit/app-design-system";

const meta = {
  title: "BottomNavBar",
  component: BottomNavBar,
} satisfies Meta<typeof BottomNavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BottomNavBar />,
};
