import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Search from '../components/Search';
import FilterByCategory from '../components/FilterByCategory'; // Ensure correct import
import Sort from '../components/sortByPrice'; // Ensure correct import

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('asc');
  const [category, setCategory] = useState('all'); // Add missing state
  const [products, setProducts] = useState([]); // All products from backend
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products to display


  
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/products?page=${currentPage}&limit=9&category=${category}&sort=${sortOption}`
        );
        const data = await response.json();
        setProducts(data.products || []);
        setFilteredProducts(data.products || []); // Initially display all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [sortOption, category, currentPage]);

  useEffect(() => {
    if (category === 'all') {
      setFilteredProducts(products); // Show all products if 'all' is selected
    } else {
      setFilteredProducts(products.filter(product => product.category.toLowerCase() === category.toLowerCase()));
    }
  }, [category, products]);


  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    setCurrentPage(1); // Reset to the first page when changing category
  };

  return (
    <div className="home-page">
      <h2 className="page-heading">Products</h2>
      <div className="filter-bar">
        <header>
        <Search onSearch={handleSearch} />
        <FilterByCategory onCategoryChange={handleCategoryChange} />
        <Sort onSort={handleSort} />
        </header>
      </div>
      <div className="product-list">
        <ProductList
          products={filteredProducts}
          sortOption={sortOption}
          searchQuery={searchQuery}
          currentPage={currentPage}
          category= {category}// Ensure you pass this prop to ProductList
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
