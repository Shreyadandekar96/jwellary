import React from "react";
import "./Hero.css";
import hero from "../assets/img1.png";
import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-container">
      {/* NAVBAR ON IMAGE */}
      <Navbar />

      {/* HERO IMAGE */}
      <img src={hero} alt="hero" className="heroimg" />

      {/* TEXT ON IMAGE */}
      <div className="hero-content">
        <h1 className="heading">
          <i>Luxury Jewellery</i>
        </h1>
        <p className="subheading">Shine with Every Moment</p>
        <NavLink to="/shop" className="shop">
          Shop More
        </NavLink>
      </div>
    </div>
  );
};
export default Hero;
