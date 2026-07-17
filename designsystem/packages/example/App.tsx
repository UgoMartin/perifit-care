/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { View } from "react-native";
import StorybookUIRoot from "./.storybook";
import { ThemeProvider } from "@perifit/app-design-system";
import Toast from "react-native-toast-message";

function AppWithTheme(): React.JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <StorybookUIRoot />
      <Toast />
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  );
}

export default App;
