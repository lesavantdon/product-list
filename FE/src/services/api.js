// src/services/api.js

import axios from 'axios';

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Your base URL here
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch a single product
export const fetchProduct = async (productId) => {
  try {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Add a Review
export const addReview = async (productId, reviewData) => {
  try {
    const response = await apiClient.post(`/products/${productId}/reviews`, reviewData);
    console.log('Review added:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};


// Fetch Reviews
export const fetchReviews = async (productId, page) => {
  try {
    const response = await apiClient.get(`/products/${productId}/reviews`, {
      params: { page }
    });
    console.log('Reviews:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

//delete reviews//
export const deleteReview = async (productId, reviewId) => {
  try {
    const response = await apiClient.delete(`/products/${productId}/reviews/${reviewId}`);
    console.log('Review deleted:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting review:', error);
    throw error;
  }
};



export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product: ', error);
    throw error;
  }
};
