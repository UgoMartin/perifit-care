/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

test('renders the onboarding entry screen', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });

  expect(renderer!.toJSON()).toBeTruthy();
});
