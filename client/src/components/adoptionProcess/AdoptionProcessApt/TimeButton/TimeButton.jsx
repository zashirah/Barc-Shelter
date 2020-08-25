import React from 'react'

const TimeButton = ({ date, time, status, datetime }) => {
  return <button>{time === 0 ? 12 : time}:00 PM</button>;
};

export default TimeButton
