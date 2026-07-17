import statusBarImage from '../assets/status-bar.png';
import './StatusBar.css';

export function StatusBar() {
  return (
    <div className="status-bar" aria-hidden="true">
      <img
        className="status-bar__image"
        src={statusBarImage}
        alt=""
        width={390}
        height={44}
        draggable={false}
      />
    </div>
  );
}
