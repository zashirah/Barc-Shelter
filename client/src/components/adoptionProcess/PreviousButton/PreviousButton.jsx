import React from "react";

import "./PreviousButton.css"

const PreviousButton = ({ updateStage }) => {
  const handlePreviousButton = (event) => {
    event.preventDefault();
    updateStage(prevState => prevState - 1);
  };

  return (
    <button className="previous-button" onClick={handlePreviousButton}>
      Previous
    </button>
  );
};

export default PreviousButton;
