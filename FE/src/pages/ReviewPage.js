import React from 'react';
import ReviewComponent from '../components/reviewComponent';

function ReviewPage({ productId }) {
  return (
    <div className="review-page">
      <h1>Product Reviews</h1>
  
      <ReviewComponent productId={productId} />
    </div>
  );
}

export default ReviewPage;
