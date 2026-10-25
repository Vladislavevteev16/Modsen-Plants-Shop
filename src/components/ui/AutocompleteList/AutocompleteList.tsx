import { useState } from 'react';

import s from './AutocompleteList.module.scss';

const MOCK_RESPONSE_LIST = ['Aster', 'Azeila', 'Anemone'];

export const AutocompleteList = () => {
  const [, setPlant] = useState<string>('');

  const handleChangePlant = (plant: string) => setPlant(plant);

  if (MOCK_RESPONSE_LIST.length === 0) return null;

  return (
    <ul className={s.listContainer}>
      {MOCK_RESPONSE_LIST.map((plant) => (
        <li className={s.plant} key={plant} onClick={() => handleChangePlant(plant)}>
          {plant}
        </li>
      ))}
    </ul>
  );
};
