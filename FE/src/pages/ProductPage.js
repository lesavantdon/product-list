// src/pages/ProductPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import ReviewForm from '../components/ReviewForm';
const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
        setReviews(response.data.reviews || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleReviewAdded = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/products/${id}/reviews/${reviewId}`); // Use `id` directly here
      console.log('Review deleted:', response.data);
      setReviews((prevReviews) => prevReviews.filter(review => review._id !== reviewId));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>

      <div>
        <h1>Reviews</h1>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id}>
              <p><strong>{review.user}</strong>: {review.review} (Rating: {review.rating}/5)</p>
              <button onClick={() => handleDeleteReview(review._id)}>Delete Review</button> {/* Correctly pass review._id */}
            </div>
          ))
        ) : (
          <p>No reviews available for this product.</p>
        )}
      </div>
      <ReviewForm productId={id} onReviewAdded={handleReviewAdded} />
    </div>
  );
};

export default ProductPage;
