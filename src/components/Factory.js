import Header from './Header'
import FactoryPic from '../assets/factory.jpg'

const Factory = () => {
  return (
    <div className="level">
      <Header />
      <h2>factory</h2>
      <img className="level-image" src={FactoryPic} />
    </div>
  )
}

export default Factory;