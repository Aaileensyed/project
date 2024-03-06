import React from 'react';
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Payment Canceled</h2>
        <p style={styles.message}>We're sorry, but it seems your payment was canceled. If you have any questions or concerns, please don't hesitate to contact us.</p>
         <Link to="/" style={styles.link}>Go back to Home</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa', // Light gray background color
  },
  content: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#dc3545', // Red color for heading
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#6c757d', // Dark gray color for message
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  link: {
    fontSize: '1.1rem',
    color: '#007bff', // Blue color for link
    textDecoration: 'none',
    marginTop: '1rem',
    display: 'block',
  },
};

export default Cancel;
