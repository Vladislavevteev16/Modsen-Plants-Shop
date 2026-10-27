import clsx from 'clsx';

import { Radio } from '../Radio';
import s from './RadioList.module.scss';

type RadioListProps = {
  optionList: readonly string[];
  name: string;
  selectedValue: string;
  handleSelectOption: (type: string, value: string) => void;
  isOpen: boolean;
};

export const RadioList = ({
  optionList,
  name,
  selectedValue,
  handleSelectOption,
  isOpen,
}: RadioListProps) => {
  return (
    <div className={clsx(s.radioList, { [s.isOpen]: isOpen })}>
      <ul>
        {optionList.map((option) => (
          <li key={option}>
            <Radio
              name={name}
              value={option}
              label={option}
              checked={selectedValue === option}
              handleSelectOption={handleSelectOption}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
