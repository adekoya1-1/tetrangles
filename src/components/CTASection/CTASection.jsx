import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <div className="cta-text">
          <h2 className="cta-title">Let's build something great together!</h2>
          <p className="cta-description">
            Don't wait any longer to bring your construction dreams to life. Partner with 
            Builtup and experience unparalleled service and quality.
          </p>
          <button className="cta-btn">Get Free Quote</button>
        </div>
        <div className="cta-image">
          <img src="/images/happy-woman.jpg" alt="Happy woman" className="woman-image" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
