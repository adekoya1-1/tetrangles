import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: 'Building Construction',
      image: '/images/969.jpg',
    },
    {
      title: 'Construction Project Management',
      image: '/images/2.jpg',
    },
    {
      title: 'Architecture',
      image: '/images/3.jpg',
    },
    {
      title: 'Consultancy',
      image: '/images/consultancy.jpg',
    }
  ];

  return (
    <section className="services-section">
      <div className="services-content">
        <span className="section-subtitle">Our Services</span>
        <h2 className="section-title">Our construction services</h2>
        <p className="section-description">
          We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
