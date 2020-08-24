import React from 'react'

import MainButton from '../MainButton/MainButton'

import './InfoSection.css'

const InfoSection = ({ name, age, sex, bioPersonality }) => {
  return (
    <div className='pet-detail-info-section'>
      <h2>Pet Info:</h2>
      <h3 className='pet-detail-left'>Name: {name}</h3>
      <h3 className='pet-detail-left'>Age: {age}</h3>
      <h3 className='pet-detail-left'>Sex: {sex}</h3>
      <h3 className='pet-detail-left'>Bio/Personality:<span> {bioPersonality} </span> </h3>
      <MainButton buttonText={'Adopt me!'}/>
    </div>
  )
}

export default InfoSection
