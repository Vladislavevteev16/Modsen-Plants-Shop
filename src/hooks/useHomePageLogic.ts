import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH_NAME } from '@/constants/paths';
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks';
import {
  plantAdded,
  plantQuantityDecremented,
  selectCartItems,
} from '@/redux/store/slices/cartSlice';
import { setFilter } from '@/redux/store/slices/filterSlice';
import { clearProducts, fetchProducts } from '@/redux/store/slices/productSlice';
import type { Plant } from '@/types/plant.types';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 8;

export const useHomePageLogic = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { items: products } = useAppSelector((state) => state.product);
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    dispatch(clearProducts());
    dispatch(fetchProducts({ page: DEFAULT_PAGE, limit: DEFAULT_LIMIT }));
  }, [dispatch]);

  const handleSelectPlant = (plantType: string) => {
    dispatch(setFilter({ key: 'type', value: plantType }));
    navigate(PATH_NAME.SHOP);
  };

  const handleShopRedirect = (category: string) => {
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
  };
};
