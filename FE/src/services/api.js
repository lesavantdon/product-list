// src/services/reviewService.js

import axios from 'axios';

// Fetch a single product
export const fetchProduct = async (productId) => {
  try {
    const response = await axios.get(`/api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Add a Review
export const addReview = async (productId, reviewData) => {
  try {
    const response = await axios.post(`/api/products/${productId}/reviews`, reviewData);
    console.log('Review added:', response.data);
    return response.data; // Return response data if needed
  } catch (error) {
    console.error('Error adding review:', error);
    throw error; // Rethrow error to handle in component
  }
};

// Fetch Reviews
export const fetchReviews = async (productId, page) => {
  try {
    const response = await axios.get(`/api/products/${productId}/reviews`, {
      params: { page }
    });
    console.log('Reviews:', response.data);
    return response.data; // Return response data if needed
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error; // Rethrow error to handle in component
  }
};

// Delete a Review
export const deleteReview = async (reviewId) => {
  try {
    const response = await axios.delete(`/api/reviews/${reviewId}`);
    console.log('Review deleted:', response.data);
    return response.data; // Return response data if needed
  } catch (error) {
    console.error('Error deleting review:', error);
    throw error; // Rethrow error to handle in component
  }
};
