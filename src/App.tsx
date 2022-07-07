import React from 'react'
import { Navbar, Hero } from './components'
import './index.css'

const App: React.FC = () => {
  const navItems = [
    {
      title: 'Operating System',
      link: '/lumaos'
    },
    {
      title: 'Language',
      link: '/lumalang'
    }
  ]

  return (
    <>
      <Navbar items={navItems}/>
      <Hero />
    </>
  )
}

export default App
