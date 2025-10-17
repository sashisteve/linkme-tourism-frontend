const db = require("../config/db");

// Create a booking
async function createBooking({
  user_id,
  activity_id,
  activity_name,
  booking_date,
  num_guests,
  email,
  receipt_number,
  status = "pending", // default to pending
}) {
  const [result] = await db.query(
    `INSERT INTO bookings 
      (user_id, activity_id, activity_name, booking_date, num_guests, email, receipt_number, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      user_id,
      activity_id,
      activity_name,
      booking_date,
      num_guests,
      email,
      receipt_number,
      status,
    ]
  );

  return result.insertId;
}

module.exports = {
  createBooking,
};
