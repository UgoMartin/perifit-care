import { CloseButton } from './components/CloseButton';
import { PrimaryButton } from './components/PrimaryButton';
import { StatusBar } from './components/StatusBar';
import { StreakIllustration } from './components/StreakIllustration';
import './OnboardingSuccess.css';

type OnboardingSuccessProps = {
  onClose?: () => void;
  onContinue?: () => void;
};

export function OnboardingSuccess({ onClose, onContinue }: OnboardingSuccessProps) {
  return (
    <div className="onboarding-success">
      <StatusBar />

      <header className="onboarding-header">
        <CloseButton onClick={onClose} />
      </header>

      <main className="onboarding-content">
        <StreakIllustration />

        <div className="onboarding-text">
          <h1 className="onboarding-text__title">
            Félicitation, votre premier entrainement est réussi 😍
          </h1>
          <p className="onboarding-text__subtitle">À vous de jouer maintenant</p>
        </div>
      </main>

      <footer className="onboarding-footer">
        <div className="onboarding-footer__fade" aria-hidden="true" />
        <div className="onboarding-footer__actions">
          <PrimaryButton label="Thank you" onClick={onContinue} />
        </div>
        <div className="home-indicator" aria-hidden="true">
          <div className="home-indicator__bar" />
        </div>
      </footer>
    </div>
  );
}
