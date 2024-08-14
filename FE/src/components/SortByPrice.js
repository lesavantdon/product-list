// src/components/Sort.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../features/products/productsSlice';

const Sort = () => {
  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    dispatch(setSort(event.target.value));
  };

  return (
    <select onChange={handleSortChange}>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  );
};

export default Sort;
