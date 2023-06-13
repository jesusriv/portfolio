import { useState, useEffect, useRef } from 'react'

import bounce from '../assets/bounce_attack.gif'
import splash from '../assets/image_splash.gif'
import wine from '../assets/wine.gif'

const Project = ({ project, index }) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        } else {
          setInView(false)
        }
      })

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div className={'project'} ref={ref} style={{ boxShadow: inView ? '0 2rem 3rem rgba(0, 0, 0, 0.4)' : ''}}>
      <div className='img-container'>
        <img src={project.name.toLowerCase() === 'image splash' ? splash : project.name.toLowerCase() === 'bounce attack' ? bounce : wine} alt={project.name} />
      </div>

      <div className='project-info'>
        <div className='project-info__text'>
          <p className='project-info__text--title'>{index + 1 + '. ' + project.name}</p>
          <p className='project-info__text--desc'>{project.description}</p>
        </div>

        <div className='project-info__footer'>
          <div className='project-info__tech'>
            {project.tools.map((tech, index) => {
              return (
                <span key={index}>{tech}</span>
              )
            })}
          </div>
          <div className="btn-container">
            <a href={project.gitLink} className='git'>GitHub</a>
            {project.projectLink && <a href={project.projectLink} className='demo'>Live Demo</a>}
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Project
