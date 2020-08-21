import React from 'react'
import { Link } from 'react-router-dom'

const AnimcalCard = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  )
}

export default AnimcalCard

