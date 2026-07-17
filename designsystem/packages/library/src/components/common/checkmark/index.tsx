import React from "react";
import { Image, View } from "react-native";
import Images from "../../../assets/images";
import { normalize } from "../../../utils";
import { useTheme } from "../../../themes";
import { getStyles, ICON_RATIO } from "./styles";

export const Checkmark = ({ size = normalize(28) }: { size?: number }) => {
  const { themeColors } = useTheme();
  const styles = getStyles(themeColors, size);
  return (
    <View style={styles.container}>
      <Image
        source={Images.whiteCheckIcon}
        style={{ width: size * ICON_RATIO, resizeMode: "contain" }}
      />
    </View>
  );
};
