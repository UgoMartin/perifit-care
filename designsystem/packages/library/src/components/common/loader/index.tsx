import React from "react";
import { Dimensions, Text, View } from "react-native";
import { spacing, useTheme } from "../../../themes";
import UIConstants from "../../../utils";
import loaderAnimation from "../../../assets/loader_animation.json";
import LottieView from "lottie-react-native";

export type LoaderProps = {
  title: string;
  subtitle: string;
  size?: number;
};

export const Loader = ({ title, subtitle, size }: LoaderProps) => {
  const { typography } = useTheme();

  const windowSize = Dimensions.get("window");
  const isLandscape = windowSize.width > windowSize.height;
  const loadingSize = size ?? Math.min(UIConstants.SCREEN_HEIGHT, UIConstants.SCREEN_WIDTH) * (isLandscape ? 0.65 : 0.8);

  return (
    <View style={{ alignItems: "center", gap: spacing.xs }}>
      <LottieView
        style={{ width: loadingSize, height: loadingSize }}
        source={loaderAnimation}
        autoPlay
        loop
      />
      <Text style={[typography.h2, { textAlign: "center" }]}>{title}</Text>
      <Text style={[typography.body, { textAlign: "center" }]}>{subtitle}</Text>
    </View>
  );
};
