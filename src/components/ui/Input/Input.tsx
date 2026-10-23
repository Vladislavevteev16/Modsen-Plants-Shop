import ClearIcon from '@/assets/cross-icon.svg?react';
import SearchIcon from '@/assets/search-icon.svg?react';

import s from './Input.module.scss';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearValue: () => void;
};

export const Input = ({ value = '', onChange, handleClearValue }: InputProps) => {
  return (
    <div className={s.inputContainer}>
      <SearchIcon className={s.searchIcon} />
      <input
        className={s.input}
        placeholder="Search plants..."
        type="text"
        value={value}
        onChange={onChange}
      />
      {value && (
        <button className={s.clearButton} onClick={handleClearValue} type="button">
          <ClearIcon className={s.clearIcon} />
        </button>
      )}
    </div>
  );
};
