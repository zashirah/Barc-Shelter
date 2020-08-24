import React from 'react'

import './SecondaryHeaderImage.css'

const SecondaryHeaderImage = ({ image }) => {
  return (
    <div className='secondary-header-image-div'>
      <img className='secondary-header-image' src={image} alt="Header Image of Pet(s)" />
      <h1 className='secondary-header-image-title'>Barc Shelter</h1>
    </div>
  )
}

export default SecondaryHeaderImage
