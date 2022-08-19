import Header from './Header'
import Waldo from '../assets/waldo_home.png'

const Loading = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home">
        <div className='home-title'>
        <img className="home-image" src={Waldo} />
        <div className="home-links">
        <h3>Loading...</h3>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Loading;