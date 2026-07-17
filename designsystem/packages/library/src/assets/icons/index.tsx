import Octicons from "@react-native-vector-icons/octicons";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { normalize } from "../../utils";

export const CheckIcon = ({ size = normalize(24), color = "white" }: { size?: number; color?: string }) => {
  return (
    <Octicons
      name="check-circle-fill"
      size={size}
      color={color}
    />
  );
};

export const CheckMarkIcon = ({ size = normalize(24), color = "black" }: { size?: number; color?: string }) => {
  return (
    <FontAwesome6
      name="check"
      color={color}
      size={size}
      iconStyle="solid"
    />
  );
};
