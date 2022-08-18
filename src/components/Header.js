import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/" ><h1>wheres the guy</h1></ Link>
      <img className="fill-image" />
      <img className="fill-image" />
      <img className="fill-image" />
      <img className="fill-image" />
      <img className="fill-image" />
    </header>
  )
}


export default Header;