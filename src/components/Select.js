import React, { useState, useEffect } from 'react'
import Space from '../assets/space.jpg'
import Hollywood from '../assets/hollywood.jpg'
import Track from '../assets/track.jpg'
import Header from './Header'
import Loading from './Loading'
import { Link } from 'react-router-dom'

const Select = () => {

  const [loading, setLoading] = useState(true);
  const [space, setSpace] = useState({});
  const [hollywood, setHollywood] = useState({});
  const [track, setTrack] = useState({});
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
            setTrack(level);
          }
        })
      })
      .then(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    loadLevels();
  }, [])

  return (
    <div className="select">
      <>
      {loading ? (
        <Loading /> 
      ) : (
      <>
      <Header />
      <h2>select a level</h2>
      <div className="select-main">
        <div className="select-item">
        <div className="select-info"><span>level name: {space.name}</span></div>
        <Link to="/game" state={{levelID: 1}}><img className="select-icon" src={Space} /></Link>
        </div>
        <div className="select-item">
        <div className="select-info"><span>level name: {hollywood.name}</span></div>
        <Link to="/game" state={{levelID: 2}}><img className="select-icon" src={Hollywood} /></Link>
        </div>
        <div className="select-item">
        <div className="select-info"><span>level name: {track.name}</span></div>
        <Link to="/game" state={{levelID: 3}}><img className="select-icon" src={Track} /></Link>
        </div>
      </div>
      </>
      )}
      </>
    </div>
  )
}

export default Select;