import React from 'react'
import './projects.scss'

import projects from '../data/projects'

import bounce from '../assets/bounce_attack.gif'
import splash from '../assets/image_splash.gif'
import wine from '../assets/wine.gif'

const Projects = ({ theme }) => {
  return (
    <div id="projects">
      <h2>Projects</h2>
        {projects.map((project, index) => {
          return (
            <div className={'project'} key={index}>
              <div className='img-container'>
                <img src={project.name.toLowerCase() === 'image splash' ? splash : project.name.toLowerCase() === 'bounce attack' ? bounce : wine} alt={project.name} />
              </div>

              <div className='project-info'>
                <p className='project-info__title'>{project.name}</p>
                <p className='project-info__desc'>{project.description}</p>

                <div className='project-info__tech'>
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
            </div>
          )
        })}
    </div>
  )
}

export default Projects
