const db = require("../db");

// Add new feedback
async function addFeedback({ bookingId, userId, hostId, rating, comment }) {
  const [result] = await db.query(
    "INSERT INTO feedback (booking_id, user_id, host_id, rating, comment) VALUES (?, ?, ?, ?, ?)",
    [bookingId, userId, hostId, rating, comment]
  );
  return result.insertId;
}

// Get average rating for a host
async function getAverageRating(hostId) {
  const [rows] = await db.query(
    "SELECT AVG(rating) as avgRating FROM feedback WHERE host_id = ?",
    [hostId]
  );
  return rows[0].avgRating;
}

// Get feedback for a host
async function getFeedbackForHost(hostId) {
  const [rows] = await db.query(
    "SELECT * FROM feedback WHERE host_id = ? ORDER BY created_at DESC",
    [hostId]
  );
  return rows;
}

module.exports = {
  addFeedback,
  getAverageRating,
  getFeedbackForHost
};
