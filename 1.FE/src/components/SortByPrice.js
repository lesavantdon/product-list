import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';

const Sort = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(fetchProducts({ sort: e.target.value, page: 1 }));
  };

  return (
    <select onChange={handleSortChange}>
      <option value="">Sort by Price</option>
      <option value="price_asc">Low to High</option>
      <option value="price_desc">High to Low</option>
    </select>
  );
};

export default Sort;
