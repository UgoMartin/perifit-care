import React, { useEffect, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Animated,
  Easing,
  FlatList,
  Image,
  KeyboardAvoidingView,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Reanimated, {
  Easing as ReanimatedEasing,
  cancelAnimation,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import {
  Button,
  FontNames,
  IconButton,
  Images,
  ListItem,
  TextField,
  UIConstants,
  gap,
  iconSize,
  normalize,
  radius,
  spacing,
  useTheme,
} from '@perifit/app-design-system';
import { SafeAreaView } from 'react-native-safe-area-context';

type Step =
  | 'auth'
  | 'privacy'
  | 'welcome'
  | 'product'
  | 'purchase'
  | 'birthYear'
  | 'menstrualStatus';

type Product = 'carePlus' | 'care';

const FLOW: Step[] = [
  'auth',
  'privacy',
  'welcome',
  'product',
  'purchase',
  'birthYear',
  'menstrualStatus',
];

const QUESTION_STEPS = new Set<Step>([
  'product',
  'purchase',
  'birthYear',
  'menstrualStatus',
]);
const SCREEN_TRANSITION_DURATION = 320;
const PRIVACY_WELCOME_TRANSITION_DURATION = 260;
const PRIVACY_WELCOME_PULSE_DURATION = 40;
const PRIVACY_WELCOME_MERGE_DURATION = 70;
const PRIVACY_WELCOME_RISE_DURATION = 150;
const PRIVACY_WELCOME_LABEL_FADE_DURATION = 40;
const WELCOME_REVEAL_DELAY = 160;
const WELCOME_LOGO_RISE_DURATION = 170;
const WELCOME_LOGO_SETTLE_DURATION = 70;
const WELCOME_WAVE_START = WELCOME_REVEAL_DELAY + WELCOME_LOGO_RISE_DURATION;
const WELCOME_RING_PULSE_RISE_DURATION = 100;
const WELCOME_RING_PULSE_SETTLE_DURATION = 100;
const WELCOME_RING_RISE_DURATION = 210;
const WELCOME_RING_CONTRACT_DURATION = 80;
const WELCOME_RING_SETTLE_DURATION = 55;
const WELCOME_RING_OPACITY = 0.05;
const WELCOME_RING_PEAK_OPACITY = 0.09;
const WELCOME_RING_OVERSHOOT_SCALE = 1.05;
const WELCOME_RING_CONTRACT_SCALE = 0.985;
const WELCOME_RING_DELAYS = [
  WELCOME_WAVE_START + 80,
  WELCOME_WAVE_START + 40,
  WELCOME_WAVE_START,
] as const;
const WELCOME_RING_INITIAL_SCALES = [0.26, 0.35, 0.51] as const;
const WELCOME_AVATAR_DURATION = 190;
const WELCOME_AVATAR_DELAYS = [
  WELCOME_WAVE_START + 110,
  WELCOME_WAVE_START + 75,
  WELCOME_WAVE_START + 35,
  WELCOME_WAVE_START + 75,
] as const;
const WELCOME_COPY_DELAY = WELCOME_WAVE_START + 230;
const WELCOME_COPY_DURATION = 300;
const WELCOME_COPY_RISE_DURATION = 240;
const WELCOME_COPY_SETTLE_DURATION = 90;
const WELCOME_BUTTON_DELAY = WELCOME_WAVE_START + 290;
const WELCOME_BUTTON_DURATION = 240;

type MeasuredFrame = {
  height: number;
  width: number;
  x: number;
  y: number;
};

type PrivacyWelcomeTransition = {
  buttonFrame: MeasuredFrame;
  hostFrame: MeasuredFrame;
};

const DEFAULT_BIRTH_YEAR = 1985;
const TICK_WIDTH = normalize(15);
const YEARS = Array.from(
  { length: new Date().getFullYear() - 1939 },
  (_, index) => 1940 + index,
);

const PRODUCTS: Array<{
  id: Product | 'none';
  title: string;
  emoji?: string;
  image?: number;
}> = [
  {
    id: 'carePlus',
    title: 'Perifit Care +',
    image: require('./assets/perifit-care-plus.png'),
  },
  {
    id: 'care',
    title: 'Perifit Care',
    image: require('./assets/perifit-care.png'),
  },
  {
    id: 'none',
    title: 'No, not yet',
    emoji: '🫢',
  },
];

const AVATARS = [
  require('./assets/avatar-one.png'),
  require('./assets/avatar-two.png'),
  require('./assets/avatar-three.png'),
  require('./assets/avatar-four.png'),
];

const SOCIAL_ICONS = {
  google: require('./assets/google.png'),
  facebook: require('./assets/facebook.png'),
  apple: require('./assets/apple.png'),
} as const;

const PRIVACY_COPY = [
  'Lorem ipsum dolor sit amet consectetur. Mauris sed sapien mauris leo mattis varius ut sed pharetra. In viverra bibendum ipsum risus. Et leo nam adipiscing auctor consequat. Vitae faucibus lorem justo arcu orci cras.',
  'Leo donec interdum sit sed pellentesque. Cursus id ullamcorper ullamcorper diam tellus. Ornare massa nibh nam ut. A sem massa maecenas arcu quis morbi porttitor sit. Maecenas malesuada ante netus pellentesque auctor. Arcu urna tincidunt dictumst ut adipiscing facilisis. Blandit amet velit ac maecenas sed. Neque est sodales in lobortis duis nulla.',
  'Viverra integer eget sem feugiat. Sit venenatis ut lobortis vitae leo non at. Sem eu vitae convallis sem facilisis pulvinar scelerisque lectus.',
  'Sit tortor felis eu eleifend risus potenti. Nulla neque gravida orci non netus convallis elit. Faucibus lacus mi turpis nibh enim euismod velit. Consequat velit nibh semper auctor. Sit eget id sit netus egestas sodales malesuada eget diam. Purus sapien volutpat in viverra sed ridiculus tincidunt.',
  'Sociis velit tortor pretium hac eu in tincidunt tincidunt vel. Magnis gravida tristique ullamcorper pulvinar sit blandit scelerisque odio tortor. Tincidunt scelerisque volutpat vehicula faucibus.',
];

function ScreenShell({
  children,
  backgroundColor,
  showStatusBar = true,
}: {
  children: React.ReactNode;
  backgroundColor: string;
  showStatusBar?: boolean;
}): React.JSX.Element {
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={[styles.safeArea, { backgroundColor }]}
    >
      {showStatusBar ? (
        <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      ) : null}
      <View style={styles.deviceFrame}>{children}</View>
    </SafeAreaView>
  );
}

function FlowHeader({
  onBack,
  onHelp,
}: {
  onBack: () => void;
  onHelp?: () => void;
}): React.JSX.Element {
  const { themeColors } = useTheme();

  return (
    <View style={styles.header}>
      <IconButton
        accessibilityLabel="Back"
        icon={<BackIcon color={themeColors.icon.primary} />}
        onPress={onBack}
        size="small"
        style={styles.headerIconButton}
        variant="link"
      />
      {onHelp ? (
        <IconButton
          accessibilityLabel="Help"
          icon={<HelpIcon color={themeColors.icon.primary} />}
          onPress={onHelp}
          size="small"
          style={styles.headerIconButton}
          variant="link"
        />
      ) : (
        <View style={styles.headerIconPlaceholder} />
      )}
    </View>
  );
}

function BackIcon({ color }: { color: string }): React.JSX.Element {
  return (
    <Svg
      fill="none"
      height={iconSize.md}
      viewBox="0 0 24 24"
      width={iconSize.md}
    >
      <Path
        d="M19 12H5M11.6111 19L5 12L11.6111 5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
      />
    </Svg>
  );
}

function HelpIcon({ color }: { color: string }): React.JSX.Element {
  return (
    <Svg
      fill="none"
      height={iconSize.md}
      viewBox="0 0 24 24"
      width={iconSize.md}
    >
      <Path
        d="M9 9.00001C9 5.49998 14.5 5.50001 14.5 9.00001C14.5 11.5 12 10.9999 12 13.9999M12 18.0099L12.01 17.9988"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
}

function TitleBlock({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}): React.JSX.Element {
  const { themeColors, typography } = useTheme();

  return (
    <View style={styles.titleBlock}>
      <Text style={typography.h2}>{title}</Text>
      {subtitle ? (
        <Text style={[typography.body, { color: themeColors.text.primary }]}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}

function BottomActionGroup({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const { themeColors } = useTheme();

  return (
    <View style={styles.bottomActionGroup}>
      <LinearGradient
        colors={[themeColors.fill.gradientFadePage, themeColors.fill.page]}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.175]}
        pointerEvents="none"
        start={{ x: 0, y: 0 }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.bottomActionButtons}>{children}</View>
    </View>
  );
}

function SocialButton({
  platform,
  title,
}: {
  platform: 'google' | 'facebook' | 'apple';
  title: string;
}): React.JSX.Element {
  const { themeColors } = useTheme();
  const isGoogle = platform === 'google';
  const backgroundColor = isGoogle
    ? themeColors.button.googleFill
    : platform === 'facebook'
    ? themeColors.button.facebookFill
    : themeColors.button.appleFill;
  const textColor = isGoogle
    ? themeColors.button.googleText
    : platform === 'facebook'
    ? themeColors.button.facebookText
    : themeColors.button.appleText;

  return (
    <Button
      title={title}
      onPress={() => {}}
      icon={<Image source={SOCIAL_ICONS[platform]} style={styles.socialIcon} />}
      style={[
        styles.socialButton,
        { backgroundColor },
        isGoogle
          ? {
              borderColor: themeColors.border.primary,
              borderWidth: styles.googleButtonBorder.borderWidth,
            }
          : null,
      ]}
      titleStyle={{ color: textColor }}
    />
  );
}

function AuthScreen({
  contentOnly = false,
  onContinue,
}: {
  contentOnly?: boolean;
  onContinue: () => void;
}) {
  const { themeColors, typography } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const content = (
    <>
      {contentOnly ? (
        <View style={styles.introHeaderSpacer} />
      ) : (
        <FlowHeader onBack={() => {}} />
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={styles.authContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={typography.h2}>Sign in your Account</Text>

          <View style={styles.socialStack}>
            <SocialButton platform="google" title="Sign in with Google" />
            <SocialButton platform="facebook" title="Sign in with Facebook" />
            <SocialButton platform="apple" title="Sign up with Apple" />
          </View>

          <View style={styles.dividerRow}>
            <View
              style={[
                styles.divider,
                { backgroundColor: themeColors.border.primary },
              ]}
            />
            <Text
              style={[
                typography.caption,
                { color: themeColors.text.secondary },
              ]}
            >
              Or sign in with your email
            </Text>
            <View
              style={[
                styles.divider,
                { backgroundColor: themeColors.border.primary },
              ]}
            />
          </View>

          <View style={styles.formStack}>
            <TextField
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              label="Email"
              onChangeText={setEmail}
              text={email}
            />
            <TextField
              autoCapitalize="none"
              label="Password"
              onChangeText={setPassword}
              showHidePassword
              text={password}
              textContentType="password"
            />
          </View>

          <Button
            title="Forgot password"
            onPress={() => {}}
            variant="link"
            style={styles.forgotPassword}
          />
          <Button
            accessibilityLabel="Continue to onboarding"
            title="Sign in"
            onPress={onContinue}
          />

          <Pressable
            accessibilityLabel="Sign up"
            onPress={onContinue}
            style={styles.signupLink}
          >
            <Text style={typography.body}>
              Don&apos;t have an account?{' '}
              <Text
                style={[
                  typography.bodyUnderline,
                  { color: themeColors.text.links },
                ]}
              >
                Sign up
              </Text>
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );

  if (contentOnly) {
    return content;
  }

  return (
    <ScreenShell backgroundColor={themeColors.fill.page}>{content}</ScreenShell>
  );
}

function PrivacyScreen({
  acceptButtonRef,
  acceptHidden = false,
  contentOnly = false,
  onAccept,
  onBack,
}: {
  acceptButtonRef?: React.RefObject<View | null>;
  acceptHidden?: boolean;
  contentOnly?: boolean;
  onAccept: () => void;
  onBack: () => void;
}) {
  const { themeColors, typography } = useTheme();

  const content = (
    <View style={styles.privacyScreen}>
      {contentOnly ? (
        <View style={styles.introHeaderSpacer} />
      ) : (
        <FlowHeader onBack={onBack} onHelp={() => {}} />
      )}
      <ScrollView
        contentContainerStyle={styles.privacyContent}
        showsVerticalScrollIndicator={false}
      >
        <TitleBlock
          title="Privacy policy"
          subtitle="We respect your privacy. Here's how we handle your data."
        />
        <View style={styles.privacyCopy}>
          {PRIVACY_COPY.map(paragraph => (
            <Text key={paragraph} style={typography.body}>
              {paragraph}
            </Text>
          ))}
        </View>
      </ScrollView>
      <BottomActionGroup>
        <View
          collapsable={false}
          ref={acceptButtonRef}
          style={acceptHidden ? styles.hiddenAcceptButton : null}
          testID="privacy-accept-anchor"
        >
          <Button
            accessibilityLabel="Accept privacy policy"
            disabled={acceptHidden}
            title="Accept"
            onPress={onAccept}
          />
        </View>
      </BottomActionGroup>
    </View>
  );

  if (contentOnly) {
    return content;
  }

  return (
    <ScreenShell backgroundColor={themeColors.fill.page}>{content}</ScreenShell>
  );
}

function WelcomeRing({
  animateEntrance,
  backgroundColor,
  delay,
  initialScale,
  style,
}: {
  animateEntrance: boolean;
  backgroundColor: string;
  delay: number;
  initialScale: number;
  style: StyleProp<ViewStyle>;
}): React.JSX.Element {
  const opacity = useSharedValue(animateEntrance ? 0 : WELCOME_RING_OPACITY);
  const scale = useSharedValue(animateEntrance ? initialScale : 1);

  useEffect(() => {
    if (!animateEntrance) {
      opacity.value = WELCOME_RING_OPACITY;
      scale.value = 1;
      return;
    }

    opacity.value = 0;
    scale.value = initialScale;
    opacity.value = withDelay(
      delay,
      withSequence(
        withTiming(WELCOME_RING_PEAK_OPACITY, {
          duration: WELCOME_RING_PULSE_RISE_DURATION,
          easing: ReanimatedEasing.out(ReanimatedEasing.quad),
        }),
        withTiming(WELCOME_RING_OPACITY, {
          duration: WELCOME_RING_PULSE_SETTLE_DURATION,
          easing: ReanimatedEasing.inOut(ReanimatedEasing.quad),
        }),
      ),
    );
    scale.value = withDelay(
      delay,
      withSequence(
        withTiming(WELCOME_RING_OVERSHOOT_SCALE, {
          duration: WELCOME_RING_RISE_DURATION,
          easing: ReanimatedEasing.out(ReanimatedEasing.cubic),
        }),
        withTiming(WELCOME_RING_CONTRACT_SCALE, {
          duration: WELCOME_RING_CONTRACT_DURATION,
          easing: ReanimatedEasing.inOut(ReanimatedEasing.cubic),
        }),
        withTiming(1, {
          duration: WELCOME_RING_SETTLE_DURATION,
          easing: ReanimatedEasing.out(ReanimatedEasing.cubic),
        }),
      ),
    );

    return () => {
      cancelAnimation(opacity);
      cancelAnimation(scale);
    };
  }, [animateEntrance, delay, initialScale, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Reanimated.View
      style={[styles.ring, style, { backgroundColor }, animatedStyle]}
    />
  );
}

function WelcomeAvatar({
  animateEntrance,
  counterRotation,
  delay,
  position,
  source,
}: {
  animateEntrance: boolean;
  counterRotation: Animated.AnimatedInterpolation<string | number>;
  delay: number;
  position: StyleProp<ViewStyle>;
  source: ImageSourcePropType;
}): React.JSX.Element {
  const opacity = useSharedValue(animateEntrance ? 0 : 1);
  const scale = useSharedValue(animateEntrance ? 0.9 : 1);

  useEffect(() => {
    if (!animateEntrance) {
      opacity.value = 1;
      scale.value = 1;
      return;
    }

    opacity.value = 0;
    scale.value = 0.9;
    opacity.value = withDelay(
      delay,
      withTiming(1, {
        duration: WELCOME_AVATAR_DURATION,
        easing: ReanimatedEasing.out(ReanimatedEasing.cubic),
      }),
    );
    scale.value = withDelay(
      delay,
      withTiming(1, {
        duration: WELCOME_AVATAR_DURATION,
        easing: ReanimatedEasing.out(ReanimatedEasing.cubic),
      }),
    );

    return () => {
      cancelAnimation(opacity);
      cancelAnimation(scale);
    };
  }, [animateEntrance, delay, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Reanimated.View
      style={[styles.avatar, position, animatedStyle]}
      testID="welcome-avatar"
    >
      <Animated.Image
        source={source}
        style={[styles.fillImage, { transform: [{ rotate: counterRotation }] }]}
      />
    </Reanimated.View>
  );
}

function OrbitingWelcome({
  animateEntrance = false,
  animateOrbit = true,
  onEntranceComplete,
  onStart,
  showStatusBar = true,
}: {
  animateEntrance?: boolean;
  animateOrbit?: boolean;
  onEntranceComplete?: () => void;
  onStart: () => void;
  showStatusBar?: boolean;
}) {
  const { themeColors, typography } = useTheme();
  const progress = useRef(new Animated.Value(0)).current;
  const logoOpacity = useSharedValue(animateEntrance ? 0 : 1);
  const logoScale = useSharedValue(animateEntrance ? 0.92 : 1);
  const copyOpacity = useSharedValue(animateEntrance ? 0 : 1);
  const copyTranslateY = useSharedValue(animateEntrance ? spacing.md : 0);
  const buttonOpacity = useSharedValue(animateEntrance ? 0 : 1);
  const buttonTranslateY = useSharedValue(animateEntrance ? spacing.s : 0);

  useEffect(() => {
    if (!animateEntrance) {
      logoOpacity.value = 1;
      logoScale.value = 1;
      copyOpacity.value = 1;
      copyTranslateY.value = 0;
      buttonOpacity.value = 1;
      buttonTranslateY.value = 0;
      return;
    }

    logoOpacity.value = 0;
    logoScale.value = 0.92;
    copyOpacity.value = 0;
    copyTranslateY.value = spacing.md;
    buttonOpacity.value = 0;
    buttonTranslateY.value = spacing.s;

    logoOpacity.value = withDelay(
      WELCOME_REVEAL_DELAY,
      withTiming(1, {
        duration: WELCOME_LOGO_RISE_DURATION,
        easing: ReanimatedEasing.out(ReanimatedEasing.cubic),
      }),
    );
    logoScale.value = withDelay(
      WELCOME_REVEAL_DELAY,
      withSequence(
        withTiming(1.02, {
          duration: WELCOME_LOGO_RISE_DURATION,
          easing: ReanimatedEasing.out(ReanimatedEasing.cubic),
        }),
        withTiming(1, {
          duration: WELCOME_LOGO_SETTLE_DURATION,
          easing: ReanimatedEasing.inOut(ReanimatedEasing.cubic),
        }),
      ),
    );
    copyOpacity.value = withDelay(
      WELCOME_COPY_DELAY,
      withTiming(1, {
        duration: WELCOME_COPY_DURATION,
        easing: ReanimatedEasing.out(ReanimatedEasing.cubic),
      }),
    );
    copyTranslateY.value = withDelay(
      WELCOME_COPY_DELAY,
      withSequence(
        withTiming(-spacing.xs3, {
          duration: WELCOME_COPY_RISE_DURATION,
          easing: ReanimatedEasing.out(ReanimatedEasing.cubic),
        }),
        withTiming(0, {
          duration: WELCOME_COPY_SETTLE_DURATION,
          easing: ReanimatedEasing.inOut(ReanimatedEasing.cubic),
        }),
      ),
    );
    buttonTranslateY.value = withDelay(
      WELCOME_BUTTON_DELAY,
      withTiming(0, {
        duration: WELCOME_BUTTON_DURATION,
        easing: ReanimatedEasing.out(ReanimatedEasing.cubic),
      }),
    );
    buttonOpacity.value = withDelay(
      WELCOME_BUTTON_DELAY,
      withTiming(
        1,
        {
          duration: WELCOME_BUTTON_DURATION,
          easing: ReanimatedEasing.out(ReanimatedEasing.cubic),
        },
        finished => {
          if (finished && onEntranceComplete) {
            runOnJS(onEntranceComplete)();
          }
        },
      ),
    );

    return () => {
      cancelAnimation(buttonOpacity);
      cancelAnimation(buttonTranslateY);
      cancelAnimation(copyOpacity);
      cancelAnimation(copyTranslateY);
      cancelAnimation(logoOpacity);
      cancelAnimation(logoScale);
    };
  }, [
    animateEntrance,
    buttonOpacity,
    buttonTranslateY,
    copyOpacity,
    copyTranslateY,
    logoOpacity,
    logoScale,
    onEntranceComplete,
  ]);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value }],
  }));
  const copyAnimatedStyle = useAnimatedStyle(() => ({
    opacity: copyOpacity.value,
    transform: [{ translateY: copyTranslateY.value }],
  }));
  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    opacity: buttonOpacity.value,
    transform: [{ translateY: buttonTranslateY.value }],
  }));

  useEffect(() => {
    if (!animateOrbit) {
      progress.setValue(0);
      return;
    }

    const animation = Animated.loop(
      Animated.timing(progress, {
        duration: 18000,
        toValue: 1,
        useNativeDriver: true,
      }),
    );
    animation.start();
    return () => animation.stop();
  }, [animateOrbit, progress]);

  const rotation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const counterRotation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'],
  });

  const content = (
    <Reanimated.View style={styles.welcomeContent} testID="welcome-content">
      <View style={styles.orbitArea}>
        <WelcomeRing
          animateEntrance={animateEntrance}
          backgroundColor={themeColors.text.primary}
          delay={WELCOME_RING_DELAYS[0]}
          initialScale={WELCOME_RING_INITIAL_SCALES[0]}
          style={styles.ringOuter}
        />
        <WelcomeRing
          animateEntrance={animateEntrance}
          backgroundColor={themeColors.text.primary}
          delay={WELCOME_RING_DELAYS[1]}
          initialScale={WELCOME_RING_INITIAL_SCALES[1]}
          style={styles.ringMiddle}
        />
        <WelcomeRing
          animateEntrance={animateEntrance}
          backgroundColor={themeColors.text.primary}
          delay={WELCOME_RING_DELAYS[2]}
          initialScale={WELCOME_RING_INITIAL_SCALES[2]}
          style={styles.ringInner}
        />
        <Reanimated.View style={[styles.lotus, logoAnimatedStyle]}>
          <Image
            accessibilityLabel="Perifit lotus"
            source={require('./assets/perifit-lotus.png')}
            style={styles.fillImage}
          />
        </Reanimated.View>
        <Animated.View
          accessibilityLabel="Orbiting avatars"
          style={[styles.avatarOrbit, { transform: [{ rotate: rotation }] }]}
        >
          {AVATARS.map((avatar, index) => (
            <WelcomeAvatar
              animateEntrance={animateEntrance}
              counterRotation={counterRotation}
              delay={WELCOME_AVATAR_DELAYS[index]}
              key={index}
              position={avatarPositions[index]}
              source={avatar}
            />
          ))}
        </Animated.View>
      </View>

      <Reanimated.View style={[styles.welcomeCopy, copyAnimatedStyle]}>
        <Text
          style={[
            typography.h1,
            {
              color: themeColors.text.inversedRemainsWhite,
            },
            styles.centeredText,
          ]}
        >
          Welcome Sophie
        </Text>
        <Text
          style={[
            typography.body,
            {
              color: themeColors.text.inversedRemainsWhite,
            },
            styles.centeredText,
          ]}
        >
          Your journey toward a healthier pelvic floor is about to start.
        </Text>
      </Reanimated.View>

      <Reanimated.View style={buttonAnimatedStyle}>
        <Button
          title="Start"
          onPress={onStart}
          variant="inversed"
          style={styles.welcomeButton}
        />
      </Reanimated.View>
    </Reanimated.View>
  );

  return (
    <ScreenShell
      backgroundColor={themeColors.fill.greenScreen}
      showStatusBar={showStatusBar}
    >
      {content}
    </ScreenShell>
  );
}

