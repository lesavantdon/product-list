// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './store';
import ProductList from './components/ProductList';
import Filter from './components/filter';
import Sort from './components/Sort';
import Search from './components/Search';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Search />
          <Filter />
          <Sort />
          <Routes>
            <Route path="/" element={<ProductList />} />
            {/* Define additional routes for different filters, sorts, etc. */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
