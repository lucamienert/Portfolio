import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  items: Array<object>
}

const Navbar: React.FC<Props> = ({ items }) => {
  return (
    <nav>
      <div className='nav-content'>
        <Link to='/' className='nav-header'>Luma</Link>
        <div className='nav-items'>
          {
            items.map((el: any) => {
              return <Link to={el.link}>{el.title}</Link>
            })
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar