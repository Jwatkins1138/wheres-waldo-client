import React, { useState, useEffect } from 'react'
import Space from '../assets/space.jpg'
import Hollywood from '../assets/hollywood.jpg'
import Factory from '../assets/factory.jpg'
import Header from './Header'
import { Link } from 'react-router-dom'

const Select = () => {

  const [space, setSpace] = useState({});
  const [hollywood, setHollywood] = useState({});
  const [factory, setFactory] = useState({});
  const loadLevels = () => {
    const url = "https://frozen-badlands-89928.herokuapp.com/api/v1/levels";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          console.log(data);
          return data.json();
        }
      throw new Error("network error"); 
      })
      .then((data) => {
        data.forEach((level) => {
          if (level.id === 1) {
            setSpace(level);
          } else if (level.id === 2) {
            setHollywood(level);
          } else if (level.id === 3) {
            setFactory(level);
          }
        })
      })
  }

  useEffect(() => {
    loadLevels();
  }, [])

  return (
    <div className="select">
      <Header />
      <div className="select-main">
        <h2>select a level</h2>
        <div className="select-info"><span>level name: {space.name}</span><span>high score:</span></div>
        <Link to="/game" state={{levelID: 1}}><img className="select-icon" src={Space} /></Link>
        <div className="select-info"><span>level name: {hollywood.name}</span><span>high score:</span></div>
        <Link to="/game" state={{levelID: 2}}><img className="select-icon" src={Hollywood} /></Link>
        <div className="select-info"><span>level name: {factory.name}</span><span>high score:</span></div>
        <Link to="/game" state={{levelID: 3}}><img className="select-icon" src={Factory} /></Link>
      </div>
    </div>
  )
}

export default Select;