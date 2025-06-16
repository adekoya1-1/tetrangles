import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router";
import logo from "../assets/logo.png"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-text-container">
            <Link to="/" className="logo-link">
              <img src={logo} alt="" />
            </Link>

          </div>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            
            <li>
             <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/property-listing">Property Listings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
