import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getPlantProducts } from '@/api/plantApi';
import type { FetchProductsParams, Plant } from '@/types/plant.types';
import { constructingQueryString } from '@/utils/constructingQueryString';

type ProductsState = {
  items: Plant[];
  totalCount: number;
  currentPage: number;
  isLoading: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  items: [],
  totalCount: 0,
  currentPage: 1,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params: FetchProductsParams, { rejectWithValue }) => {
    try {
      const queryParams = constructingQueryString(params);

      const {
        data: { images },
      } = await getPlantProducts(queryParams);

      return images;
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : 'Failed to load products');
    }
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.items = [];
      state.currentPage = 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.meta.arg.page === 1 || !action.meta.arg.page) {
          state.items = action.payload.data;
        } else {
          state.items = [...state.items, ...action.payload.data];
        }

        state.totalCount = action.payload.total_count;
        state.currentPage = action.payload.current_page;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
