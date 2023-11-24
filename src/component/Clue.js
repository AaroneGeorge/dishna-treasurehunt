import React from 'react';
import img from '../assets/7.jpeg';

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
    image: {
      display: 'block',
      margin: '0 auto', // Center the image horizontally
      maxWidth: '100%',
      maxHeight: '100%',
    },
  };

  return (
    <div style={styles.body}>
      <img src={img} alt="Overlay Image" style={styles.image} />
    </div>
  );
};

export default ClueComponent;
