import React, { useEffect, useRef, useState } from 'react';
import {
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
import LinearGradient from 'react-native-linear-gradient';
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
}: {
  children: React.ReactNode;
  backgroundColor: string;
}): React.JSX.Element {
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={[styles.safeArea, { backgroundColor }]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={backgroundColor}
      />
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
        <Text
          style={[typography.body, { color: themeColors.text.primary }]}
        >
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
        colors={[
          themeColors.fill.gradientFadePage,
          themeColors.fill.page,
        ]}
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
      icon={
        <Image
          source={SOCIAL_ICONS[platform]}
          style={styles.socialIcon}
        />
      }
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
            <SocialButton
              platform="google"
              title="Sign in with Google"
            />
            <SocialButton
              platform="facebook"
              title="Sign in with Facebook"
            />
            <SocialButton
              platform="apple"
              title="Sign up with Apple"
            />
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
    <ScreenShell backgroundColor={themeColors.fill.page}>
      {content}
    </ScreenShell>
  );
}

function PrivacyScreen({
  contentOnly = false,
  onAccept,
  onBack,
}: {
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
              <Text
                key={paragraph}
                style={typography.body}
              >
                {paragraph}
              </Text>
            ))}
          </View>
        </ScrollView>
        <BottomActionGroup>
          <Button
            title="Accept"
            onPress={onAccept}
          />
        </BottomActionGroup>
    </View>
  );

  if (contentOnly) {
    return content;
  }

  return (
    <ScreenShell backgroundColor={themeColors.fill.page}>
      {content}
    </ScreenShell>
  );
}

function OrbitingWelcome({ onStart }: { onStart: () => void }) {
  const { themeColors, typography } = useTheme();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(progress, {
        duration: 18000,
        toValue: 1,
        useNativeDriver: true,
      }),
    );
    animation.start();
    return () => animation.stop();
  }, [progress]);

  const rotation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const counterRotation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'],
  });

  return (
    <ScreenShell backgroundColor={themeColors.fill.greenScreen}>
      <View style={styles.welcomeContent}>
        <View style={styles.orbitArea}>
          <View
            style={[
              styles.ring,
              styles.ringOuter,
              { backgroundColor: themeColors.text.primary },
            ]}
          />
          <View
            style={[
              styles.ring,
              styles.ringMiddle,
              { backgroundColor: themeColors.text.primary },
            ]}
          />
          <View
            style={[
              styles.ring,
              styles.ringInner,
              { backgroundColor: themeColors.text.primary },
            ]}
          />
          <Image
            accessibilityLabel="Perifit lotus"
            source={require('./assets/perifit-lotus.png')}
            style={styles.lotus}
          />
          <Animated.View
            accessibilityLabel="Orbiting avatars"
            style={[styles.avatarOrbit, { transform: [{ rotate: rotation }] }]}
          >
            {AVATARS.map((avatar, index) => (
              <Animated.Image
                key={index}
                source={avatar}
                style={[
                  styles.avatar,
                  avatarPositions[index],
                  { transform: [{ rotate: counterRotation }] },
                ]}
              />
            ))}
          </Animated.View>
        </View>

        <View style={styles.welcomeCopy}>
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
        </View>

        <Button
          title="Start"
          onPress={onStart}
          variant="inversed"
          style={styles.welcomeButton}
        />
      </View>
    </ScreenShell>
  );
}

function ProductScreen({
  onContinue,
}: {
  onContinue: () => void;
}) {
  const { themeColors, typography } = useTheme();
  const [hoveredProduct, setHoveredProduct] = useState<
    Product | 'none' | null
  >(null);

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
        <TitleBlock
          title={title}
          subtitle={subtitle}
        />
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

  const updateYear = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
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

          <View
            onLayout={measureYearPicker}
            style={styles.yearPicker}
          >
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
        <Button
          title="Continue"
          onPress={onContinue}
        />
      </BottomActionGroup>
    </View>
  );
}

function QuestionFlowShell({
  children,
  onBack,
}: {
  children: React.ReactNode;
  onBack: () => void;
}): React.JSX.Element {
  const { themeColors } = useTheme();

  return (
    <ScreenShell backgroundColor={themeColors.fill.page}>
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
  const transitionProgress = useRef(new Animated.Value(0)).current;
  const transitionLocked = useRef(false);

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
      QUESTION_STEPS.has(FLOW[fromIndex]) &&
      QUESTION_STEPS.has(FLOW[toIndex]);
    const isAuthPrivacyTransition =
      (fromStep === 'auth' && toStep === 'privacy') ||
      (fromStep === 'privacy' && toStep === 'auth');
    const shouldAnimate =
      isQuestionTransition || isAuthPrivacyTransition;

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
        return <PrivacyScreen onAccept={next} onBack={back} />;
      case 'welcome':
        return <OrbitingWelcome onStart={next} />;
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
        return (
          <PrivacyScreen
            contentOnly
            onAccept={next}
            onBack={back}
          />
        );
      default:
        return renderIntro(stepIndex);
    }
  };

  if (!transition) {
    const settledStep = FLOW[settledStepIndex];
    if (QUESTION_STEPS.has(settledStep)) {
      return (
        <QuestionFlowShell onBack={back}>
          {renderQuestion(settledStepIndex)}
        </QuestionFlowShell>
      );
    }

    return (
      <View style={styles.flowViewport}>
        {renderIntro(settledStepIndex)}
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

  const transitionScreens = (
    <>
      <Animated.View
        key={`outgoing-${transition.fromIndex}`}
        pointerEvents="none"
        style={[
          styles.transitionScreen,
          { transform: [{ translateX: outgoingTranslateX }] },
        ]}
      >
        {renderTransitionStep(transition.fromIndex)}
      </Animated.View>
      <Animated.View
        key={`incoming-${transition.toIndex}`}
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

  const isQuestionTransition =
    QUESTION_STEPS.has(FLOW[transition.fromIndex]) &&
    QUESTION_STEPS.has(FLOW[transition.toIndex]);

  if (!isQuestionTransition) {
    const transitionFromStep = FLOW[transition.fromIndex];
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
    <QuestionFlowShell onBack={back}>
      {transitionScreens}
    </QuestionFlowShell>
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
    alignSelf: 'center',
    flex: 1,
    maxWidth: normalize(390),
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
  welcomeContent: {
    flex: 1,
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingBottom: spacing.s,
  },
  orbitArea: {
    height: normalize(475),
    position: 'relative',
    width: '100%',
  },
  ring: {
    borderRadius: radius.xl,
    opacity: 0.05,
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
  productEmoji: { fontSize: normalize(30), lineHeight: normalize(46), width: normalize(52) },
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
