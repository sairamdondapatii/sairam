import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../utils/projects'
import styles from './Singleproject.module.css'

const Singleproject = () => {
  const { id } = useParams()
  const project = projects.find((project) => project.id == id)

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{project.title}</h3>
      <img src={project.img} alt={project.title} className={styles.image} />
      <ul className={styles.descriptionList}>
        {project.description.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <Link to={project.codeLink} target='_blank' className={styles.linkButton}>
          Source Code
        </Link>
        <Link to={project.liveLink} target='_blank' className={styles.linkButton}>
          Live
        </Link>
      </div>
    </div>
  )
}

export default Singleproject
