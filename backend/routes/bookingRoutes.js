const express = require("express");
const router = express.Router();
const { createBooking } = require("../models/Booking");
const { sendBookingConfirmation } = require("../utils/emailService"); // ✅ if using email

// POST /bookings - Create a new booking
router.post("/", async (req, res) => {
  try {
    const {
      user_id,
      activity_id,
      activity_name,
      booking_date,
      num_guests,
      email,
    } = req.body;

    // Validate required fields
    if (
      !user_id ||
      !activity_id ||
      !activity_name ||
      !booking_date ||
      !num_guests ||
      !email
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Generate receipt number
    const receipt_number = `RCPT-${new Date()
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "")}-${Math.floor(Math.random() * 10000)}`;

    // Booking status defaults to "pending"
    const status = "pending";

    // Create booking in DB
    const bookingId = await createBooking({
      user_id,
      activity_id,
      activity_name,
      booking_date,
      num_guests,
      email,
      receipt_number,
      status,
    });

    // ✅ Optionally send confirmation email
    try {
      await sendBookingConfirmation(email, {
        activity_name,
        booking_date,
        receipt_number,
        num_guests,
      });
    } catch (emailErr) {
      console.warn("Email send failed (not critical):", emailErr.message);
    }

    // Respond to client
    res.status(201).json({
      message: "Booking created",
      bookingId,
      receipt_number,
      status,
    });
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

module.exports = router;
