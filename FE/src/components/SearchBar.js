import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    dispatch(fetchProducts({ search: query, page: 1 }));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