function PrivacyWelcomeWave({
  buttonFrame,
  hostFrame,
  onTransitionComplete,
}: PrivacyWelcomeTransition & {
  onTransitionComplete: () => void;
}): React.JSX.Element {
  const { themeColors } = useTheme();
  const localButtonX = buttonFrame.x - hostFrame.x;
  const localButtonY = buttonFrame.y - hostFrame.y;
  const localButtonBottom =
    hostFrame.height - localButtonY - buttonFrame.height;
  const pulseOffset = Math.min(spacing.xs, localButtonX);
  const pulseLeft = localButtonX - pulseOffset;
  const pulseWidth = buttonFrame.width + pulseOffset * 2;

  const overlayBottom = useSharedValue(localButtonBottom);
  const overlayBottomRadius = useSharedValue(radius.xl);
  const overlayLeft = useSharedValue(localButtonX);
  const overlayTop = useSharedValue(localButtonY);
  const overlayTopRadius = useSharedValue(radius.xl);
  const overlayWidth = useSharedValue(buttonFrame.width);
  const completionProgress = useSharedValue(0);
  const labelOpacity = useSharedValue(1);

  useEffect(() => {
    const easeOut = ReanimatedEasing.out(ReanimatedEasing.cubic);

    labelOpacity.value = withTiming(0, {
      duration: PRIVACY_WELCOME_LABEL_FADE_DURATION,
      easing: ReanimatedEasing.linear,
    });

    overlayLeft.value = withSequence(
      withTiming(pulseLeft, {
        duration: PRIVACY_WELCOME_PULSE_DURATION,
        easing: easeOut,
      }),
      withTiming(0, {
        duration: PRIVACY_WELCOME_MERGE_DURATION,
        easing: easeOut,
      }),
    );
    overlayWidth.value = withSequence(
      withTiming(pulseWidth, {
        duration: PRIVACY_WELCOME_PULSE_DURATION,
        easing: easeOut,
      }),
      withTiming(hostFrame.width, {
        duration: PRIVACY_WELCOME_MERGE_DURATION,
        easing: easeOut,
      }),
    );
    overlayBottom.value = withDelay(
      PRIVACY_WELCOME_PULSE_DURATION,
      withTiming(0, {
        duration: PRIVACY_WELCOME_MERGE_DURATION,
        easing: easeOut,
      }),
    );
    overlayTop.value = withDelay(
      PRIVACY_WELCOME_PULSE_DURATION + PRIVACY_WELCOME_MERGE_DURATION,
      withTiming(0, {
        duration: PRIVACY_WELCOME_RISE_DURATION,
        easing: easeOut,
      }),
    );
    overlayBottomRadius.value = withDelay(
      PRIVACY_WELCOME_PULSE_DURATION,
      withTiming(0, {
        duration: PRIVACY_WELCOME_MERGE_DURATION,
        easing: easeOut,
      }),
    );
    overlayTopRadius.value = withDelay(
      PRIVACY_WELCOME_PULSE_DURATION,
      withSequence(
        withTiming(radius.md, {
          duration: PRIVACY_WELCOME_MERGE_DURATION,
          easing: easeOut,
        }),
        withTiming(0, {
          duration: PRIVACY_WELCOME_RISE_DURATION,
          easing: easeOut,
        }),
      ),
    );
    completionProgress.value = withTiming(
      1,
      {
        duration: PRIVACY_WELCOME_TRANSITION_DURATION,
        easing: ReanimatedEasing.linear,
      },
      finished => {
        if (finished) {
          runOnJS(onTransitionComplete)();
        }
      },
    );

    return () => {
      cancelAnimation(completionProgress);
      cancelAnimation(overlayBottom);
      cancelAnimation(overlayBottomRadius);
      cancelAnimation(overlayLeft);
      cancelAnimation(overlayTop);
      cancelAnimation(overlayTopRadius);
      cancelAnimation(overlayWidth);
      cancelAnimation(labelOpacity);
    };
  }, [
    completionProgress,
    hostFrame.width,
    labelOpacity,
    onTransitionComplete,
    overlayBottom,
    overlayBottomRadius,
    overlayLeft,
    overlayTop,
    overlayTopRadius,
    overlayWidth,
    pulseLeft,
    pulseWidth,
  ]);

  const overlayAnimatedStyle = useAnimatedStyle(() => {
    return {
      bottom: overlayBottom.value,
      borderBottomLeftRadius: overlayBottomRadius.value,
      borderBottomRightRadius: overlayBottomRadius.value,
      borderTopLeftRadius: overlayTopRadius.value,
      borderTopRightRadius: overlayTopRadius.value,
      left: overlayLeft.value,
      top: overlayTop.value,
      width: overlayWidth.value,
    };
  });
  const labelAnimatedStyle = useAnimatedStyle(() => ({
    opacity: labelOpacity.value,
  }));
  return (
    <Reanimated.View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      pointerEvents="none"
      style={[
        styles.privacyWelcomeOverlay,
        { backgroundColor: themeColors.fill.greenScreen },
        overlayAnimatedStyle,
      ]}
      testID="privacy-welcome-wave"
    >
      <Reanimated.View
        style={[
          styles.morphButtonLabel,
          {
            height: buttonFrame.height,
            width: buttonFrame.width,
          },
          labelAnimatedStyle,
        ]}
      >
        <Button title="Accept" onPress={() => {}} style={styles.morphButton} />
      </Reanimated.View>
    </Reanimated.View>
  );
}

