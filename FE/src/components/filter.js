// src/components/Filter.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Filter = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://localhost:8000/categories');
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <select>
      <option value="">Select Category</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;
