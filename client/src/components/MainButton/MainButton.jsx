import React from 'react'

import './MainButton.css'

const MainButton = ({ buttonText, buttonColor }) => {
  return (
    <button className={`main-button ${buttonColor}`}>
      {buttonText}
    </button>
  )
}

export default MainButton
