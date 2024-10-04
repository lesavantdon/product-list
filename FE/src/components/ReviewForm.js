import React, { useState } from 'react';
import { addReview } from '../services/api';

const ReviewForm = ({ productId, onReviewAdded }) => {
  const [newReview, setNewReview] = useState({ user: '', rating: '', review: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.user || !newReview.rating || !newReview.review) {
      setError('All fields are required to submit a review.');
      return;
    }

    if (newReview.rating < 1 || newReview.rating > 5) {
      setError('Rating must be between 1 and 5.');
      return;
    }

    const reviewToSubmit = {
      user: newReview.user,
      rating: Number(newReview.rating), // Convert to number
      review: newReview.review,
    };

    setLoading(true); // Set loading state

    try {
      const addedReview = await addReview(productId, reviewToSubmit);
      onReviewAdded(addedReview);
      setNewReview({ user: '', rating: '', review: '' });
      setError('');
    } catch (error) {
      setError('Error adding review.');
      console.error('Error adding review:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <h2>Add a Review</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="User"
          value={newReview.user}
          onChange={handleInputChange}
        />
        <select
          name="rating"
          value={newReview.rating}
          onChange={handleInputChange}
        >
          <option value="">Select rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <textarea
          name="review"
          placeholder="Review"
          value={newReview.review}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={loading}>Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
