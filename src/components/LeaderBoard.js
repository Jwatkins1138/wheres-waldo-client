import React, { useState, useEffect } from 'react'
import Header from './Header'
import Loading from './Loading'

const LeaderBoard = () => {
  const [loading, setLoading] = useState(true);
  const [spaceScores, setSpaceScores] = useState([]);
  const [hollywoodScores, setHollywoodScores] = useState([]);
  const [factoryScores, setFactoryScores] = useState([]);
  const loadScores = () => {
    const url = "https://frozen-badlands-89928.herokuapp.com/api/v1/scores";
    var tempSpace = [];
    var tempHollywood = [];
    var tempFactory = [];
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
      throw new Error("network error"); 
      })
      .then((data) => {
        data.forEach((score) => {
          if (score.level_id === 1) {
            tempSpace.push(score);
            setSpaceScores(tempSpace);
          } else if (score.level_id === 2) {
              tempHollywood.push(score);
              setHollywoodScores(tempHollywood);
          } else if (score.level_id === 3) {
              tempFactory.push(score);
              setFactoryScores(tempFactory);
          }
        })
      })
      .then(() => {
        setLoading(false);
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

  const drawScores = (score) => {
    return (
      <div key={score.id} className="score-item">
        <li><span>{score.player}</span></li><span>{timeConvert(score.seconds)}</span>
      </div>
    )
  }

  useEffect(() => {
    loadScores();
  }, [])

  return (
    <div className="leader-board">
      <>
      {loading ? (
        <Loading /> 
      ) : (
      <>
      <Header />
      <div className="board-container">
        <h2>leader board</h2>
        <div className="score-item">
          <h3>player</h3><h3>score</h3>
        </div>
        <div className="score-title">
          <h4>level: space</h4>
        </div>
        <ol>
        {spaceScores.map((score) => {
          return drawScores(score);
        })}
        </ol>
        <div className="score-title">
          <h4>level: hollywood</h4>
        </div>
        <ol>
        {hollywoodScores.map((score) => {
          return drawScores(score);
        })}
        </ol>
        <div className="score-title">
          <h4>level: track</h4>
        </div>
        <ol>
        {factoryScores.map((score) => {
          return drawScores(score);
        })}
        </ol>
      </div>
      </>
      )}
      </>
    </div>
  )
}

export default LeaderBoard;