import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, IconButton, useTheme, Images, CheckIcon } from "@perifit/app-design-system";
import { ScrollView, View, Image } from "react-native";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  args: {
    title: "",
    onPress: () => {},
  },
  render: () => (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={{ gap: 16 }}>
        <Button
          title="Primary big"
          variant="primary"
          size="big"
          onPress={() => {}}
        />
        <Button
          title="Primary Disabled big"
          variant="primary"
          disabled
          size="big"
          onPress={() => {}}
        />
        <Button
          title="Secondary small"
          variant="secondary"
          onPress={() => {}}
        />
        <Button
          title="Secondary Disabled"
          variant="secondary"
          disabled
          onPress={() => {}}
        />
        <Button
          title="Inversed"
          variant="inversed"
          onPress={() => {}}
        />
        <Button
          title="Inversed Disabled"
          variant="inversed"
          disabled
          onPress={() => {}}
        />
        <Button
          title="Link Button"
          variant="link"
          onPress={() => {}}
        />
        <Button
          title="Link Button Disabled"
          variant="link"
          disabled
          onPress={() => {}}
        />
        <Button
          title="Loading"
          variant="primary"
          isLoading
          onPress={() => {}}
        />
        <Button
          title="Loading Secondary"
          variant="secondary"
          isLoading
          onPress={() => {}}
        />
        <Button
          title="Loading Inversed"
          variant="inversed"
          isLoading
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  ),
};

const IconButtonView = () => {
  const { themeColors } = useTheme();

  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={{ gap: 16 }}>
        <IconButton
          icon={<CheckIcon color={themeColors.text.inversedChangeBlack} />}
          variant="primary"
          onPress={() => {}}
        />
        <IconButton
          icon={
            <Image
              source={Images.plusCircleIcon}
              style={{ width: 24, height: 24 }}
            />
          }
          variant="primary"
          disabled
          onPress={() => {}}
        />
        <IconButton
          icon={
            <Image
              source={Images.communityIcon}
              style={{ width: 24, height: 24 }}
            />
          }
          variant="secondary"
          onPress={() => {}}
        />
        <IconButton
          icon={
            <Image
              source={Images.settingsIcon}
              style={{ width: 24, height: 24 }}
            />
          }
          variant="secondary"
          disabled
          onPress={() => {}}
        />
        <IconButton
          icon={
            <Image
              source={Images.closeIcon}
              style={{ width: 24, height: 24 }}
            />
          }
          variant="inversed"
          onPress={() => {}}
        />
        <IconButton
          icon={
            <Image
              source={Images.closeIcon}
              style={{ width: 24, height: 24 }}
            />
          }
          variant="inversed"
          disabled
          onPress={() => {}}
        />
        <IconButton
          icon={
            <Image
              source={Images.refreshIcon}
              style={{ width: 24, height: 24 }}
            />
          }
          variant="link"
          onPress={() => {}}
        />
        <IconButton
          icon={
            <Image
              source={Images.refreshIcon}
              style={{ width: 24, height: 24 }}
            />
          }
          variant="link"
          disabled
          onPress={() => {}}
        />
        <IconButton
          icon={
            <Image
              source={Images.refreshIcon}
              style={{ width: 24, height: 24 }}
            />
          }
          variant="primary"
          isLoading
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export const IconButtonVariants: Story = {
  args: {
    title: "",
    onPress: () => {},
  },
  render: () => <IconButtonView />,
};
