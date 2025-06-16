import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import properties from '../data/properties.json';
import propertyImages from '../data/propertyImages.json';
import FullscreenImageViewer from '../components/FullscreenImageViewer/FullscreenImageViewer';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const propertyId = parseInt(id, 10);
  const property = properties.find(p => p.id === propertyId);
  const images = propertyImages[id] || [];

  const [fullscreenImage, setFullscreenImage] = useState(null);

  if (!property) {
    return (
      <div className="property-detail">
        <h2>Property not found</h2>
        <Link to="/property-listing" className="back-link">← Back to Property Listings</Link>
      </div>
    );
  }

  const openFullscreen = (imgSrc) => {
    setFullscreenImage(imgSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="property-detail">
      <Link to="/property-listing" className="back-link">← Back to Property Listings</Link>
      <h1 className="property-title">{property.title}</h1>
      <div className="property-image-gallery">
        {images.slice(0, 6).map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${property.title} ${index + 1}`}
            className="property-image"
            onClick={() => openFullscreen(imgSrc)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
      <div className="property-details">
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> ₦{property.price.toLocaleString()}</p>
        <p><strong>Description:</strong> {property.description}</p>
        <p><strong>Type:</strong> {property.type}</p>
      </div>
      <FullscreenImageViewer
        imageSrc={fullscreenImage}
        onClose={closeFullscreen}
        onNext={() => {
          if (!fullscreenImage) return;
          const currentIndex = images.indexOf(fullscreenImage);
          const nextIndex = (currentIndex + 1) % images.length;
          setFullscreenImage(images[nextIndex]);
        }}
        onPrev={() => {
          if (!fullscreenImage) return;
          const currentIndex = images.indexOf(fullscreenImage);
          const prevIndex = (currentIndex - 1 + images.length) % images.length;
          setFullscreenImage(images[prevIndex]);
        }}
      />
    </div>
  );
};

export default PropertyDetail;
