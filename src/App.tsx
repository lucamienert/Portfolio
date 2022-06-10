import React from 'react'
import { Navbar } from './components'
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
      <div className='container'>
        <div className='heading'>
          <h1 className='header'>Luca Mienert</h1>
          <h2 className='sub-header'>Apprentice as an Software Developer</h2>
        </div>
      </div>
    </>
  )
}

export default App
