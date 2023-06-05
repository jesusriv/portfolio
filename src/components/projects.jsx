import React, { useState } from 'react'
import './projects.scss'

import projects from '../data/projects'

import bounce from '../assets/bounce_attack.gif'
import splash from '../assets/image_splash.gif'
import wine from '../assets/wine.gif'

const Projects = ({ theme }) => {
  const [viewMore, setViewMore] = useState(false)

  const toggleViewMore = (index) => {
    if (viewMore === index) {
      setViewMore(false)
    } else {
      setViewMore(index)
    }
  }

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className='projects-container'>
        {projects.map((project, index) => {
          return (
            <div className={theme === 'dark' ? 'projects-dark project' : 'project'} key={index}>
              <div className='img-container'>
                <img src={project.name.toLowerCase() === 'image splash' ? splash : project.name.toLowerCase() === 'bounce attack' ? bounce : wine} alt={project.name} />
              </div>

              <div className='project-info'>
                <p className='project-info__title'>{project.name}</p>
                <p className='project-info__desc' style={{ display: viewMore !== index && 'none'}}>{project.description}</p>

                <div className='project-info__tech' style={{ display: viewMore !== index && 'none'}}>
                  {project.tools.map((tech, index) => {
                    return (
                      <span key={index}>{tech}</span>
                    )
                  })}
                </div>

                <div className="btn-container">
                  <button className='git'><a href={project.gitLink}>GitHub</a></button>
                  {project.projectLink && <button className='demo'><a href={project.projectLink}>Live Demo</a></button>}
                </div>
              </div>

              <div className='more'>
                <i className={viewMore === index ? "rotate-up fas fa-chevron-down" : "fas fa-chevron-down"} onClick={() => toggleViewMore(index)}></i>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
