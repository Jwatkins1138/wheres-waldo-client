import Header from './Header'
import Space from '../assets/space.jpg'
import Hollywood from '../assets/hollywood.jpg'
import Factory from '../assets/factory.jpg'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Game = (props) => {

  const location = useLocation()
  const { levelID } = location.state
  const [level, setLevel] = useState({});
  const loadLevel = () => {
    const url = `https://frozen-badlands-89928.herokuapp.com/api/v1/levels/${levelID}`;
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

  const setPic = () => {
    if (levelID === 1) {
      return Space;
    } else if (levelID === 2) {
      return Hollywood;
    } else if (levelID === 3) {
      return Factory;
    } else {
      return Factory;
    }
    
  }

  const pic = setPic();

  const setScore = () => {
    var tempScore = {
      player: 'test player from react',
      seconds: 250,
      level_id: levelID
    };
    const url = "https://frozen-badlands-89928.herokuapp.com/api/v1/scores";
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tempScore),
    })

  }

  return (
    <div className="level">
      <Header />
      <h2>{level.name}</h2>
      <div className='game-area'>
        <img className="level-image" src={pic} />
      </div>
    </div>
  )
}

export default Game;