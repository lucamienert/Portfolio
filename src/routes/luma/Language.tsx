import { Navbar } from '../../components'

const Language: React.FC = () => {
  const navItems = [
    {
      title: 'Operating System',
      link: '/lumaos'
    }
  ]

  return (
    <>
      <Navbar items={navItems} />
    </>
  )
}
  
export default Language