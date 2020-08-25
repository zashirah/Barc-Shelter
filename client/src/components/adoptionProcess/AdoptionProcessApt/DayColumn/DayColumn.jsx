import React from "react";

import TimeButton from "../TimeButton/TimeButton";

import "./DayColumn.css"

const DayColumn = ({ date }) => {
  const timeArray = ['12', '13', '14', '15', '16']
  // const TimeButtonJSX = timeArray.map()

  return (
    <div className="day-column-container" key={date[1]}>
      <div> {date[2]} </div>
      <div> {date[0]} </div>
      {timeArray.map((time) => (
        <TimeButton
          key={`${date[1]}T${time}:00:00`}
          date={date[1]}
          time={time - 12}
          datetime={`${date[1]}T${time}:00:00`}
        />
      ))}
    </div>
  );
};

export default DayColumn;
