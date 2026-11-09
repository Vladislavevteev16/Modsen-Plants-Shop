import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PAGINATION } from '@/constants/api';
import { PATH_NAME } from '@/constants/paths';
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks';
import {
  plantAdded,
  plantQuantityDecremented,
  selectCartItems,
} from '@/redux/store/slices/cartSlice';
import { resetFilters, setFilter } from '@/redux/store/slices/filterSlice';
import { fetchProducts } from '@/redux/store/slices/productSlice';
import type { Plant } from '@/types/plant.types';

export const useHomePageLogic = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { items: products, isLoading, error } = useAppSelector((state) => state.product);
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    dispatch(fetchProducts({ page: PAGINATION.DEFAULT_PAGE, limit: PAGINATION.DEFAULT_LIMIT }));
  }, [dispatch]);

  const handleSelectPlant = (plantType: string) => {
    dispatch(resetFilters());
    dispatch(setFilter({ key: 'type', value: plantType }));
    navigate(PATH_NAME.SHOP);
  };

  const handleShopRedirect = (category: string) => {
    dispatch(resetFilters());
    dispatch(setFilter({ key: 'category', value: category }));
    navigate(PATH_NAME.SHOP);
  };

  const handleAddPlantInCart = (product: Plant) => {
    dispatch(plantAdded(product));
  };

  const handleRemovePlantInCart = (productId: string) => {
    dispatch(plantQuantityDecremented({ id: productId }));
  };

  const productsWithCart = products.map((product) => ({
    ...product,
    quantity: cartItems.find((item) => item.id === product.id)?.quantity || 0,
  }));

  return {
    handleSelectPlant,
    handleShopRedirect,
    handleAddPlantInCart,
    handleRemovePlantInCart,
    productsWithCart,
    isLoading,
    error,
  };
};
