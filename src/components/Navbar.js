import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#ccc' }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/booking">Booking</Link> |{" "}
      <Link to="/payment">Payment</Link> |{" "}
      <Link to="/history">History</Link> |{" "}
      <Link to="/feedback">Feedback</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
