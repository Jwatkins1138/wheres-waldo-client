import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <Link to="/select" ><h2 className="enter">play the game</h2></Link>
      <Link to="/leader" ><h2 className="enter">leaderboard</h2></Link>
    </div>
  )
}
export default Home;