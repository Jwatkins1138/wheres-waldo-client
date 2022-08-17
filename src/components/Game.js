import Header from './Header'
import Space from '../assets/space.jpg'
import Hollywood from '../assets/hollywood.jpg'
import Factory from '../assets/factory.jpg'
import React, { useState, useEffect } from 'react'

const Game = (props) => {

  const setPic = () => {
    if (props.id === 1) {
      return Space;
    } else if (props.id === 2) {
      return Hollywood;
    } else if (props.id === 3) {
      return Factory;
    } else {
      return Space;
    }
    
  }

  const setScore = () => {
    var tempScore = {
      player: 'test player from react',
      seconds: 250,
      level_id: 1
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
      <h2>{props.name}</h2>
      <img className="level-image" src={setPic} />
      <button onClick={setScore}>test score</button>
    </div>
  )
}

export default Game;