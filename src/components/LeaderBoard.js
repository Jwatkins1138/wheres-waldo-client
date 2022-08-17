import React, { useState, useEffect } from 'react'
import Header from './Header'

const LeaderBoard = () => {
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
          console.log(data);
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
  }

  const drawScores = (score) => {
    return (
      <div key={score.player} className="score-item">
        <span>{score.player}</span><span>{score.seconds}</span>
      </div>
    )
  }

  useEffect(() => {
    loadScores();
  }, [])

  return (
    <div className="leader-board">
      <Header />
      <h1>leader board</h1>
      <div className="score-item">
        <h3>player</h3><h3>score</h3>
      </div>
      <div className="score-item">
        <h4>level: space</h4>
      </div>
      {spaceScores.map((score) => {
        return drawScores(score);
      })}
      <div className="score-item">
        <h4>level: hollywood</h4>
      </div>
      {hollywoodScores.map((score) => {
        return drawScores(score);
      })}
      <div className="score-item">
        <h4>level: factory</h4>
      </div>
      {factoryScores.map((score) => {
        return drawScores(score);
      })}
    </div>
  )
}

export default LeaderBoard;