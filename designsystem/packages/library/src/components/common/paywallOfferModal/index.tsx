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
import { PaywallOfferModalProps } from "./types";

const PaywallOfferContent: React.FC<PaywallOfferModalProps> = ({ paywallInfo, onAccept, onClose, containerStyle }) => {
  const { themeColors, typography } = useTheme();
  const styles = getStyles(themeColors, typography);
  const { bgImageSource = Images.contentTab.premiumBackgroundImage, title, subtitle, cta, secondaryCta } = paywallInfo;

  const paywallBannerAspectRatio = useMemo(() => {
    const resolved = Image.resolveAssetSource(bgImageSource);

    if (resolved?.width && resolved?.height) {
      return resolved.width / resolved.height;
    }
    return 1;
  }, [bgImageSource]);

  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={[styles.paywallGradient, { paddingTop: bgImageSource ? undefined : spacing.md }, containerStyle]}>
      <ImageBackground
        source={bgImageSource}
        resizeMode="contain"
        style={[styles.paywallHeroImage, { aspectRatio: paywallBannerAspectRatio, height: bgImageSource ? undefined : 120 }]}
        imageStyle={styles.paywallHeroImageContent}>
        <LinearGradient
          style={styles.paywallHeroGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.65, 1]}
          colors={[hexWithAlpha(themeColors.icon.clubPerifitRemainsBlack, 0), hexWithAlpha(themeColors.icon.clubPerifitRemainsBlack, 1)]}
        />
        <Image
          source={Images.contentTab.premiumLargeIcon}
          resizeMode="contain"
          style={styles.paywallLargePremiumIcon}
        />
      </ImageBackground>
      <View style={styles.paywallBody}>
        <Text style={styles.paywallTitle}>{title}</Text>
        <Text style={styles.paywallSubtitle}>{subtitle}</Text>
        <View style={styles.paywallButtons}>
          <Button
            title={cta}
            onPress={onAccept}
            variant="inversed"
            size="big"
            style={styles.paywallPrimaryButton}
            titleStyle={{ color: themeColors.text.clubPerifit }}
          />
          {!!secondaryCta && (
            <Button
              title={secondaryCta}
              onPress={onClose}
              variant="primary"
              size="big"
              style={styles.paywallSecondaryButton}
              titleStyle={{ color: themeColors.text.inversedRemainsWhite }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export const PaywallOfferModal: React.FC<PaywallOfferModalProps> = (props) => {
  const { visible, onClose, renderBackdrop, isModal = true } = props;

  if (isModal) {
    return (
      <BottomSheet
        showCloseButton={false}
        showDragHandle={false}
        renderBackdrop={renderBackdrop}
        visible={visible}
        onClose={onClose}>
        <PaywallOfferContent {...props} />
      </BottomSheet>
    );
  }

  return <PaywallOfferContent {...props} />;
};

PaywallOfferModal.displayName = "PaywallOfferModal";
