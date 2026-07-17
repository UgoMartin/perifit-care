import './PrimaryButton.css';

type PrimaryButtonProps = {
  label: string;
  onClick?: () => void;
};

export function PrimaryButton({ label, onClick }: PrimaryButtonProps) {
  return (
    <button type="button" className="primary-button" onClick={onClick}>
      {label}
    </button>
  );
}
