import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './App.css';
import PhotoCard from './components/photo-card/PhotoCard';

Modal.setAppElement('#root');

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:8055/items/photos');
        console.log(response.data.data); // Отладочный вывод
        setPhotos(response.data.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    fetchPhotos();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className='photos-area'>
      <h1 className="photos-area_title">Gallery</h1>
      <div className="gallery">
        {photos.map(photo => (
          <PhotoCard
            key={photo.id}
            title={photo.title}
            description={photo.description}
            imageUrl={`http://localhost:8055/assets/${photo.image}`}
            onClick={() => openModal(photo)}
          />
        ))}
      </div>

      {selectedPhoto && (
        <Modal 
          isOpen={!!selectedPhoto} 
          onRequestClose={closeModal} 
          className="modal-content" 
          overlayClassName="modal-overlay">
            <div className= "modal-container">
              <h2 className='modal-container_title'>{selectedPhoto.title}</h2>
              <img className='modal-container_img' src={`http://localhost:8055/assets/${selectedPhoto.image}`} alt={selectedPhoto.title} />
              <p className='modal-container_description'>{selectedPhoto.description}</p>
              <button className='modal-container_button' onClick={closeModal}>
              </button>
            </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
