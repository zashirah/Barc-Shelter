import React from "react";

import TimeButton from "../TimeButton/TimeButton";

import "./DayColumn.css";

const DayColumn = ({ date, applicants }) => {
  const timeArray = ["12", "13", "14", "15", "16"];
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
          buttonStatus={applicants.find(
              (applicant) => Date.parse(applicant.appointment) === Date.parse(
                new Date(
                  date[3].getFullYear(),
                  date[3].getMonth(),
                  date[3].getDate(),
                  time
                )
              )
            ) ? 'apt-time-booked' : 'apt-time-not-booked'}
        />
      ))}
    </div>
  );
};

export default DayColumn;
