import GameHeader from './GameHeader'
import Loading from './Loading'
import Space from '../assets/space.jpg'
import Hollywood from '../assets/hollywood.jpg'
import Track from '../assets/track.jpg'
import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'


const Game = () => {

  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const { levelID } = location.state;

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
      .then(() => {
        setLoading(false);
      })
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
      return Track;
    } else {
      return Track;
    }
  }

  const pic = setPic();

  const imageRef = useRef(null);


  const compareLocation = (locA, locB) => {
    console.log(locA);
    console.log(locB);
    if ((locA[0] >= locB[0][0])
       && (locA[0] <= locB[0][1])
       && (locA[1] >= locB[1][0])
       && (locA[1] <= locB[1][1]) ) {
        return true;
       } else {
        return false;
       }
  }


  const checkClick = (e) => {
    var loc = [e.nativeEvent.offsetX/e.target.offsetWidth*100, e.nativeEvent.offsetY/e.target.offsetHeight*100];
    if (compareLocation(loc, level.waldo_location)) {
      setWaldo(true);
    } else if (compareLocation(loc, level.woof_location)) {
      setWoof(true);
    } else if (compareLocation(loc, level.wenda_location)) {
      setWenda(true);
    } else if (compareLocation(loc, level.wizard_location)) {
      setWizard(true);
    } else if (compareLocation(loc, level.odlaw_location)) {
      setOdlaw(true);
    }
  }

  useEffect(() => {
    checkGame();
  }, [waldo,  woof, wenda, wizard, odlaw])

  const checkGame = () => {
    if ((waldo) && (woof) && (wenda) && (wizard) && (odlaw)) {
      setGame(true);
    }
  }

  return (
    <div className="level">
      <>
      {loading ? (
        <Loading /> 
      ) : (
      <>
      <GameHeader gameProps={gameProps}/>
      <div className='game-area'>
        <img ref={imageRef} onClick={checkClick} className="level-image" src={pic} />
      </div>
      <aside></aside>
      </>
      )}
      </>
    </div>
  )
}

export default Game;