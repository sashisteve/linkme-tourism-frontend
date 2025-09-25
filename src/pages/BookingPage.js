// src/pages/BookingPage.js

import React, { useState } from 'react';

// Import local images
import dianiImg from '../assets/images/diani.jpg';
import maraImg from '../assets/images/mara.jpg';
import naivashaImg from '../assets/images/naivasha.jpg';

const destinations = {
  diani: {
    name: 'Diani Beach',
    image: dianiImg,
    description: 'Diani Beach is a tropical paradise located on Kenya’s Indian Ocean coast, known for white sands and clear waters.',
    activities: ['Snorkeling', 'Beach Volleyball', 'Sunset Cruise'],
    price: 'Ksh 8,000 per person',
  },
  mara: {
    name: 'Masai Mara',
    image: maraImg,
    description: 'The Masai Mara offers world-famous safari experiences and the Great Migration.',
    activities: ['Game Drive', 'Cultural Visit', 'Hot Air Balloon'],
    price: 'Ksh 15,000 per person',
  },
  naivasha: {
    name: 'Lake Naivasha',
    image: naivashaImg,
    description: 'A scenic freshwater lake surrounded by wildlife and nature.',
    activities: ['Boat Ride', 'Hiking', 'Bird Watching'],
    price: 'Ksh 6,500 per person',
  },
};

const BookingPage = () => {
  const [selected, setSelected] = useState('diani');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    people: 1,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted! (Not functional yet)');
  };

  const destination = destinations[selected];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book Your Trip</h2>

      <label>Select Destination:</label>
      <select value={selected} onChange={(e) => setSelected(e.target.value)} style={{ margin: '10px 0', padding: '5px' }}>
        {Object.keys(destinations).map((key) => (
          <option key={key} value={key}>
            {destinations[key].name}
          </option>
        ))}
      </select>

      <div style={{ marginTop: '20px' }}>
        <img src={destination.image} alt={destination.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
        <p><strong>Activities:</strong> {destination.activities.join(', ')}</p>
        <p><strong>Price:</strong> {destination.price}</p>
      </div>

      <hr />

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <h3>Fill in your booking details:</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '10px 0', padding: '8px' }}
        />
        <input
          type="number"
          name="people"
          min="1"
          value={formData.people}
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '10px 0', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', background: '#2196F3', color: '#fff', border: 'none' }}>
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
