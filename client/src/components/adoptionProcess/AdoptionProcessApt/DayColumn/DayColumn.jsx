import React from "react";

import TimeButton from "../TimeButton/TimeButton";

import "./DayColumn.css"

const DayColumn = ({ date }) => {
  // const timeArray = ['12', '13', '14', '15', '16']
  // const TimeButtonJSX = timeArray.map()

  return (
    <div className="day-column-container"
      key={date[1]}
    >
      <div> {date[2]} </div>
      <div> {date[0]} </div>
    </div>
  );
};

export default DayColumn;
