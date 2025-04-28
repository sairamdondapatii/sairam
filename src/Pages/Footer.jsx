import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTelegramPlane, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© {new Date().getFullYear()} Sairam Dondapati. All rights reserved.</p>

        <div className={styles.links}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>About</Link>
          <Link to="/projects" className={styles.link}>Projects</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/sairamdondapatii/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sairamdondapati/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaTelegramPlane />
          </a>
        </div>

        {/* Back to Top Button */}
        <button onClick={scrollToTop} className={styles.backToTop}>
          <FaArrowUp /> Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
