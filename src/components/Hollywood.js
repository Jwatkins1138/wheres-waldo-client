import Header from './Header'
import HollyPic from '../assets/hollywood.jpg'

const Hollywood = () => {
  return (
    <div className="level">
      <Header />
      <h2>hollywood</h2>
      <img className="level-image" src={HollyPic} />
    </div>
  )
}

export default Hollywood;