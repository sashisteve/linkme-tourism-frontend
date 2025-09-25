// src/pages/HistoryPage.js

import React from 'react';

const HistoryPage = () => {
  // In real app, this would come from a backend or localStorage
  const history = [
    { id: 1, destination: 'Diani Beach', date: '2025-08-15', price: '8000' },
    { id: 2, destination: 'Masai Mara', date: '2025-09-01', price: '15000' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Booking History</h2>
      {history.map((item) => (
        <div key={item.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <p><strong>Destination:</strong> {item.destination}</p>
          <p><strong>Date:</strong> {item.date}</p>
          <p><strong>Amount Paid:</strong> Ksh {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;
