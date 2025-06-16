import React, { useState } from "react";
import './PropertyHeader.css';
import { Link } from "react-router";
import logo from '../../assets/logo.jpg';

const PropertyHeader = () => {
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
            <img src={logo} alt="Tetrangles Project Limited Logo" />
            </Link>
            <h1 className="logo-text">Tetrangles Project Limited</h1>
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

export default PropertyHeader;
