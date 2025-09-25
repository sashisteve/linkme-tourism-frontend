import React, { useState, useEffect } from "react";
import "./HomePage.css";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const images = [slide1, slide2, slide3];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <div className="slideshow-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
          key={currentIndex}
        />
      </div>

      <h1>Welcome to LinkMe Tourism!</h1>
      <p>Discover your next adventure with us.</p>
    </div>
  );
};

export default HomePage;
