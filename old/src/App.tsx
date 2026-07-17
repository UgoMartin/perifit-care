import { OnboardingSuccess } from '../projects/Onboarding';
import './App.css';

function App() {
  return (
    <div className="app-preview">
      <OnboardingSuccess
        onClose={() => console.log('Close clicked')}
        onContinue={() => console.log('Thank you clicked')}
      />
    </div>
  );
}

export default App;
