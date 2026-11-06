import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH_NAME } from '@/constants/paths';
import { useAppDispatch } from '@/redux/store/hooks';
import { setFilter } from '@/redux/store/slices/filterSlice';
import { fetchProducts } from '@/redux/store/slices/productSlice';
import type { Plant } from '@/types/plant.types';

const DELAY = 300;

export const useSearchBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState<string>('');

  const [suggestions, setSuggestions] = useState<Plant[]>([]);

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);

  const handleClearSearchValue = () => {
    setValue('');
    setSuggestions([]);
  };

  const handleSelectPlant = (plantName: string) => {
    dispatch(setFilter({ key: 'search', value: plantName }));
    setValue('');
    setSuggestions([]);
    navigate(PATH_NAME.SHOP);
  };

  useEffect(() => {
    if (!value.trim()) return;

    const timer = setTimeout(async () => {
      try {
        const { data } = await dispatch(
          fetchProducts({ search: value.trim(), limit: 3, page: 1 }),
        ).unwrap();

        setSuggestions(data);
      } catch {
        setSuggestions([]);
      }
    }, DELAY);

    return () => clearTimeout(timer);
  }, [value, dispatch]);

  return { value, suggestions, handleChangeSearchValue, handleClearSearchValue, handleSelectPlant };
};
