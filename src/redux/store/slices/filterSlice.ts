import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { FILTER_DEFAULTS } from '@/constants/api';

type FiltersState = {
  type: string;
  category: string;
  sale: string;
  search: string;
};

const initialState: FiltersState = {
  type: FILTER_DEFAULTS.ALL,
  category: FILTER_DEFAULTS.ALL,
  sale: FILTER_DEFAULTS.ALL,
  search: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ key: keyof FiltersState; value: string }>) => {
      state[action.payload.key] = action.payload.value;
    },
    resetFilters: (state) => {
      state.type = FILTER_DEFAULTS.ALL;
      state.category = FILTER_DEFAULTS.ALL;
      state.sale = FILTER_DEFAULTS.ALL;
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
