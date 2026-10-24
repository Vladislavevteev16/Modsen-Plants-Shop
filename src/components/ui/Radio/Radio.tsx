import type { AccordionType } from '../Accordion/types';
import s from './Radio.module.scss';

type RadioProps = {
  value: string;
  label: string;
  type: AccordionType;
  checked: boolean;
  handleSelectOption: (type: AccordionType, value: string) => void;
};

export const Radio = ({ value, label, type, checked, handleSelectOption }: RadioProps) => {
  return (
    <label className={s.radioLabel}>
      <input
        className={s.radio}
        type="radio"
        name={type}
        value={value}
        checked={checked}
        onChange={() => handleSelectOption(type, value)}
      />
      <span className={s.text}>{label}</span>
    </label>
  );
};
