import { Link } from "react-router-dom"
import './style.css'

interface Props {
  content: string
  link: string
}

const NavButton: React.FC<Props> = ({ link, content }) => {
  return (
    <>
      <Link to={link}>{content}</Link>
    </>
  )
}

export default NavButton