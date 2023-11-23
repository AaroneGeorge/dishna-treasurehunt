import React from 'react';
import img from '../assets/7.jpeg'

const ClueComponent = () => {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
    },
    imageOverlay: {
      zIndex: 1,
      /* Additional styling can be added here */
    },
    image: {
      display: 'block',
      margin: '0 auto', // Center the image horizontally
    },
    container: {
      zIndex: 0,
      textAlign: 'center',
      color: '#333',
    },
    paragraph: {
      fontSize: '24px',
      margin: '15px 0',
    },
  };

  return (
    <div style={styles.body}>
      <div className="image-overlay" style={styles.imageOverlay}>
        <img src={img} alt="Overlay Image" style={styles.image} />
      </div>
    </div>
  );
};

export default ClueComponent;
