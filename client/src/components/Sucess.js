import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Success = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(true);

  useEffect(() => {
    // Disable confetti after 8 seconds
    const timer = setTimeout(() => {
      setIsConfettiActive(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {isConfettiActive && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <div style={styles.content}>
        <h2 style={styles.heading}>Payment Successful!</h2>
        <p style={styles.message}>Congratulations! Your payment has been successfully processed. Thank you for your purchase.</p>
        <Link to="/" style={styles.link}>Go to Home</Link> {/* Link to home page */}
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
    position: 'relative', // Required for confetti to be positioned correctly
  },
  content: {
    textAlign: 'center',
    zIndex: 1, // Ensure content is above confetti
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#28a745', // Green color for heading
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
    display: 'inline-block',
    marginTop: '1rem',
    fontSize: '1rem',
    color: '#007bff', // Blue color for link
    textDecoration: 'none',
  },
};

export default Success;
