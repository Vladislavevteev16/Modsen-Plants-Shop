import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Plant } from '@/types/plant.types';

type CartPlant = Plant & {
  quantity: number;
};

type CartState = {
  cartItems: CartPlant[];
};

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    plantAdded: (state, action: PayloadAction<Plant>) => {
      const findElement = state.cartItems.find((el) => el.id === action.payload.id);

      if (findElement) {
        findElement.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    plantRemoved: (state, action: PayloadAction<Pick<CartPlant, 'id'>>) => {
      state.cartItems = state.cartItems.filter((el) => el.id !== action.payload.id);
    },
    plantQuantityDecremented: (state, action: PayloadAction<Pick<CartPlant, 'id'>>) => {
      const findElement = state.cartItems.find((el) => el.id === action.payload.id);

      if (findElement && findElement.quantity > 1) {
        findElement.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((el) => el.id !== action.payload.id);
      }
    },
  },
  selectors: {
    selectCartItems: (state) => state.cartItems,
    selectTotalPrice: (state) =>
      state.cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0),
  },
});

export const { plantAdded, plantRemoved, plantQuantityDecremented } = cartSlice.actions;

export const { selectCartItems, selectTotalPrice } = cartSlice.selectors;

export default cartSlice.reducer;
