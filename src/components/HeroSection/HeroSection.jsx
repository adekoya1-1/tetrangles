import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="welcome-text">Welcome to tetrangles</span>
        <h2 className="hero-heading">
          We give impeccable quality and exquisite results
        </h2>
        <p className="hero-description">
          We specialize in turning visions into reality with exceptional craftsmanship and 
          meticulous attention to detail. With years of experience and a commitment to quality.
        </p>
        <div className="hero-buttons">
          <Link to="/contact">
           <button className="btn btn-primary">Get Started</button>
          </Link>
          <Link to="/projects">
          <button className="btn btn-outline">View Projects</button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
