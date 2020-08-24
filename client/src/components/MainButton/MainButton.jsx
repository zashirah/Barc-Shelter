import React from 'react'

import './MainButton.css'

const MainButton = ({ buttonText }) => {
  return (
    <button className="main-button">
      {buttonText}
    </button>
  )
}

export default MainButton
