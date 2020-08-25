import React from 'react'

import "./APStartCTAButton.css"

const APStartCTAButton = ({ buttonText }) => {
  return (
    <div>
      <button className="cta-button"> {buttonText} </button>
    </div>
  );
};

export default APStartCTAButton
