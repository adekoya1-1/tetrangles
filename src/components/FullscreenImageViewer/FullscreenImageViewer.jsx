import React from 'react';
import './FullscreenImageViewer.css';

const FullscreenImageViewer = ({ imageSrc, onClose, onNext, onPrev }) => {
  if (!imageSrc) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fullscreen-overlay" onClick={handleOverlayClick}>
      <button className="nav-button prev-button" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous image">&#10094;</button>
      <img
        src={imageSrc}
        alt="Fullscreen"
        className="fullscreen-image"
        onClick={handleImageClick}
      />
      <button className="nav-button next-button" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next image">&#10095;</button>
      <button className="close-button" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close fullscreen view">&times;</button>
    </div>
  );
};

export default FullscreenImageViewer;
