import React from "react";

import "./APStartCTAButtonSmall.css";

const APStartCTAButtonSmall = ({ buttonText }) => {
  return (
    <div>
      <button className="cta-button-small"> {buttonText} </button>
    </div>
  );
};

export default APStartCTAButtonSmall;
