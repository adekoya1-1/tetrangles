import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './PropertyGrid.css';

const PropertyGrid = ({ properties }) => {
  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
