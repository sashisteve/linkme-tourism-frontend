// src/pages/FeedbackPage.js

import React, { useState } from 'react';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Leave Your Feedback</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <label>Rate Your Experience:</label>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                cursor: 'pointer',
                fontSize: '24px',
                color: star <= rating ? '#FFD700' : '#ccc',
              }}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comments here..."
          rows={5}
          required
          style={{ width: '100%', marginTop: '10px', padding: '10px' }}
        />

        <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', background: '#2196F3', color: '#fff', border: 'none' }}>
          Submit Feedback
        </button>
      </form>

      {submitted && (
        <p style={{ marginTop: '20px', color: 'green' }}>
          ✅ Thank you for your feedback!
        </p>
      )}
    </div>
  );
};

export default FeedbackPage;
