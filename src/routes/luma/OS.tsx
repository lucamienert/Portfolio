import { Navbar } from '../../components'

const OS: React.FC = () => {
  const navItems = [
    {
      title: 'Language',
      link: '/lumalang'
    }
  ]

  return (
    <>
      <Navbar items={navItems} />
    </>
  )
}
  
export default OS