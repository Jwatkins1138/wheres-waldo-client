import GameHeader from './GameHeader'
import ScoreModal from './ScoreModal'
import Space from '../assets/space.jpg'
import Hollywood from '../assets/hollywood.jpg'
import Factory from '../assets/factory.jpg'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Game = (props) => {

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
    ID: 1
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
      gameProps.ID = 1;
      return Space;
    } else if (levelID === 2) {
      gameProps.ID = 2;
      return Hollywood;
    } else if (levelID === 3) {
      gameProps.ID = 3;
      return Factory;
    } else {
      return Factory;
    }
    
  }

  const pic = setPic();

  const endGame = () => {
    setGame(true);
  }

  return (
    <div className="level">
      <GameHeader gameProps={gameProps}/>
      <button onClick={endGame}>end</button>
      <div className='game-area'>
        <img className="level-image" src={pic} />
      </div>
    </div>
  )
}

export default Game;