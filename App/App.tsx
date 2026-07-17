import React from 'react';
import { ThemeProvider } from '@perifit/app-design-system';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { OnboardingFlow } from './src/onboarding/OnboardingFlow';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <OnboardingFlow />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
