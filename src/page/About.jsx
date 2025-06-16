import React from 'react';
import './About.css';
import Header from '../components/Header/Header';

const About = () => {
  return (
    <div>

   
    <Header/>
    <div className="about-container">
      
      <div className="about-left">
        <h1 className="about-title">
          <span className="red-bar"></span>
          About Our Construction Company
        </h1>
        <p className="about-description">
          We are a dynamic construction company specializing in innovative infrastructure and real estate development. With a strong commitment to quality and sustainability, our company delivers cutting-edge projects that meet the highest standards.
        </p>
      </div>
      <div className="about-right">
        <h2 className="what-we-do-title">What We Do</h2>
        <div className="what-we-do-item">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth="2">
            <rect x="3" y="7" width="18" height="13" stroke="red" strokeWidth="2" fill="none" />
            <path d="M3 7l9-4 9 4" stroke="red" strokeWidth="2" fill="none" />
          </svg>
          <div>
            <strong>Building Construction</strong>
            <p>Involves planning, designing, and assembling structures using various materials.</p>
          </div>
        </div>
        <div className="what-we-do-item">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth="2">
            <path d="M6 9v6" stroke="red" strokeWidth="2" />
            <path d="M18 9v6" stroke="red" strokeWidth="2" />
            <path d="M6 15h12" stroke="red" strokeWidth="2" />
            <path d="M9 12h6" stroke="red" strokeWidth="2" />
          </svg>
          <div>
            <strong>Building Repairs</strong>
            <p>Essential maintenance to ensure building integrity and longevity.</p>
          </div>
        </div>
        <div className="what-we-do-item">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth="2">
            <rect x="4" y="10" width="16" height="6" stroke="red" strokeWidth="2" fill="none" />
            <path d="M4 10l8-6 8 6" stroke="red" strokeWidth="2" fill="none" />
          </svg>
          <div>
            <strong>Custom Design</strong>
            <p>Transforming spaces with painting enhancements that protect surfaces.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
