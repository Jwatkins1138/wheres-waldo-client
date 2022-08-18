import React, { useState, useEffect } from 'react'
import ScoreModal from './ScoreModal'
import Waldo from '../assets/waldo.png'
import Woof from '../assets/woof.png'
import Wenda from '../assets/wenda.png'
import Wizard from '../assets/wizard.png'
import Odlaw from '../assets/odlaw.png'
import { Link } from 'react-router-dom'

const GameHeader = (props) => {
  const [time, setTime] = useState(0);
  const scoreProps = {
    score: time,
    ID: props.gameProps.ID
  }

  const timeConvert = (time) => {
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 3600 % 60);

    h < 10 ? h = `0${h}` : h = h;
    m < 10 ? m = `0${m}` : m = m;
    s < 10 ? s = `0${s}` : s = s;

    return `${h}:${m}:${s}`
  }


  useEffect(() => {
    const interval = setInterval(() => {
      if (props.gameProps.game) {
        return () => clearInterval(interval);
      } else {
      setTime(time => time + 1);
      }
    },1000);
    return () => clearInterval(interval);
  }, [props.gameProps.game])
  
  return (
    <aside>
      <>
      {props.gameProps.game?(
        <ScoreModal scoreProps={scoreProps}/>
      ) : ( 
      <>
      <Link to="/"><h1>home</h1></Link>
      <img className={props.gameProps.waldo.toString()} src={Waldo} />
      <img className={props.gameProps.woof.toString()} src={Woof} />
      <img className={props.gameProps.wenda.toString()} src={Wenda} />
      <img className={props.gameProps.wizard.toString()} src={Wizard} />
      <img className={props.gameProps.odlaw.toString()} src={Odlaw} />
      <div className="timer"><h4>{timeConvert(time)}</h4></div>
      </>
      )}
      </>
    </aside>
  )
}


export default GameHeader;