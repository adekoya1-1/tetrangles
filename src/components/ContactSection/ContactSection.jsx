import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-details">
            <div className="phone-section">
              <span className="icon">📞</span>
              <h3>Call us</h3>
              <a href="tel:+2348058358897">+234 805 835 8897</a>
            </div>
            
            <div className="email-section">
              <span className="icon">✉️</span>
              <h3>Write To Us</h3>
              <a href="mailto:info@tetrangles.com.ng">info@tetrangles.com.ng</a>
            </div>

            <div className="email-section">
              <span className="icon">📍</span>
              <h3>vist Us </h3>
              <a href="mailto:info@tetrangles.com.ng">Road 26 House 8A Ikota Villa Ikota Lekki Lagos Nigeria </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <span className="section-subtitle">Contact Us</span>
          <h2 className="section-title">Get in touch with us</h2>
          
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone Number" className="form-input" />
              <input type="text" placeholder="Subject" className="form-input" />
            </div>
            <textarea placeholder="Message" className="form-textarea"></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
