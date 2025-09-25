// src/pages/ContactPage.js

import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Get in Touch</h2>
      <p>Email: support@linkmetourism.co.ke</p>
      <p>Phone: +254 712 345 678</p>
      <p>Address: Nairobi, Kenya</p>

      <h3 style={{ marginTop: '30px' }}>Frequently Asked Questions</h3>
      <div style={{ marginTop: '10px' }}>
        <strong>Q: How can I make a booking?</strong>
        <p>A: Use the Booking page to fill in your details and select a destination.</p>

        <strong>Q: How do I pay?</strong>
        <p>A: Use the Payment page to submit your Mpesa payment.</p>

        <strong>Q: Can I cancel a booking?</strong>
        <p>A: Contact our support team via phone or email to handle cancellations.</p>
      </div>
    </div>
  );
};

export default ContactPage;
