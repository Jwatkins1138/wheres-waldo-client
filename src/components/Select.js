import React, { useState, useEffect } from 'react'
import Space from '../assets/space.jpg'
import Hollywood from '../assets/hollywood.jpg'
import Factory from '../assets/factory.jpg'

const Select = () => {

  const [levels, setLevels] = useState([]);
  const loadLevels = () => {
    const url = "https://frozen-badlands-89928.herokuapp.com/api/v1/levels/index";
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
      <h2>hello from select</h2>
      <p>{levels}</p>
      <img className="select-icon" src={Space} />
      <img className="select-icon" src={Hollywood} />
      <img className="select-icon" src={Factory} />

    </div>
  )
}

export default Select;