function measureInWindow(
  ref: React.RefObject<View | null>,
): Promise<MeasuredFrame | null> {
  return new Promise(resolve => {
    const view = ref.current;
    if (!view) {
      resolve(null);
      return;
    }

    view.measureInWindow((x, y, width, height) => {
      if (width <= 0 || height <= 0) {
        resolve(null);
        return;
      }

      resolve({ height, width, x, y });
    });
  });
}

function ProductScreen({ onContinue }: { onContinue: () => void }) {
  const { themeColors, typography } = useTheme();
  const [hoveredProduct, setHoveredProduct] = useState<Product | 'none' | null>(
    null,
  );

  return (
    <View style={styles.questionPage}>
      <View style={styles.questionHeaderSpacer} />
      <View style={styles.questionContent}>
        <TitleBlock
          title="Which Perifit product do you have?"
          subtitle="This app works with a state-of-the-art probe developed to optimize pelvic floor training."
        />

        <View style={styles.productGrid}>
          {PRODUCTS.map(product => (
            <Pressable
              accessibilityLabel={product.title}
              accessibilityRole="button"
              key={product.id}
              onHoverIn={() => setHoveredProduct(product.id)}
              onHoverOut={() =>
                setHoveredProduct(currentProduct =>
                  currentProduct === product.id ? null : currentProduct,
                )
              }
              onPress={onContinue}
              style={[
                styles.productCard,
                { backgroundColor: themeColors.fill.primary },
              ]}
            >
              {({ pressed }) => (
                <>
                  {hoveredProduct === product.id || pressed ? (
                    <View
                      pointerEvents="none"
                      style={[
                        styles.productHoverOverlay,
                        { backgroundColor: themeColors.fill.hover },
                      ]}
                    />
                  ) : null}
                  {product.image ? (
                    <Image source={product.image} style={styles.productImage} />
                  ) : (
                    <Text style={styles.productEmoji}>{product.emoji}</Text>
                  )}
                  <Text style={[typography.body, styles.productTitle]}>
                    {product.title}
                  </Text>
                  <Image
                    source={Images.arrowNextIcon}
                    style={styles.productArrow}
                  />
                </>
              )}
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

function ChoiceListScreen({
  title,
  subtitle,
  choices,
  onSelect,
}: {
  title: string;
  subtitle: string;
  choices: string[];
  onSelect: (choice: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const select = (choice: string) => {
    setSelected(choice);
    onSelect(choice);
  };

  return (
    <View style={styles.questionPage}>
      <View style={styles.questionHeaderSpacer} />
      <View style={styles.questionContent}>
        <TitleBlock title={title} subtitle={subtitle} />
        <View style={styles.choiceList}>
          {choices.map(choice => (
            <ListItem
              key={choice}
              onPress={() => select(choice)}
              selected={selected === choice}
              style={styles.choiceItem}
              title={choice}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

function BirthYearScreen({ onContinue }: { onContinue: () => void }) {
  const { themeColors, typography } = useTheme();
  const [birthYear, setBirthYear] = useState(DEFAULT_BIRTH_YEAR);
  const [yearPickerWidth, setYearPickerWidth] = useState(normalize(390));
  const initialIndex = DEFAULT_BIRTH_YEAR - YEARS[0];

  const updateYear = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / TICK_WIDTH);
    setBirthYear(YEARS[Math.max(0, Math.min(YEARS.length - 1, index))]);
  };

  const measureYearPicker = (event: LayoutChangeEvent) => {
    setYearPickerWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={styles.questionPage}>
      <View style={styles.questionHeaderSpacer} />
      <View style={styles.questionContent}>
        <TitleBlock
          title="When were you born?"
          subtitle="Slide right or left to select your birth year"
        />

        <View style={styles.yearSelection}>
          <View style={styles.yearValue}>
            <Text
              style={[
                typography.big,
                styles.yearValueText,
                { color: themeColors.text.active },
              ]}
            >
              {birthYear}
            </Text>
            <Text
              style={[typography.body, { color: themeColors.text.secondary }]}
            >
              My year of birth
            </Text>
          </View>

          <View onLayout={measureYearPicker} style={styles.yearPicker}>
            <FlatList
              accessibilityLabel="Birth year carousel"
              contentContainerStyle={{
                paddingHorizontal: yearPickerWidth / 2 - TICK_WIDTH / 2,
              }}
              data={YEARS}
              decelerationRate="fast"
              getItemLayout={(_, index) => ({
                index,
                length: TICK_WIDTH,
                offset: TICK_WIDTH * index,
              })}
              horizontal
              initialScrollIndex={initialIndex}
              keyExtractor={year => String(year)}
              onMomentumScrollEnd={updateYear}
              onScroll={updateYear}
              onScrollEndDrag={updateYear}
              renderItem={({ item }) => {
                const isLabel = item % 5 === 0;
                return (
                  <View style={styles.yearTickColumn}>
                    <View
                      style={[
                        styles.yearTick,
                        isLabel ? styles.yearTickMajor : null,
                        { backgroundColor: themeColors.border.primary },
                      ]}
                    />
                    {isLabel ? (
                      <Text style={[typography.caption, styles.yearLabel]}>
                        {item}
                      </Text>
                    ) : null}
                  </View>
                );
              }}
              showsHorizontalScrollIndicator={false}
              snapToAlignment="start"
              snapToInterval={TICK_WIDTH}
              scrollEventThrottle={16}
            />
            <View
              pointerEvents="none"
              style={[
                styles.selectedYearTick,
                { backgroundColor: themeColors.fill.active },
              ]}
            />
            <LinearGradient
              colors={[
                themeColors.fill.page,
                themeColors.fill.gradientFadePage,
              ]}
              end={{ x: 1, y: 0 }}
              pointerEvents="none"
              start={{ x: 0, y: 0 }}
              style={[styles.yearFade, styles.yearFadeLeft]}
            />
            <LinearGradient
              colors={[
                themeColors.fill.gradientFadePage,
                themeColors.fill.page,
              ]}
              end={{ x: 1, y: 0 }}
              pointerEvents="none"
              start={{ x: 0, y: 0 }}
              style={[styles.yearFade, styles.yearFadeRight]}
            />
          </View>
        </View>
      </View>
      <BottomActionGroup>
        <Button title="Continue" onPress={onContinue} />
      </BottomActionGroup>
    </View>
  );
}

function QuestionFlowShell({
  children,
  onBack,
  showStatusBar = true,
}: {
  children: React.ReactNode;
  onBack: () => void;
  showStatusBar?: boolean;
}): React.JSX.Element {
  const { themeColors } = useTheme();

  return (
    <ScreenShell
      backgroundColor={themeColors.fill.page}
      showStatusBar={showStatusBar}
    >
      <View style={styles.questionFlowFrame}>
        <View style={styles.fixedQuestionHeader}>
          <FlowHeader onBack={onBack} onHelp={() => {}} />
        </View>
        <View style={styles.flowViewport}>{children}</View>
      </View>
    </ScreenShell>
  );
}

function IntroTransitionShell({
  children,
  onBack,
  showHelp,
}: {
  children: React.ReactNode;
  onBack: () => void;
  showHelp: boolean;
}): React.JSX.Element {
  const { themeColors } = useTheme();

  return (
    <ScreenShell backgroundColor={themeColors.fill.page}>
      <View style={styles.questionFlowFrame}>
        <View style={styles.fixedQuestionHeader}>
          <FlowHeader
            onBack={onBack}
            onHelp={showHelp ? () => {} : undefined}
          />
        </View>
        <View style={styles.flowViewport}>{children}</View>
      </View>
    </ScreenShell>
  );
}

export function OnboardingFlow(): React.JSX.Element {
  const [settledStepIndex, setSettledStepIndex] = useState(0);
  const [transition, setTransition] = useState<{
    direction: 1 | -1;
    fromIndex: number;
    toIndex: number;
  } | null>(null);
  const [privacyWelcomeTransition, setPrivacyWelcomeTransition] =
    useState<PrivacyWelcomeTransition | null>(null);
  const [welcomeEntranceActive, setWelcomeEntranceActive] = useState(false);
  const transitionProgress = useRef(new Animated.Value(0)).current;
  const transitionLocked = useRef(false);
  const transitionHostRef = useRef<View>(null);
  const privacyAcceptButtonRef = useRef<View>(null);

  const welcomeStepIndex = FLOW.indexOf('welcome');

  const finishWelcomeEntrance = () => {
    setWelcomeEntranceActive(false);
    transitionLocked.current = false;
  };

  const finishPrivacyWelcomeTransition = () => {
    setSettledStepIndex(welcomeStepIndex);
    setPrivacyWelcomeTransition(null);
    setWelcomeEntranceActive(true);
  };

  const startPrivacyWelcomeTransition = async () => {
    if (transitionLocked.current) {
      return;
    }

    transitionLocked.current = true;

    const reduceMotionEnabled = await AccessibilityInfo.isReduceMotionEnabled();
    if (reduceMotionEnabled) {
      setSettledStepIndex(welcomeStepIndex);
      transitionLocked.current = false;
      return;
    }

    const [buttonFrame, hostFrame] = await Promise.all([
      measureInWindow(privacyAcceptButtonRef),
      measureInWindow(transitionHostRef),
    ]);

    if (!buttonFrame || !hostFrame) {
      setSettledStepIndex(welcomeStepIndex);
      transitionLocked.current = false;
      return;
    }

    setPrivacyWelcomeTransition({ buttonFrame, hostFrame });
  };

  const navigate = (direction: 1 | -1) => {
    if (transitionLocked.current) {
      return;
    }

    const toIndex = Math.max(
      0,
      Math.min(FLOW.length - 1, settledStepIndex + direction),
    );
    if (toIndex === settledStepIndex) {
      return;
    }

    const fromIndex = settledStepIndex;
    const fromStep = FLOW[fromIndex];
    const toStep = FLOW[toIndex];
    const isQuestionTransition =
      QUESTION_STEPS.has(FLOW[fromIndex]) && QUESTION_STEPS.has(FLOW[toIndex]);
    const isAuthPrivacyTransition =
      (fromStep === 'auth' && toStep === 'privacy') ||
      (fromStep === 'privacy' && toStep === 'auth');
    const isWelcomeProductTransition =
      (fromStep === 'welcome' && toStep === 'product') ||
      (fromStep === 'product' && toStep === 'welcome');
    const shouldAnimate =
      isQuestionTransition ||
      isAuthPrivacyTransition ||
      isWelcomeProductTransition;

    if (!shouldAnimate) {
      setSettledStepIndex(toIndex);
      return;
    }

    transitionLocked.current = true;
    transitionProgress.setValue(0);
    setTransition({ direction, fromIndex, toIndex });
    Animated.timing(transitionProgress, {
      duration: SCREEN_TRANSITION_DURATION,
      easing: Easing.out(Easing.cubic),
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      setSettledStepIndex(toIndex);
      setTransition(null);
      transitionLocked.current = false;
    });
  };

  const next = () => navigate(1);
  const back = () => navigate(-1);

  const renderQuestion = (stepIndex: number) => {
    const step = FLOW[stepIndex];
    switch (step) {
      case 'product':
        return <ProductScreen onContinue={next} />;
      case 'purchase':
        return (
          <ChoiceListScreen
            choices={['Website', 'Amazon', 'Other reseller', 'It was a gift']}
            onSelect={next}
            subtitle="This is straight from our curious minds"
            title="Where did you buy it ?"
          />
        );
      case 'birthYear':
        return <BirthYearScreen onContinue={next} />;
      case 'menstrualStatus':
        return (
          <ChoiceListScreen
            choices={[
              'Pre Menopause',
              'Post Menopause',
              'Unsure or in the menopausal transition',
            ]}
            onSelect={() => {}}
            subtitle="Hormone levels impact your pelvic floor health."
            title="What is your menstrual status ?"
          />
        );
    }
  };

  const renderIntro = (stepIndex: number) => {
    switch (FLOW[stepIndex]) {
      case 'auth':
        return <AuthScreen onContinue={next} />;
      case 'privacy':
        return (
          <PrivacyScreen
            acceptButtonRef={privacyAcceptButtonRef}
            acceptHidden={privacyWelcomeTransition !== null}
            onAccept={startPrivacyWelcomeTransition}
            onBack={back}
          />
        );
      case 'welcome':
        return (
          <OrbitingWelcome
            animateEntrance={welcomeEntranceActive}
            onEntranceComplete={finishWelcomeEntrance}
            onStart={next}
          />
        );
      default:
        return null;
    }
  };

  const renderTransitionStep = (stepIndex: number) => {
    const step = FLOW[stepIndex];

    if (QUESTION_STEPS.has(step)) {
      return renderQuestion(stepIndex);
    }

    switch (step) {
      case 'auth':
        return <AuthScreen contentOnly onContinue={next} />;
      case 'privacy':
        return <PrivacyScreen contentOnly onAccept={next} onBack={back} />;
      default:
        return renderIntro(stepIndex);
    }
  };

  if (!transition) {
    const settledStep = FLOW[settledStepIndex];
    if (QUESTION_STEPS.has(settledStep)) {
      return (
        <QuestionFlowShell onBack={back}>
          <Animated.View
            key={`question-${settledStepIndex}`}
            style={styles.transitionScreen}
          >
            {renderQuestion(settledStepIndex)}
          </Animated.View>
        </QuestionFlowShell>
      );
    }

    return (
      <View
        collapsable={false}
        pointerEvents={
          privacyWelcomeTransition || welcomeEntranceActive ? 'none' : 'auto'
        }
        ref={transitionHostRef}
        style={styles.flowViewport}
        testID="onboarding-transition-host"
      >
        <Animated.View
          key={`intro-${settledStepIndex}`}
          style={styles.transitionScreen}
        >
          {renderIntro(settledStepIndex)}
        </Animated.View>
        {privacyWelcomeTransition ? (
          <PrivacyWelcomeWave
            {...privacyWelcomeTransition}
            onTransitionComplete={finishPrivacyWelcomeTransition}
          />
        ) : null}
      </View>
    );
  }

  const outgoingTranslateX = transitionProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -transition.direction * UIConstants.SCREEN_WIDTH],
  });
  const incomingTranslateX = transitionProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [transition.direction * UIConstants.SCREEN_WIDTH, 0],
  });

  const isQuestionTransition =
    QUESTION_STEPS.has(FLOW[transition.fromIndex]) &&
    QUESTION_STEPS.has(FLOW[transition.toIndex]);
  const transitionFromStep = FLOW[transition.fromIndex];
  const transitionToStep = FLOW[transition.toIndex];
  const isWelcomeProductTransition =
    (transitionFromStep === 'welcome' && transitionToStep === 'product') ||
    (transitionFromStep === 'product' && transitionToStep === 'welcome');

  if (isWelcomeProductTransition) {
    const renderFullScreenStep = (
      stepIndex: number,
      showStatusBar: boolean,
    ) => {
      if (QUESTION_STEPS.has(FLOW[stepIndex])) {
        return (
          <QuestionFlowShell onBack={back} showStatusBar={showStatusBar}>
            {renderQuestion(stepIndex)}
          </QuestionFlowShell>
        );
      }

      return <OrbitingWelcome onStart={next} showStatusBar={showStatusBar} />;
    };

    return (
      <View style={styles.flowViewport}>
        <Animated.View
          key={`${
            QUESTION_STEPS.has(transitionFromStep) ? 'question' : 'intro'
          }-${transition.fromIndex}`}
          pointerEvents="none"
          style={[
            styles.transitionScreen,
            { transform: [{ translateX: outgoingTranslateX }] },
          ]}
        >
          {renderFullScreenStep(transition.fromIndex, true)}
        </Animated.View>
        <Animated.View
          key={`${
            QUESTION_STEPS.has(transitionToStep) ? 'question' : 'intro'
          }-${transition.toIndex}`}
          pointerEvents="none"
          style={[
            styles.transitionScreen,
            { transform: [{ translateX: incomingTranslateX }] },
          ]}
        >
          {renderFullScreenStep(transition.toIndex, false)}
        </Animated.View>
      </View>
    );
  }

  const transitionKeyPrefix = isQuestionTransition ? 'question' : 'intro';

  const transitionScreens = (
    <>
      <Animated.View
        key={`${transitionKeyPrefix}-${transition.fromIndex}`}
        pointerEvents="none"
        style={[
          styles.transitionScreen,
          { transform: [{ translateX: outgoingTranslateX }] },
        ]}
      >
        {renderTransitionStep(transition.fromIndex)}
      </Animated.View>
      <Animated.View
        key={`${transitionKeyPrefix}-${transition.toIndex}`}
        pointerEvents="none"
        style={[
          styles.transitionScreen,
          { transform: [{ translateX: incomingTranslateX }] },
        ]}
      >
        {renderTransitionStep(transition.toIndex)}
      </Animated.View>
    </>
  );

  if (!isQuestionTransition) {
    const showHelp = transitionFromStep === 'privacy';

    return (
      <IntroTransitionShell
        onBack={showHelp ? back : () => {}}
        showHelp={showHelp}
      >
        {transitionScreens}
      </IntroTransitionShell>
    );
  }

  return (
    <QuestionFlowShell onBack={back}>{transitionScreens}</QuestionFlowShell>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  flowViewport: { flex: 1, overflow: 'hidden' },
  transitionScreen: { ...StyleSheet.absoluteFillObject },
  questionFlowFrame: { flex: 1 },
  questionPage: { flex: 1 },
  introHeaderSpacer: { height: normalize(56) },
  questionHeaderSpacer: { height: normalize(56) },
  questionContent: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xs,
  },
  fixedQuestionHeader: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  safeArea: { flex: 1 },
  deviceFrame: {
    flex: 1,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: normalize(56),
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
  },
  headerIconPlaceholder: {
    height: iconSize.md,
    width: iconSize.md,
  },
  headerIconButton: {
    height: iconSize.md,
    width: iconSize.md,
  },
  titleBlock: { gap: gap.s },
  authContent: {
    gap: gap.lg,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xs,
  },
  socialStack: { gap: gap.button },
  socialButton: { width: '100%' },
  socialIcon: {
    height: iconSize.md,
    resizeMode: 'contain',
    width: iconSize.md,
  },
  googleButtonBorder: { borderWidth: 1 },
  dividerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: gap.md,
  },
  divider: { flex: 1, height: StyleSheet.hairlineWidth },
  formStack: { gap: gap.form },
  forgotPassword: { alignSelf: 'flex-end' },
  signupLink: { alignItems: 'center', paddingVertical: spacing.xs },
  privacyScreen: { flex: 1 },
  hiddenAcceptButton: { opacity: 0 },
  privacyContent: {
    gap: gap.xl,
    paddingBottom: normalize(120),
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xs,
  },
  privacyCopy: { gap: gap.s },
  bottomActionGroup: {
    bottom: 0,
    left: 0,
    paddingTop: spacing.md,
    position: 'absolute',
    right: 0,
  },
  bottomActionButtons: {
    gap: gap.button,
    paddingHorizontal: spacing.md,
  },
  privacyWelcomeOverlay: {
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 2,
  },
  morphButtonLabel: {
    left: 0,
    position: 'absolute',
    top: 0,
  },
  morphButton: {
    height: '100%',
    width: '100%',
  },
  welcomeContent: {
    flex: 1,
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingBottom: spacing.s,
  },
  orbitArea: {
    alignSelf: 'center',
    height: normalize(475),
    maxWidth: normalize(390),
    position: 'relative',
    width: '100%',
  },
  ring: {
    borderRadius: radius.xl,
    position: 'absolute',
  },
  ringOuter: {
    height: normalize(475),
    left: normalize(-42),
    top: spacing.lg,
    width: normalize(475),
  },
  ringMiddle: {
    height: normalize(353),
    left: normalize(19),
    top: normalize(93),
    width: normalize(353),
  },
  ringInner: {
    height: normalize(239),
    left: normalize(75),
    top: normalize(150),
    width: normalize(239),
  },
  lotus: {
    height: normalize(121),
    left: normalize(135),
    position: 'absolute',
    top: normalize(211),
    width: normalize(121),
  },
  fillImage: { height: '100%', width: '100%' },
  avatarOrbit: { ...StyleSheet.absoluteFillObject },
  avatar: { position: 'absolute' },
  avatar1: {
    height: normalize(45),
    left: normalize(173),
    top: normalize(70),
    width: normalize(45),
  },
  avatar2: {
    height: normalize(49),
    left: normalize(26),
    top: normalize(213),
    width: normalize(49),
  },
  avatar3: {
    height: normalize(33),
    left: normalize(179),
    top: normalize(366),
    width: normalize(33),
  },
  avatar4: {
    height: normalize(37),
    left: normalize(322),
    top: normalize(219),
    width: normalize(37),
  },
  welcomeCopy: {
    gap: gap.s,
    paddingHorizontal: spacing.md,
  },
  centeredText: { textAlign: 'center' },
  welcomeButton: {
    marginHorizontal: spacing.md,
    width: 'auto',
  },
  productGrid: {
    gap: gap.form,
    marginTop: spacing.lg,
  },
  productCard: {
    alignItems: 'center',
    borderRadius: radius.md,
    flexDirection: 'row',
    gap: gap.lg,
    minHeight: normalize(100),
    overflow: 'hidden',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.s,
  },
  productImage: {
    height: normalize(68),
    resizeMode: 'contain',
    width: normalize(52),
  },
  productEmoji: {
    fontSize: normalize(30),
    lineHeight: normalize(46),
    width: normalize(52),
  },
  productHoverOverlay: { ...StyleSheet.absoluteFillObject },
  productTitle: { flex: 1 },
  productArrow: { height: iconSize.md, width: iconSize.md },
  choiceList: { gap: gap.md, marginTop: spacing.lg },
  choiceItem: { minHeight: normalize(56) },
  yearSelection: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  yearValue: {
    alignItems: 'center',
    gap: gap.xs,
  },
  yearValueText: { fontFamily: FontNames.bold },
  yearPicker: {
    height: normalize(76),
    marginTop: spacing.lg,
    position: 'relative',
    width: '100%',
  },
  yearTickColumn: {
    alignItems: 'center',
    height: normalize(76),
    overflow: 'visible',
    width: TICK_WIDTH,
  },
  yearTick: { height: normalize(18), width: normalize(3) },
  yearTickMajor: { height: normalize(30) },
  yearLabel: {
    fontSize: normalize(10),
    marginTop: gap.s,
    minWidth: normalize(44),
    textAlign: 'center',
  },
  selectedYearTick: {
    height: normalize(30),
    left: '50%',
    marginLeft: normalize(-1.5),
    position: 'absolute',
    top: 0,
    width: normalize(3),
    zIndex: 2,
  },
  yearFade: {
    bottom: 0,
    position: 'absolute',
    top: 0,
    width: spacing.xl,
  },
  yearFadeLeft: { left: 0 },
  yearFadeRight: { right: 0 },
});

const avatarPositions = [
  styles.avatar1,
  styles.avatar2,
  styles.avatar3,
  styles.avatar4,
] as const;
