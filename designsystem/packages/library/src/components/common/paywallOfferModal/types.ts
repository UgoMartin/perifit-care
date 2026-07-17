import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import type { BottomSheetProps } from "../bottomSheet";

export type PaywallModalInfo = {
  title: string;
  subtitle: string;
  bgImageSource?: ImageSourcePropType;
  cta: string;
  secondaryCta?: string;
};

export type PaywallOfferModalProps = {
  visible: boolean;
  paywallInfo: PaywallModalInfo;
  onAccept: () => void;
  onClose: () => void;
  /** Optional custom backdrop renderer forwarded to BottomSheet */
  renderBackdrop?: BottomSheetProps["renderBackdrop"];
  isModal?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};
