import GameHeader from './GameHeader'
import Space from '../assets/space.jpg'
import Hollywood from '../assets/hollywood.jpg'
import Factory from '../assets/factory.jpg'
import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'


const Game = () => {

  const location = useLocation()
  const { levelID } = location.state

  const [level, setLevel] = useState({});

  const [game, setGame] = useState(false);
  const [waldo, setWaldo] = useState(false);
  const [woof, setWoof] = useState(false);
  const [wenda, setWenda] = useState(false);
  const [wizard, setWizard] = useState(false);
  const [odlaw, setOdlaw] = useState(false);

  const gameProps = {
    game: game,
    waldo: waldo,
    woof: woof,
    wenda: wenda,
    wizard: wizard,
    odlaw: odlaw,
    ID: levelID
  }

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

  const imageRef = useRef(null);

  const showClick = (e) => {
    console.log(`clicked ${e.pageX/imageRef.current.width} ${e.pageY/imageRef.current.height}`);
  }

  const endGame = () => {
    setGame(true);
  }

  const findWaldo = () => {
    setWaldo(true);
  }

  const findWoof = () => {
    setWoof(true);
  }

  const findWenda = () => {
    setWenda(true);
  }

  const findWizard = () => {
    setWizard(true);
  }

  const findOdlaw = () => {
    setOdlaw(true);
  }


  return (
    <div className="level">
      <GameHeader gameProps={gameProps}/>
      <div className='game-area'>
        <img ref={imageRef} onClick={showClick} className="level-image" src={pic} />
      </div>
      <aside></aside>
    </div>
  )
}

export default Game;