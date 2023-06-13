import React from 'react'
import './projects.scss'

import Project from './project'
import projects from '../data/projects'

const Projects = ({ theme }) => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className='projects-container'>
        {projects.map((project, index) => {
          return (
            <Project project={project} index={index} key={index} /> 
          )
        })}
      </div>
    </div>
  )
}

export default Projects
