import React from 'react'
import { Link } from 'react-router-dom'
import "./AnimalCard.css"

const AnimalCard = ({ name, age, images, id }) => {
  return (
    <Link ClassName="link" to={`/pet/${id}`} >
    <div className="outer-box"> 
      <img className="pet-card-image"src={images} alt={name}/>
      <div className="cat-info-box">
        <div className="cat-name">
          <h1>{name}</h1>
        </div>
        <div className="cat-age">
        <h1>Age: {age}</h1>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default AnimalCard

