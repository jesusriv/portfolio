import React, { useEffect, useRef, useState } from 'react'
import { scrollIntoView } from './utils'

import About from './components/about'
import Projects from './components/projects'

const App = () => {
  const [name, setName] = useState('')
  const [theme, setTheme] = useState('light')
  const [index, setIndex] = useState(-1)

  const prevIndex = useRef(index)

  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')


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
      <div className={theme === 'light' ? "container light" : 'container dark'}>
        <header>
          <nav>
            <ul>
              <li onClick={() => scrollIntoView('projects')}>Projects</li>
              <li onClick={() => scrollIntoView('contact')}>Contact</li>
            </ul>
          </nav>
        </header>

        <main>
          <div className='landing'>
            <div className='landing__content'>
              <h1 style={{ color: theme === 'dark' ? '#9cd6c8' : ''}}>{`> ${name}`}<div className='flicker'></div></h1>
            <p>
              Hi, I'm a Software Engineering major and web developer based in Los Angeles, CA; passionate about creating 
              and designing solutions to real world problems.
            </p>
            </div>
          
            <About theme={theme} />
          </div>
          <Projects theme={theme} />
          
          
        </main>

      </div>
      
      <div  id="contact" className={theme === 'light' ? "dark" : 'light'}>
        <h2>Contact</h2>
        <p>Let's get in touch!</p>

        <div className="contact-links">
          <a href="https://github.com/jesusriv" className={theme === 'dark' ? 'light' : ''}><i className="fa-brands fa-github"></i></a>
          <a href="https://linkedin.com/in/rivera-jesus" className={theme === 'dark' ? 'light' : ''}><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="mailto:faerie_armorer_0w@icloud.com?subject=Let's%20Collaborate!&body=..." className={theme === 'dark' ? 'light' : ''}><i className="fa-solid fa-envelope"></i></a>
        </div>
        <footer>
          <p>© 2023 Jesus Rivera</p>
        </footer>
      </div>

      <div id="theme-btn" className={theme === 'dark' ? 'sun' : ''} onClick={toggleTheme}>
        {theme === 'light' ? (
        <i className="fa-regular fa-moon fa-flip-horizontal"></i> 
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </div>
    </>
  )
}

export default App
