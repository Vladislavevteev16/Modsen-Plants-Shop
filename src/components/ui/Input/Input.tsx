import { useState } from 'react';

import ClearIcon from '@/assets/cross-icon.svg?react';
import SearchIcon from '@/assets/search-icon.svg?react';

import s from './Input.module.scss';

type InputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearValue?: () => void;
};

export const Input = ({ handleClearValue }: InputProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <div className={s.inputContainer}>
      <SearchIcon className={s.searchIcon} />
      <input
        className={s.input}
        placeholder="Search plants..."
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <button className={s.clearButton} onClick={handleClearValue} type="button">
          <ClearIcon onClick={() => setValue('')} className={s.clearIcon} />
        </button>
      )}
    </div>
  );
};
