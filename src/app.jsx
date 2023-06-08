import React, { useEffect, useRef, useState } from 'react'
import { scrollIntoView } from './utils'

import Terminal from './components/terminal'
import Projects from './components/projects'

const App = () => {
  const [name, setName] = useState('')
  const [index, setIndex] = useState(-1)

  const prevIndex = useRef(index)

  useEffect(() => {
    const typeName = async () => setName(name => name + 'Jesus Rivera'.charAt(index))

    if (index >= 0) typeName()
  }, [index])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => index + 1)
      prevIndex.current = index
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [index])

  return (
    <>
      <div className='container'>
        <header>
          <p onClick={() => scrollIntoView('projects')}>Projects</p>
          <p onClick={() => scrollIntoView('contact')}>Contact</p>
        </header>

          <div className='landing'>
            <div className='landing__text'>
              <h1 >{`> ${name}`}<div className='flicker'></div></h1>
              <p>
                Hi, I'm a Software Engineering major and web developer based in Los Angeles, CA; passionate about creating
                and designing solutions to real world problems.
              </p>
            </div>

            <Terminal />
          </div>

          <Projects />
      </div>
    </>
  )
}

export default App
