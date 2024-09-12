import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../types';

const initialState = {
  products: [],
  product: null,
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
