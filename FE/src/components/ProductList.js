// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/ProductList.css'; // Adjust path if ProductList.js is in a different directory


const ProductList = ({ searchQuery, currentPage, sortOption, category, onPageChange }) => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products', {
          params: {
            page: currentPage,
            limit: productsPerPage,
            query: searchQuery,
            sort: sortOption,
            category: category === 'all' ? undefined : category // Only send category if it's not "all"
          }
        });
        setProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.total / productsPerPage));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage, searchQuery, sortOption, category]);

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div>
    <div className="product-list">
      <div className="product-grid">
        {products.length ? (
          products.map(product => (
            <div key={product._id} className="product-box">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p> Price: ${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      </div>
<footer>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
          key={index}
          className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </footer>
        </div>
      );
};

export default ProductList;
