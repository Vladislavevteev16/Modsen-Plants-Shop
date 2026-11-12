import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cartSlice';
import filtersReducer from './slices/filterSlice';
import productReducer from './slices/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
