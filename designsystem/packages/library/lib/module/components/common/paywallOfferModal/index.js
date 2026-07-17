"use strict";

import React, { useMemo } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { spacing, useTheme } from "../../../themes";
import { BottomSheet } from "../bottomSheet";
import { Button } from "../button";
import { hexWithAlpha } from "../../../utils";
import { getStyles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import Images from "../../../assets/images";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PaywallOfferContent = ({
  paywallInfo,
  onAccept,
  onClose,
  containerStyle
}) => {
  const {
    themeColors,
    typography
  } = useTheme();
  const styles = getStyles(themeColors, typography);
  const {
    bgImageSource = Images.contentTab.premiumBackgroundImage,
    title,
    subtitle,
    cta,
    secondaryCta
  } = paywallInfo;
  const paywallBannerAspectRatio = useMemo(() => {
    const resolved = Image.resolveAssetSource(bgImageSource);
    if (resolved?.width && resolved?.height) {
      return resolved.width / resolved.height;
    }
    return 1;
  }, [bgImageSource]);
  return /*#__PURE__*/_jsxs(ScrollView, {
    bounces: false,
    contentContainerStyle: [styles.paywallGradient, {
      paddingTop: bgImageSource ? undefined : spacing.md
    }, containerStyle],
    children: [/*#__PURE__*/_jsxs(ImageBackground, {
      source: bgImageSource,
      resizeMode: "contain",
      style: [styles.paywallHeroImage, {
        aspectRatio: paywallBannerAspectRatio,
        height: bgImageSource ? undefined : 120
      }],
      imageStyle: styles.paywallHeroImageContent,
      children: [/*#__PURE__*/_jsx(LinearGradient, {
        style: styles.paywallHeroGradient,
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 1
        },
        locations: [0.65, 1],
        colors: [hexWithAlpha(themeColors.icon.clubPerifitRemainsBlack, 0), hexWithAlpha(themeColors.icon.clubPerifitRemainsBlack, 1)]
      }), /*#__PURE__*/_jsx(Image, {
        source: Images.contentTab.premiumLargeIcon,
        resizeMode: "contain",
        style: styles.paywallLargePremiumIcon
      })]
    }), /*#__PURE__*/_jsxs(View, {
      style: styles.paywallBody,
      children: [/*#__PURE__*/_jsx(Text, {
        style: styles.paywallTitle,
        children: title
      }), /*#__PURE__*/_jsx(Text, {
        style: styles.paywallSubtitle,
        children: subtitle
      }), /*#__PURE__*/_jsxs(View, {
        style: styles.paywallButtons,
        children: [/*#__PURE__*/_jsx(Button, {
          title: cta,
          onPress: onAccept,
          variant: "inversed",
          size: "big",
          style: styles.paywallPrimaryButton,
          titleStyle: {
            color: themeColors.text.clubPerifit
          }
        }), !!secondaryCta && /*#__PURE__*/_jsx(Button, {
          title: secondaryCta,
          onPress: onClose,
          variant: "primary",
          size: "big",
          style: styles.paywallSecondaryButton,
          titleStyle: {
            color: themeColors.text.inversedRemainsWhite
          }
        })]
      })]
    })]
  });
};
export const PaywallOfferModal = props => {
  const {
    visible,
    onClose,
    renderBackdrop,
    isModal = true
  } = props;
  if (isModal) {
    return /*#__PURE__*/_jsx(BottomSheet, {
      showCloseButton: false,
      showDragHandle: false,
      renderBackdrop: renderBackdrop,
      visible: visible,
      onClose: onClose,
      children: /*#__PURE__*/_jsx(PaywallOfferContent, {
        ...props
      })
    });
  }
  return /*#__PURE__*/_jsx(PaywallOfferContent, {
    ...props
  });
};
PaywallOfferModal.displayName = "PaywallOfferModal";
//# sourceMappingURL=index.js.map