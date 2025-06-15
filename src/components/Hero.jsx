import React from "react";
import FeaturedCategories from "./FeaturedCategories";
import Carousel from "./Carousel";
import Banner from "./Banner";
import MenShoes2 from "./MenShoes2";
import Nails from "./Nails";
import HairStyles2 from "./HairStyles2";
import MenClothes2 from "./MenClothes2";
import Products from "./Products";

const Hero = ({ addToCart }) => {
  return (
    <div>
      <Carousel />
      <FeaturedCategories />
      <MenClothes2 addToCart={addToCart} />
      <Banner />
      <MenShoes2 addToCart={addToCart} />
      <Nails addToCart={addToCart} />
      <HairStyles2 addToCart={addToCart} />
    </div>
  );
};

export default Hero;
