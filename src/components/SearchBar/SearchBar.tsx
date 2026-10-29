import { useSearchBar } from '@/hooks/useSearchBar';

import { AutocompleteList } from '../ui/AutocompleteList';
import { Input } from '../ui/Input';
import s from './SearchBar.module.scss';

export const SearchBar = () => {
  const { value, handleChangeSearchValue, handleClearSearchValue, handleSelectPlant } =
    useSearchBar();

  return (
    <div className={s.searchBarContainer}>
      <Input
        value={value}
        handleClearSearchValue={handleClearSearchValue}
        handleChangeSearchValue={handleChangeSearchValue}
      />
      <AutocompleteList value={value} handleSelectPlant={handleSelectPlant} />
    </div>
  );
};
