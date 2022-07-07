import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../NavButton/NavButton'
import './style.css'

interface Props {
  items: Array<object>
}

const Navbar: React.FC<Props> = ({ items }) => {
  return (
    <nav>
      <div className='nav-content'>
        <Link to='/' className='nav-header'>Luma</Link>
        <div className="nav-button">
          {
            items.map((el: any) => {
              return <Button content={el.title} link={el.link}></Button>
            })
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar