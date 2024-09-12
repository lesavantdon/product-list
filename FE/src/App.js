import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ReviewPage from './pages/ReviewPage';
import './assets/styles/App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/products/:productId/reviews" element={<ReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
