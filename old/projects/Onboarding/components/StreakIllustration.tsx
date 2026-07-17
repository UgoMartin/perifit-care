import { AnimatedFlame } from './AnimatedFlame';
import streakBarSvg from '../assets/SteakBar.svg?raw';
import './StreakIllustration.css';

export function StreakIllustration() {
  return (
    <div className="streak-illustration">
      <AnimatedFlame />

      <div className="streak-illustration__bar-wrapper">
        <div
          className="streak-illustration__bar"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: streakBarSvg }}
        />
      </div>
    </div>
  );
}
