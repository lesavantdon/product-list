// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    totalItems: 0,
    currentPage: 1,
    filters: {},
    sort: 'asc',
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload.products;
      state.totalItems = action.payload.total;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setProducts, setPage, setFilters, setSort } = productsSlice.actions;

export const fetchProducts = (params) => async (dispatch) => {
  try {
    const response = await axios.get('/products', { params });
    dispatch(setProducts({
      products: response.data.products,
      total: response.data.total,
    }));
  } catch (error) {
    console.error(error);
  }
};

export default productsSlice.reducer;
