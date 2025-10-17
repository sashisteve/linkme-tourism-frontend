const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail", // or your provider
  auth: {
    user: process.env.EMAIL_USER, // e.g. your Gmail or SendGrid email
    pass: process.env.EMAIL_PASS,
  },
});

async function sendBookingConfirmation(to, bookingDetails) {
  const { activity_name, booking_date, receipt_number, num_guests } = bookingDetails;

  const mailOptions = {
    from: `"LinkMe Tourism" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Booking Confirmation",
    html: `
      <h2>Thank you for your booking!</h2>
      <p><strong>Activity:</strong> ${activity_name}</p>
      <p><strong>Date:</strong> ${booking_date}</p>
      <p><strong>Guests:</strong> ${num_guests}</p>
      <p><strong>Receipt #:</strong> ${receipt_number}</p>
      <p>Status: <strong>Pending</strong></p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendBookingConfirmation };
