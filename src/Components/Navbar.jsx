import React from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  // ✅ Add this at the top of the component
  const location = useLocation();
  const isHeroPage = location.pathname === "/"; // check if on home page
  const navbarClass = isHeroPage ? "overlay-navbar" : "normal-navbar";

  return (
    // ✅ Use navbarClass here
    <nav className={`navbar navbar-expand-lg ${navbarClass}`}>
      <div className="container-fluid">
        {/* BRAND */}
        <NavLink to="/" className="navbar-brand brand-img">
          <span className="brand-text">
            <i>RATNASHREE</i>
            </span>
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav center-menu">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <form className="d-flex">
            
            <NavLink to="/signup" className="btn btn-outline-dark">
              Sign Up
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};
