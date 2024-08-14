// src/components/Search.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../features/products/productsSlice';

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setFilters({ query: event.target.value }));
  };

  return (
    <input type="text" placeholder="Search products..." onChange={handleSearch} />
  );
};

export default Search;
