import Header from './Header'
import HollyPic from '../assets/hollywood.jpg'
import React, { useState, useEffect } from 'react'

const Hollywood = () => {
  const [level, setLevel] = useState({});
  const loadLevel = () => {
    const url = "https://frozen-badlands-89928.herokuapp.com/api/v1/levels/2";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          console.log(data);
          return data.json();
        }
      throw new Error("network error"); 
      })
      .then((data) => {
        setLevel(data)
        })
        console.log(level);
  }

  useEffect(() => {
    loadLevel();
  }, [])

  return (
    <div className="level">
      <Header />
      <h2>{level.name}</h2>
      <img className="level-image" src={HollyPic} />
    </div>
  )
}

export default Hollywood;