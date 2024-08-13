import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(fetchProducts({ category: e.target.value, page: 1 }));
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="">All Categories</option>
      <option value="tools">Tools</option>
      <option value="electronics">Electronics</option>
      <option value="books">Books</option>
      {/* Add more categories as needed */}
    </select>
  );
};

export default Filter;
