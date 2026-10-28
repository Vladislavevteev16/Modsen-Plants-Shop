import type { Plant } from '@/types/plant.types';

import s from './AutocompleteList.module.scss';

type AutocompleteListProps = {
  searchResults: Plant[];
  handleSelectPlant: (plantName: string) => void;
};

export const AutocompleteList = ({ searchResults, handleSelectPlant }: AutocompleteListProps) => {
  const firstThreePopularPlants = searchResults.slice(0, 3);

  if (searchResults.length === 0) return null;

  return (
    <ul className={s.listContainer}>
      {firstThreePopularPlants.map(({ id, name }) => (
        <li className={s.plant} key={id} onClick={() => handleSelectPlant(name)}>
          {name}
        </li>
      ))}
    </ul>
  );
};
