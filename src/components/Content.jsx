import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/projects'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

function Content() {
  return (
    <main>
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
    </main>
  )
}

export default Content