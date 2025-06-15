import React from "react";
import "../assets/styles/banner.css";

const Banner = () => {
  const images = ["img/12.png", "img/13.png"];

  return (
    <div className="wrapper">
      <div className="banner-container">
        {images.map((img, index) => (
          <div key={index} className="banner-image">
            <img src={img} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
