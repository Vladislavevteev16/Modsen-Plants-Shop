import clsx from 'clsx';

import type { Plant } from '@/types/plant.types';

import s from './AutocompleteList.module.scss';

type AutocompleteListProps = {
  searchResults: Plant[];
  handleSelectPlant: (plantName: string) => void;
  value: string;
};

export const AutocompleteList = ({
  searchResults = [],
  handleSelectPlant,
  value,
}: AutocompleteListProps) => {
  const firstThreePopularPlants = searchResults.slice(0, 3);

  const hasValue = value.trim().length > 0;

  const isNotFound = hasValue && searchResults.length === 0;

  if (!hasValue && searchResults.length === 0) return null;

  return (
    <ul className={s.listContainer}>
      {isNotFound && <li className={clsx(s.plant, s.disabled)}>Not Found</li>}
      {firstThreePopularPlants.map(({ id, name }) => (
        <li className={s.plant} key={id} onClick={() => handleSelectPlant(name)}>
          {name}
        </li>
      ))}
    </ul>
  );
};
