import React from 'react';
import PropTypes from 'prop-types';
import './PhotoCard.css'; // Импорт стилей для PhotoCard

const PhotoCard = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="photo-card" onClick={onClick}>
      <img src={imageUrl} alt={title} className="photo-image" />
      <div className="photo-info">
        <h2 className="photo-title">{title}</h2>
        <p className="photo-description">{description}</p>
      </div>
    </div>
  );
};

PhotoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PhotoCard;
