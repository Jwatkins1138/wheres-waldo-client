import React, { useState, useEffect } from 'react'
import Space from '../assets/space.jpg'
import Hollywood from '../assets/hollywood.jpg'
import Factory from '../assets/factory.jpg'
import Header from './Header'
import { Link } from 'react-router-dom'

const Select = () => {

  const [levels, setLevels] = useState([]);
  const loadLevels = () => {
    const url = "https://frozen-badlands-89928.herokuapp.com/api/v1/levels";
    var tempLevels = [];
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
          console.log(level);
          tempLevels.push(level.name);
          setLevels(tempLevels);
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
        <p>{levels}</p>
        <Link to="/game" state={{levelID: 1}}><img className="select-icon" src={Space} /></Link>
        <Link to="/game" state={{levelID: 2}}><img className="select-icon" src={Hollywood} /></Link>
        <Link to="/game" state={{levelID: 3}}><img className="select-icon" src={Factory} /></Link>
      </div>
    </div>
  )
}

export default Select;