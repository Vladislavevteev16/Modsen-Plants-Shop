import { useEffect, useState } from 'react';

import { useAppDispatch } from '@/redux/store/hooks';

const DELAY = 300;

export const useSearchBar = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>('');

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);

  const handleClearSearchValue = () => setValue('');

  // const handleSelectPlant = (plant: string) => dispatch(action(plant)); // После создания слайса будет добавлен экшен вместо заглушки
  const handleSelectPlant = (plant: string) => console.log(plant, DELAY); // Заглушка

  useEffect(() => {
    // const timer = setTimeout(() => dispatch(action(value)), DELAY); // После создания санка, будет добавлен вызов экшена
    // return () => clearTimeout(timer);
    setTimeout(() => console.log(), DELAY); // Заглушка
  }, [value, dispatch]);

  return { value, handleChangeSearchValue, handleClearSearchValue, handleSelectPlant };
};
