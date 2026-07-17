import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@perifit/app-design-system";
import { View } from "react-native";

const TextFieldView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ gap: 20 }}>
      {/* Default */}
      <TextField
        label="Email"
        text={email}
        textContentType="emailAddress"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      {/* With border override */}
      <TextField
        label="Email (Custom Border)"
        text={email}
        borderColor="indigo"
        onChangeText={setEmail}
      />

      {/* Password with show / hide toggle */}
      <TextField
        label="Password"
        showHidePassword
        text={password}
        textContentType="password"
        onChangeText={setPassword}
      />

      {/* Error state */}
      <TextField
        label="Username"
        text={email}
        error="Error"
        onChangeText={setEmail}
      />

      {/* Disabled */}
      <TextField
        label="Disabled"
        text={email}
        editable={false}
        onChangeText={setEmail}
      />
    </View>
  );
};

const meta: Meta<typeof TextFieldView> = {
  title: "TextField",
  component: TextFieldView,
};

export default meta;

type Story = StoryObj<typeof TextFieldView>;

export const Variants: Story = {
  args: {
    label: "",
  },
  render: () => (
    <View style={{ gap: 20 }}>
      <TextFieldView />
    </View>
  ),
};
