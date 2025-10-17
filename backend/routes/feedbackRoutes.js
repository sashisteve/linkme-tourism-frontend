const express = require("express");
const { addFeedback, getFeedbackForHost, getAverageRating } = require("../models/Feedback");

const router = express.Router();

// Add feedback
router.post("/", async (req, res) => {
  try {
    const { bookingId, userId, hostId, rating, comment } = req.body;
    const feedbackId = await addFeedback({ bookingId, userId, hostId, rating, comment });
    res.status(201).json({ message: "Feedback added", feedbackId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not add feedback" });
  }
});

// Get feedback for a specific host
router.get("/host/:hostId", async (req, res) => {
  try {
    const feedback = await getFeedbackForHost(req.params.hostId);
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: "Error fetching feedback" });
  }
});

// Get average rating
router.get("/host/:hostId/average", async (req, res) => {
  try {
    const avg = await getAverageRating(req.params.hostId);
    res.json({ average: avg });
  } catch (err) {
    res.status(500).json({ error: "Error calculating average" });
  }
});

module.exports = router;
