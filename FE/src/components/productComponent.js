// src/components/Product.js

import React, { useState, useEffect } from 'react';
import { fetchProduct, fetchReviews, addReview, deleteReview } from '../services/api';

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ user: '', rating: '', review: '' });

  useEffect(() => {
    // Fetch product details
    const getProduct = async () => {
      try {
        const fetchedProduct = await fetchProduct(productId); // Create this function in your service
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    // Fetch reviews
    const getReviews = async () => {
      try {
        const fetchedReviews = await fetchReviews(productId, 1); // Fetch first page of reviews
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    getProduct();
    getReviews();
  }, [productId]);

  const handleAddReview = async () => {
    try {
      await addReview(productId, newReview);
      // Optionally refetch reviews or update state
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      // Optionally refetch reviews or update state
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div>
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          {/* Render product reviews */}
          <div>
            <h2>Reviews</h2>
            {reviews.length ? (
              reviews.map((review) => (
                <div key={review._id}>
                  <p>{review.user}: {review.review}</p>
                  <button onClick={() => handleDeleteReview(review._id)}>Delete Review</button>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          {/* Add review form */}
          <div>
            <h2>Add a Review</h2>
            <input
              type="text"
              placeholder="User"
              value={newReview.user}
              onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
            />
            <input
              type="number"
              placeholder="Rating"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
            />
            <textarea
              placeholder="Review"
              value={newReview.review}
              onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            />
            <button onClick={handleAddReview}>Submit Review</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
