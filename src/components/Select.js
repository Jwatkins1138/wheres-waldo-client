import React, { useState, useEffect } from 'react'

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
          tempLevels.push(level.name);
          setLevels(tempLevels);
        })
      })
  }

  useEffect(() => {
    loadLevels();
  }, [])

  return (
    <div>
      <h2>hello from select</h2>
      <p>{levels}</p>
    </div>
  )
}

export default Select;