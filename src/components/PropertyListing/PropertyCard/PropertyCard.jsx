import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="property-card-link">
      <div className="property-card">
        <div className="property-image-container">
          <img src={property.image} alt={property.title} className="property-image" />
          <div className="property-overlay">
            <h3 className="property-title">{property.title}</h3>
          </div>
        </div>
        <div className="property-details">
          <p className="property-location">{property.location}</p>
          <p className="property-price">{property.price}</p>
          <p className="property-description">{property.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
