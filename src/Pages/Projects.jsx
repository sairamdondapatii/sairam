import React from 'react'
import { projects } from '../utils/projects'
import { Link } from 'react-router-dom'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <div key={project.id} className={styles.card}>
          <Link to={`${project.id}`} className={styles.projectLink}>
            <img src={project.img} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Projects
