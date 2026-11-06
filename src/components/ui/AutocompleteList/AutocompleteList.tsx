import clsx from 'clsx';

import type { Plant } from '@/types/plant.types';

import s from './AutocompleteList.module.scss';

type AutocompleteListProps = {
  searchResults: Plant[];
  handleSelectPlant: (plantName: string) => void;
  value: string;
};

export const AutocompleteList = ({
  searchResults,
  handleSelectPlant,
  value,
}: AutocompleteListProps) => {
  const hasValue = value.trim().length > 0;

  if (!hasValue) return null;

  const isNotFound = searchResults.length === 0;

  const displaySuggestions = hasValue ? searchResults : [];

  return (
    <ul className={s.listContainer}>
      {isNotFound && <li className={clsx(s.plant, s.disabled)}>Not Found</li>}
      {displaySuggestions.map(({ id, name }) => (
        <li className={s.plant} key={id} onClick={() => handleSelectPlant(name)}>
          {name}
        </li>
      ))}
    </ul>
  );
};
