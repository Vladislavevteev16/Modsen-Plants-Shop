import clsx from 'clsx';
import { useState } from 'react';

import ArrowIcon from '@/assets/arrow-icon.svg?react';
import { FILTER_OPTIONS } from '@/constants/filters';

import { RadioList } from '../RadioList/RadioList';
import s from './Accordion.module.scss';
import type { AccordionProps, AccordionType } from './types';

const HEADER_TITLE: Record<AccordionType, string> = {
  all: 'All Types',
  categories: 'Categories',
  sale: 'Sale',
};

export const Accordion = ({ type }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // При создании страницы HomePage, вынесу логику компонента в хук, и сделаю его глупым компонентом

  const [selected, setSelected] = useState({ all: 'All', categories: 'All', sale: 'All' });

  const handleChangeOpen = () => setIsOpen((prev) => !prev);

  const handleSelectOption = (type: AccordionType, option: string) =>
    setSelected((prev) => ({ ...prev, [type]: option }));

  const headerTitle = HEADER_TITLE[type];

  return (
    <div className={clsx(s.accordionContainer, { [s.isOpen]: isOpen })}>
      <button onClick={handleChangeOpen} className={s.accordionHeader}>
        <span className={s.title}>{headerTitle}</span>
        <div className={s.iconWrapper}>
          <ArrowIcon className={s.arrowIcon} />
        </div>
      </button>
      <RadioList
        type={type}
        isOpen={isOpen}
        handleSelectOption={handleSelectOption}
        optionList={FILTER_OPTIONS[type]}
        selectedValue={selected[type]}
      />
    </div>
  );
};
