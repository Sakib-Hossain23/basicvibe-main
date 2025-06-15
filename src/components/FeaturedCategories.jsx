import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/FeaturedCatagories.css";

const categories = [
  {
    name: "Men's Clothes",
    image: "/img/boy's clothes.jpg",
    link: "/men-clothes",
  },
  {
    name: "Men's Shoes",
    image: "/img/shoes logo.png",
    link: "/men's-shoes",
  },
  {
    name: "Hairstyles",
    image: "/img/prom hairstyles.png",
    link: "/hairstyles",
  },

  {
    name: "Nails",
    image: "/img/ms1 logo.png",
    link: "/nails",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="wrapper">
      <div className="featured-products">
        <h2 className="featured-title">Featured Categories</h2>
        <p className="featured-subtitle">
          Find your desired product from featured categories
        </p>
        <div className="categories-container">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="category-link">
              <div
                className={`category-card ${
                  category.highlight ? "highlight-card" : ""
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-icon"
                />
                <p className="category-name">{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
