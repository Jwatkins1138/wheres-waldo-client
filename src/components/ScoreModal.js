import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ScoreModal = (props) => {

  const [player, setPlayer] = useState('');

  const getName = (e) => {
    setPlayer(e.target.value);
  }

  const setScore = () => {
    var tempScore = {
      player: player,
      seconds: props.scoreProps.score,
      level_id: props.scoreProps.ID
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

  const timeConvert = (time) => {
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 3600 % 60);

    h < 10 ? h = `0${h}` : h = h;
    m < 10 ? m = `0${m}` : m = m;
    s < 10 ? s = `0${s}` : s = s;

    return `${h}:${m}:${s}`
  }
  return (
    <div className="modal">
      <div className="modal-message">
        <h5>it took you {timeConvert(props.scoreProps.score)} to find the guys</h5>
        <h5>enter your name for the leaderboard</h5>
      </div>
      <form>
        <label htmlFor="name">name</label>
        <input
          onChange={getName}
          value={player}
          type="text"
          id="name"
        />
        <Link to="/leader"><button onClick={setScore}>submit</button></ Link>
      </form>
    </div>
  )
}

export default ScoreModal;