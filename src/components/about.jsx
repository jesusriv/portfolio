import React from 'react'
import './about.scss'
import about from '../data/about'

const About = ({ theme }) => {
  return (
    <div className={theme !== 'light' ? 'terminal-dark': 'terminal-light'} id="about">
      <div id="terminal-border" className={theme === "dark" ? 'terminal-dark-border' : ''}>
        <div className="close"></div>
        <div className="minimize"></div>
        <div className="maximize"></div>
      </div>
      {about.map((item, index) => {
        return (
          <div key={index}>
            <p className='about-title'>{'> ' + item.title}</p>
            <p className='about-content'>
              {item.content.map((content, index) => {
                return (
                  <span key={index}>
                    {index === 0 && '"['}
                    {content}
                    {index === item.content.length - 1 ? ']"' : ', '}
                  </span>
                )
              })}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default About
