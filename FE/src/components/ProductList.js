// Example in ProductList.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const sort = queryParams.get('sort');
    // Fetch products based on these parameters
  }, [location.search]);

  return (
    <div>
      {/* Render product list */}
    </div>
  );
};

export default ProductList;
