/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { AccessibilityInfo } from 'react-native';
import App from '../App';

async function renderApp() {
  let renderer: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });

  return renderer!;
}

async function continueToPrivacy(
  renderer: ReactTestRenderer.ReactTestRenderer,
) {
  await ReactTestRenderer.act(async () => {
    renderer.root.findByProps({ title: 'Sign in' }).props.onPress();
    jest.advanceTimersByTime(400);
  });
}

function mockPrivacyMeasurements(
  renderer: ReactTestRenderer.ReactTestRenderer,
) {
  renderer.root.findByProps({
    testID: 'onboarding-transition-host',
  }).instance.measureInWindow = (
    callback: (x: number, y: number, width: number, height: number) => void,
  ) => callback(0, 0, 390, 844);
  renderer.root.findByProps({
    testID: 'privacy-accept-anchor',
  }).instance.measureInWindow = (
    callback: (x: number, y: number, width: number, height: number) => void,
  ) => callback(16, 750, 358, 60);
}

test('renders the onboarding entry screen', async () => {
  const renderer = await renderApp();

  expect(renderer.toJSON()).toBeTruthy();
});

describe('Privacy to Welcome transition', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  test('fills the background before revealing Welcome', async () => {
    const reduceMotionSpy = jest
      .spyOn(AccessibilityInfo, 'isReduceMotionEnabled')
      .mockResolvedValue(false);
    const renderer = await renderApp();
    await continueToPrivacy(renderer);
    mockPrivacyMeasurements(renderer);

    const acceptButton = renderer.root.findByProps({ title: 'Accept' });
    await ReactTestRenderer.act(async () => {
      const transitionPromise = acceptButton.props.onPress();
      acceptButton.props.onPress();
      await transitionPromise;
    });

    expect(reduceMotionSpy).toHaveBeenCalledTimes(1);
    expect(
      renderer.root.findByProps({ testID: 'privacy-welcome-wave' }),
    ).toBeTruthy();
    expect(
      renderer.root.findByProps({ testID: 'onboarding-transition-host' }).props
        .pointerEvents,
    ).toBe('none');
    expect(
      renderer.root.findAllByProps({ testID: 'welcome-content' }),
    ).toHaveLength(0);

    await ReactTestRenderer.act(async () => {
      jest.advanceTimersByTime(259);
    });

    expect(
      renderer.root.findAllByProps({ testID: 'welcome-content' }),
    ).toHaveLength(0);
    expect(
      renderer.root.findByProps({ testID: 'onboarding-transition-host' }).props
        .pointerEvents,
    ).toBe('none');

    await ReactTestRenderer.act(async () => {
      jest.advanceTimersByTime(1);
    });
    expect(
      renderer.root.findAllByProps({ testID: 'privacy-welcome-wave' }),
    ).toHaveLength(0);
    expect(
      renderer.root.findByProps({ testID: 'onboarding-transition-host' }).props
        .pointerEvents,
    ).toBe('none');
    expect(
      renderer.root.findByProps({ testID: 'welcome-content' }),
    ).toBeTruthy();

    await ReactTestRenderer.act(async () => {
      jest.advanceTimersByTime(159);
    });
    expect(
      renderer.root.findByProps({ testID: 'onboarding-transition-host' }).props
        .pointerEvents,
    ).toBe('none');

    await ReactTestRenderer.act(async () => {
      jest.advanceTimersByTime(1);
    });
    expect(
      renderer.root.findByProps({ testID: 'onboarding-transition-host' }).props
        .pointerEvents,
    ).toBe('none');

    await ReactTestRenderer.act(async () => {
      jest.advanceTimersByTime(699);
    });
    expect(
      renderer.root.findByProps({ testID: 'onboarding-transition-host' }).props
        .pointerEvents,
    ).toBe('none');

    await ReactTestRenderer.act(async () => {
      jest.advanceTimersByTime(1);
    });
    expect(
      renderer.root.findByProps({ testID: 'onboarding-transition-host' }).props
        .pointerEvents,
    ).toBe('auto');

    await ReactTestRenderer.act(async () => {
      renderer.root.findByProps({ title: 'Start' }).props.onPress();
    });

    expect(
      renderer.root.findByProps({
        title: 'Which Perifit product do you have?',
      }),
    ).toBeTruthy();
    expect(
      renderer.root.findAllByProps({ testID: 'welcome-content' }).length,
    ).toBeGreaterThan(0);

    await ReactTestRenderer.act(async () => {
      jest.advanceTimersByTime(320);
    });
    expect(
      renderer.root.findAllByProps({ testID: 'welcome-content' }),
    ).toHaveLength(0);
  });

  test('skips the morph when reduced motion is enabled', async () => {
    jest
      .spyOn(AccessibilityInfo, 'isReduceMotionEnabled')
      .mockResolvedValue(true);
    const renderer = await renderApp();
    await continueToPrivacy(renderer);

    await ReactTestRenderer.act(async () => {
      const transitionPromise = renderer.root
        .findByProps({ title: 'Accept' })
        .props.onPress();
      await transitionPromise;
    });

    expect(
      renderer.root.findByProps({ testID: 'welcome-content' }),
    ).toBeTruthy();
    expect(
      renderer.root.findAllByProps({ testID: 'privacy-welcome-wave' }),
    ).toHaveLength(0);
  });
});

describe('Question transitions', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  test('keeps the birth year carousel mounted when its transition settles', async () => {
    jest
      .spyOn(AccessibilityInfo, 'isReduceMotionEnabled')
      .mockResolvedValue(true);
    const renderer = await renderApp();
    await continueToPrivacy(renderer);

    await ReactTestRenderer.act(async () => {
      await renderer.root.findByProps({ title: 'Accept' }).props.onPress();
    });
    await ReactTestRenderer.act(async () => {
      renderer.root.findByProps({ title: 'Start' }).props.onPress();
    });
    await ReactTestRenderer.act(async () => {
      jest.advanceTimersByTime(320);
    });
    await ReactTestRenderer.act(async () => {
      renderer.root
        .findByProps({ accessibilityLabel: 'Perifit Care +' })
        .props.onPress();
    });
    await ReactTestRenderer.act(async () => {
      jest.advanceTimersByTime(320);
    });

    await ReactTestRenderer.act(async () => {
      renderer.root.findByProps({ title: 'Website' }).props.onPress();
    });

    const carouselDuringTransition = renderer.root.findByProps({
      accessibilityLabel: 'Birth year carousel',
    }).instance;

    await ReactTestRenderer.act(async () => {
      jest.advanceTimersByTime(320);
    });

    expect(
      renderer.root.findByProps({
        accessibilityLabel: 'Birth year carousel',
      }).instance,
    ).toBe(carouselDuringTransition);
  });
});
