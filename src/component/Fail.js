import React from 'react';

const YourComponent = () => {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Lexend, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    container: {
      textAlign: 'center',
      color: '#333',
    },
    paragraph: {
      fontSize: '45px',
      margin: '10px 0',
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <p style={styles.paragraph}>It's not me you're looking for</p>
        <p style={styles.paragraph}>Better luck next time</p>
      </div>
    </div>
  );
};

export default YourComponent;
