import clsx from 'clsx';

import type { AccordionType } from '../Accordion/types';
import { Radio } from '../Radio/Radio';
import s from './RadioList.module.scss';

type RadioListProps = {
  optionList: readonly string[];
  type: AccordionType;
  selectedValue: string;
  handleSelectOption: (type: AccordionType, value: string) => void;
  isOpen: boolean;
};

export const RadioList = ({
  optionList,
  type,
  selectedValue,
  handleSelectOption,
  isOpen,
}: RadioListProps) => {
  return (
    <div className={clsx(s.radioList, { [s.isOpen]: isOpen })}>
      <ul>
        {optionList.map((option) => (
          <li key={option} className={s.item}>
            <Radio
              type={type}
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
