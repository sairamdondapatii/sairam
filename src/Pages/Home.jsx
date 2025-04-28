import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Home.module.css'

const Home = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className={styles.heroTitle}>Hey! I'm Sairam Dondapati 👋</h1>

      <p className={styles.heroSubtitle}>
        Full-Stack Developer | Problem Solver | Tech Explorer
      </p>

      <p className={styles.paragraph}>
        I specialize in building sleek, scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).
        From frontend design to backend logic, I craft smooth digital experiences with clean, maintainable code.
      </p>

      <p className={styles.paragraph}>
        Certified in frontend development and Industry 4.0 technologies, I enjoy working on real-world problems, learning
        new stacks, and contributing to impactful software.
      </p>

      <div className={styles.buttonGroup}>
        <Link to="/about" className={styles.contactLink}>About Me</Link>
        <Link to="/projects" className={styles.contactLink}>Projects</Link>
        <Link to="/contact" className={styles.contactLink}>Contact</Link>
      </div>
    </motion.div>
  )
}

export default Home
