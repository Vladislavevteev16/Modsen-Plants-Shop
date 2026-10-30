import { useSearchBar } from '@/hooks/useSearchBar';
import type { Plant } from '@/types/plant.types';

import { AutocompleteList } from '../ui/AutocompleteList';
import { Input } from '../ui/Input';
import s from './SearchBar.module.scss';

const MOCK_LIST: Plant[] = [];

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
      <AutocompleteList
        searchResults={MOCK_LIST}
        value={value}
        handleSelectPlant={handleSelectPlant}
      />
    </div>
  );
};
