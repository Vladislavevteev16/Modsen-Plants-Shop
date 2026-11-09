import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getSuggestionProducts } from '@/api/plantApi';
import { PATH_NAME } from '@/constants/paths';
import { useAppDispatch } from '@/redux/store/hooks';
import { setFilter } from '@/redux/store/slices/filterSlice';
import type { Plant } from '@/types/plant.types';

const DELAY = 300;

const ERROR_MSG = 'Failed to load suggestions';

export const useSearchBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

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

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        const response = await getSuggestionProducts(value, controller.signal);

        setSuggestions(response.data.images.data);
      } catch {
        setError(ERROR_MSG);
        setSuggestions([]);
      }
    }, DELAY);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [value, dispatch]);

  return {
    value,
    suggestions,
    handleChangeSearchValue,
    handleClearSearchValue,
    handleSelectPlant,
    error,
  };
};
