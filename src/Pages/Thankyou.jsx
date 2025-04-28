import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ThankYou.module.css';

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Thank You!</h2>
      <p className={styles.message}>
        Your message has been successfully submitted. I will get back to you soon!
      </p>
      <Link to="/" className={styles.backButton}>
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
