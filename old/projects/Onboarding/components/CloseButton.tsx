import closeIcon from '../assets/close.svg';
import './CloseButton.css';

type CloseButtonProps = {
  onClick?: () => void;
};

export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      type="button"
      className="close-button"
      onClick={onClick}
      aria-label="Fermer"
    >
      <img src={closeIcon} alt="" width={24} height={24} draggable={false} />
    </button>
  );
}
