import axios from 'axios';
import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../types';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/products');
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchProduct = (productId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/products/${productId}`);
    dispatch({
      type: FETCH_PRODUCT,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};
