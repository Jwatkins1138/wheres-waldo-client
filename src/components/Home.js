import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Waldo from '../assets/waldo_home.png'

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home">
        <div className='home-title'>
        <img className="home-image" src={Waldo} />
        <div className="home-links">
        <Link to="/select" ><h2 className="enter">play the game</h2></Link>
        <Link to="/leader" ><h2 className="enter">leaderboard</h2></Link>
        <Link to="/about" ><h2 className="enter">about</h2></Link>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Home;