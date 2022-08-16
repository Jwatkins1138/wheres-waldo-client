import React, { useState, useEffect } from 'react'
import Header from './Header'

const LeaderBoard = () => {
  const [scores, setScores] = useState([]);
  const loadScores = () => {
    const url = "https://frozen-badlands-89928.herokuapp.com/api/v1/scores";
    var tempScores = [];
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
          console.log(score);
          tempScores.push(score);
          setScores(tempScores);
        })
      })
      console.log(scores);
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
      {scores.map((score) => {
        return drawScores(score);
      })}
    </div>
  )
}

export default LeaderBoard;