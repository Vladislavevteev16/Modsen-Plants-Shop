import s from './Radio.module.scss';

type RadioProps = {
  value: string;
  label: string;
  name: string;
  checked: boolean;
  handleSelectOption: (type: string, value: string) => void;
};

export const Radio = ({ value, label, name, checked, handleSelectOption }: RadioProps) => {
  return (
    <label className={s.radioLabel}>
      <input
        className={s.radio}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => handleSelectOption(name, value)}
      />
      <span className={s.text}>{label}</span>
    </label>
  );
};
