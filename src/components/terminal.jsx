import React from 'react'
import './terminal.scss'
import about from '../data/about'

const Terminal = () => {
  return (
    <div id="terminal">
      <div id="terminal-border">
        <div className="close"></div>
        <div className="minimize"></div>
        <div className="maximize"></div>
      </div>
      {about.map((item, index) => {
        return (
          <div key={index} className="output">
            <p className='title'>{'> ' + item.title}</p>
            <p className='content'>
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

export default Terminal
