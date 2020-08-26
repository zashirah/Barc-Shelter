import React from 'react'

import "./TimeButton.css"

const TimeButton = ({ date, time, status, datetime, buttonStatus }) => {
  return (
    <button className={`${buttonStatus}`}>
      {time === 0 ? 12 : time}:00 PM
    </button>
  );
};

export default TimeButton
