import React, { useState, useEffect } from 'react'

import "./TimeButton.css"

const TimeButton = ({ date, time, datetime, buttonStatus, timesClicked, updateTimesClicked, updateApplicant, applicant }) => {
  const [buttonState, setButtonState] = useState();

  useEffect(() => {
    setButtonState(buttonStatus);
  }, [buttonStatus]);

  const handleClick = (event) => {
    event.preventDefault();
    console.log('timesClicked', timesClicked)
    if (buttonState === "apt-time-not-booked" && timesClicked <= 1) {
      setButtonState("apt-time-clicked");
      updateTimesClicked(1);
      updateApplicant({
        ...applicant,
        appointment: datetime
      })
    } else if (buttonState === "apt-time-clicked") {
      updateTimesClicked(0);
      setButtonState("apt-time-not-booked");
    }
  }; 

  if (buttonState) {
    return (
      <button className={`time-button ${buttonState}`} onClick={handleClick}>
        {time === 0 ? 12 : time}:00 PM
      </button>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default TimeButton
