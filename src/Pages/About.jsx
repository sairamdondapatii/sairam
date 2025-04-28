import React from 'react'
import styles from './About.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.paragraph}>
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
      </p>
      <h3 className={styles.subheading}>Get to Know Me</h3>
      <p className={styles.paragraph}>
        🎯 Enthusiastic about tech and solving complex problems through code? Hi there! I’m Maruti, blending a Mechanical Engineering background with profound IT skills focused on software and web development. 🖥️{'\n\n'}
        During my ongoing education at Seshadri Rao Gudlavalleru Engineering College, I've honed my abilities in JavaScript, Python, and C, achieving a notable CGPA of 7.8. My flair for web tech is showcased through proficient use of HTML, CSS, and React.js.{'\n\n'}
        My Portfolio Website is a testament to my dedication and skill set—an all-encompassing platform that highlights my projects, designed to be as engaging as they are functional.{'\n\n'}
        Certified in Front-end development and SQL, I also have specialized knowledge from an NPTEL course on 'Introduction to Industry 4.0 and Industrial Internet of Things.’{'\n\n'}
        🚀 With strengths in problem-solving and communication, I approach every project with a dedication that drives results.{'\n\n'}
        Looking to expand my horizons and collaborate on innovative IT solutions, I’m keen for opportunities to chat about technology's role in our future. 📧 Feel free to connect for a detailed look at my projects or to discuss potential collaborations.
      </p>
      <Link to={'https://drive.google.com/file/d/1H442jIlxrdtI7sUry0jCxbbOOFyRj3v1/view?usp=drive_link'} target='_blank' className={styles.resumeLink}>Resume</Link>
    </div>
  )
}

export default About
