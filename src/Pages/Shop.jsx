import React from "react";
import "./Shop.css";
import img1 from "../assets/necklace.jpg";
import img2 from "../assets/earring.jpg";
import img3 from "../assets/ring.jpg";

const Shop = () => {
  return (
    <div className="shop-container">
      <h2>Our Categories</h2>

      <div className="shop-images">
        <img src={img1} alt="jewellery1" />
        <img src={img2} alt="jewellery2" />
        <img src={img3} alt="jewellery3" />
      </div>
    </div>
  );
};

export default Shop;