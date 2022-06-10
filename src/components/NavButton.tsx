import { Link } from "react-router-dom"

interface Props {
  content: string
  link: string
}

const Button: React.FC<Props> = ({ link, content }) => {
  return (
    <>
      <Link to={link}>{content}</Link>
    </>
  )
}

export default Button