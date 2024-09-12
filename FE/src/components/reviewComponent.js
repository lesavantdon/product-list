import React, { useState, useEffect } from 'react';
import { addReview, fetchReviews, deleteReview } from '../services/api';

const ReviewComponent = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ user: '', rating: '', review: '' });

  useEffect(() => {
    const getReviews = async () => {
      try {
        const fetchedReviews = await fetchReviews(productId, 1);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    getReviews();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleAddReview = async () => {
    try {
      await addReview(productId, newReview);
      setNewReview({ user: '', rating: '', review: '' });
      // Optionally refetch reviews or update state
      const fetchedReviews = await fetchReviews(productId, 1);
      setReviews(fetchedReviews);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      // Optionally refetch reviews or update state
      const fetchedReviews = await fetchReviews(productId, 1);
      setReviews(fetchedReviews);
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.user}</strong> - {review.rating}/5
            <p>{review.review}</p>
            <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h4>Add a Review</h4>
        <input
          type="text"
          name="user"
          value={newReview.user}
          onChange={handleInputChange}
          placeholder="Your name"
        />
        <input
          type="number"
          name="rating"
          value={newReview.rating}
          onChange={handleInputChange}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
        />
        <textarea
          name="review"
          value={newReview.review}
          onChange={handleInputChange}
          placeholder="Your review"
        />
        <button onClick={handleAddReview}>Submit</button>
      </div>
    </div>
  );
};

export default ReviewComponent;
