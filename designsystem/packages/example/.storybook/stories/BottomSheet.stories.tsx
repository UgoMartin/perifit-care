import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, BottomSheet, gap, spacing, typography, useTheme } from "@perifit/app-design-system";

const meta = {
  title: "BottomSheet",
  component: BottomSheet,
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WrapContent: Story = {
  args: {
    visible: true,
    onClose: () => {},
    mode: "content",
    children: <View />,
  },
  render: () => {
    const [visible, setVisible] = useState(true);

    return (
      <View style={{ flex: 1 }}>
        <Button
          title={visible ? "Hide" : "Show"}
          onPress={() => setVisible((v) => !v)}
        />
        <BottomSheet
          visible={visible}
          onClose={() => setVisible(false)}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16, alignItems: "center", gap: gap.s }}>
            <Text style={typography.h2}>Add a new target</Text>
            <Text style={[typography.body, { textAlign: "center", marginBottom: spacing.s }]}>
              Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet consectetur.
              Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu habitant neque
              tempor lectus. Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet
              consectetur. Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu
              habitant neque tempor lectus.
            </Text>
            <View style={{ gap: gap.md, alignItems: "stretch", alignSelf: "stretch" }}>
              {Array.from({ length: 3 }).map((_, idx) => (
                <Button
                  key={idx}
                  title="Label"
                  variant="primary"
                  onPress={() => {}}
                />
              ))}
            </View>
          </ScrollView>
        </BottomSheet>
      </View>
    );
  },
};

export const FullHeight: Story = {
  args: {
    visible: true,
    onClose: () => {},
    mode: "full",
    children: <View />,
  },
  render: () => {
    const [visible, setVisible] = useState(true);

    return (
      <View style={{ flex: 1 }}>
        <Button
          title={visible ? "Hide" : "Show"}
          onPress={() => setVisible((v) => !v)}
        />
        <BottomSheet
          visible={visible}
          mode="full"
          onClose={() => setVisible(false)}>
          <ScrollView contentContainerStyle={{ paddingHorizontal: 16, alignItems: "center", gap: gap.s }}>
            <Text style={typography.h2}>Add a new target</Text>
            <Text style={[typography.body, { textAlign: "center", marginBottom: spacing.s }]}>
              Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet consectetur.
              Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu habitant neque
              tempor lectus. Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet
              consectetur. Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu
              habitant neque tempor lectus.
            </Text>
            <Text style={[typography.body, { textAlign: "center", marginBottom: spacing.s }]}>
              Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet consectetur.
              Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu habitant neque
              tempor lectus. Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet
              consectetur. Facilisis orci sapien eu habitant neque tempor lectus. Lorem ipsum dolor sit amet consectetur. Facilisis orci sapien eu
              habitant neque tempor lectus.
            </Text>
            <View style={{ gap: gap.md, alignItems: "stretch", alignSelf: "stretch" }}>
              {Array.from({ length: 3 }).map((_, idx) => (
                <Button
                  key={idx}
                  title="Label"
                  variant="primary"
                  onPress={() => {}}
                />
              ))}
            </View>
          </ScrollView>
        </BottomSheet>
      </View>
    );
  },
};
