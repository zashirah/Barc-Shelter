import React from 'react'
import { Link } from 'react-router-dom'
import "./AnimalCard.css"

const AnimalCard = ({ name, age, images }) => {
  return (
    <div className="outer-box"> 
      <img className="pet-card-image"src={images} alt={name}/>
      <div className="cat-info-box">
        <div className="cat-name">
          <h1>{name}</h1>
        </div>
        <div className="cat-age">
        <h1>{age}</h1>
        </div>
      </div>
     </div>
  )
}

export default AnimalCard

