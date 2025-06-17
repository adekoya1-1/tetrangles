import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  // Format price as currency (Nigerian Naira assumed)
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link to={`/property/${property.id}`} className="property-card-link">
      <div className="property-card">
        <div className="property-image-container">
          <img src={property.image} alt={property.title.replace(/(image|photo|picture)/gi, '').trim()} className="property-image" />
        </div>
        <div className="property-details">
          <p className="property-title">{property.title}</p>
          <p className="property-location">{property.location}</p>
          <p className="property-price">{formattedPrice}</p>
          <p className="property-description">{property.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
