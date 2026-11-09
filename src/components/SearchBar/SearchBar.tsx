import clsx from 'clsx';

import { useSearchBar } from '@/hooks/useSearchBar';

import { AutocompleteList } from '../ui/AutocompleteList';
import { Input } from '../ui/Input';
import s from './SearchBar.module.scss';

type SearchBarProps = {
  isMobileVersion?: boolean;
};

export const SearchBar = ({ isMobileVersion }: SearchBarProps) => {
  const {
    value,
    handleChangeSearchValue,
    handleClearSearchValue,
    handleSelectPlant,
    suggestions,
    error,
  } = useSearchBar();

  return (
    <div className={clsx(s.searchBarContainer, { [s.showOnMobile]: isMobileVersion })}>
      <Input
        value={value}
        handleClearSearchValue={handleClearSearchValue}
        handleChangeSearchValue={handleChangeSearchValue}
      />
      <AutocompleteList
        error={error}
        searchResults={suggestions}
        value={value}
        handleSelectPlant={handleSelectPlant}
      />
    </div>
  );
};
