import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ bookingId, userId, hostId, onSubmitted }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/feedback", {
        bookingId,
        userId,
        hostId,
        rating,
        comment,
      });
      alert("Feedback submitted!");
      onSubmitted();
    } catch (err) {
      alert("Error submitting feedback.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Rate Your Experience</h3>
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[5,4,3,2,1].map((r) => (
            <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>
          ))}
        </select>
      </label>
      <br />
      <textarea
        placeholder="Leave a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        style={{ width: "100%", marginTop: "10px" }}
      />
      <br />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
