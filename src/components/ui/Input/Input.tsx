import ClearIcon from '@/assets/cross-icon.svg?react';
import SearchIcon from '@/assets/search-icon.svg?react';

import s from './Input.module.scss';

type InputProps = {
  value: string;
  handleChangeSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearSearchValue: () => void;
};

export const Input = ({ value, handleClearSearchValue, handleChangeSearchValue }: InputProps) => {
  return (
    <div className={s.inputContainer}>
      <SearchIcon className={s.searchIcon} />
      <input
        className={s.input}
        placeholder="Search plants..."
        type="text"
        value={value}
        onChange={handleChangeSearchValue}
      />
      {value && (
        <button className={s.clearButton} onClick={handleClearSearchValue} type="button">
          <ClearIcon onClick={handleClearSearchValue} />
        </button>
      )}
    </div>
  );
};
