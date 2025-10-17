const express = require("express");
const { createActivity, getAllActivities } = require("../models/Activity");

const router = express.Router();

// Route: Create a new activity
router.post("/", async (req, res) => {
  try {
    const { title, description, location } = req.body;

    // Basic validation
    if (!title || !description || !location) {
      return res.status(400).json({ error: "Title, description, and location are required." });
    }

    const activityId = await createActivity(title, description, location);

    res.status(201).json({
      message: "Activity created successfully",
      activityId,
      activity: { title, description, location },
    });
  } catch (err) {
    console.error("Create Activity Error:", err);
    res.status(500).json({ error: "Failed to create activity" });
  }
});

// Route: Get all activities
router.get("/", async (req, res) => {
  try {
    const activities = await getAllActivities();
    res.json({ activities });
  } catch (err) {
    console.error("Get Activities Error:", err);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

module.exports = router;
