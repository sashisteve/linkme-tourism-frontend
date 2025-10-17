console.log("Starting server...");

const express = require("express");
const cors = require("cors");

const app = express(); // Initialize Express app

// Enable CORS for all origins (development purposes)
app.use(cors());

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Database connection pool
const pool = require("./config/db");

// Import routes
const userRoutes = require("./routes/userRoutes");
const activityRoutes = require("./routes/activityRoutes");
const bookingRoutes = require("./routes/bookingRoutes"); // Booking routes
const feedbackRoutes = require("./routes/feedbackRoutes");

// Root route - simple API status check
app.get("/", (req, res) => {
  res.send("LinkMe Tourism API is running 🚀");
});

// Test database connection route
app.get("/db-test", async (req, res) => {
  try {
    const [results] = await pool.query("SELECT NOW() AS currentTime");
    res.json({ message: "Database connected!", time: results[0].currentTime });
  } catch (err) {
    console.error("DB Test Failed:", err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Mount routes with their prefixes
app.use("/users", userRoutes);
app.use("/activities", activityRoutes);
app.use("/bookings", bookingRoutes); // Booking routes
app.use("/feedback", feedbackRoutes);

// Start the server and listen on the specified port and IP
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
