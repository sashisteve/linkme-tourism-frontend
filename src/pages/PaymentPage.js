// src/pages/PaymentPage.js

import React, { useState } from 'react';

const PaymentPage = () => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Payment via Mpesa</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="07XXXXXXXX"
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <label>Amount (Ksh):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', background: '#4CAF50', color: '#fff', border: 'none' }}>
          Pay Now
        </button>
      </form>
      {submitted && (
        <p style={{ marginTop: '20px', color: 'green' }}>
          ✅ Payment Request Sent to {phone} for Ksh {amount}. Please check your phone to complete the transaction.
        </p>
      )}
    </div>
  );
};

export default PaymentPage;
