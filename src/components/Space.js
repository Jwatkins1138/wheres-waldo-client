import Header from './Header'
import SpacePic from '../assets/space.jpg'

const Space = () => {
  return (
    <div className="level">
      <Header />
      <h2>space</h2>
      <img src={SpacePic} />
    </div>
  )
}

export default Space;