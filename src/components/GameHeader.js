import { Link } from 'react-router-dom'
import Waldo from '../assets/waldo.png'
import Woof from '../assets/woof.png'
import Wenda from '../assets/wenda.png'
import Wizard from '../assets/wizard.png'
import Odlaw from '../assets/odlaw.png'

const GameHeader = () => {
  return (
    <header>
      <Link to="/" ><h1>wheres the guy</h1></ Link>
      <img className="head-image" src={Waldo} />
      <img className="head-image" src={Woof} />
      <img className="head-image" src={Wenda} />
      <img className="head-image" src={Wizard} />
      <img className="head-image" src={Odlaw} />
      <div className="timer">00:00</div>
    </header>
  )
}


export default GameHeader;