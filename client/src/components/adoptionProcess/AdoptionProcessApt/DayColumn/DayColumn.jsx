import React from "react";

import TimeButton from "../TimeButton/TimeButton";

import "./DayColumn.css";

const DayColumn = ({ date, applicants, timesClicked, updateTimesClicked, updateApplicant, applicant }) => {
  const timeArray = ["12", "13", "14", "15", "16"];

  return (
    <div className="day-column-container" key={date[1]}>
      <div className="day-column-title"> {date[2]} </div>
      <div className="day-column-title"> {date[0]} </div>
      <div className="time-container">
        {timeArray.map((time) => (
          <TimeButton
            key={`${date[1]}T${time}:00:00`}
            timesClicked={timesClicked}
            updateTimesClicked={updateTimesClicked}
            applicant={applicant}
            updateApplicant={updateApplicant}
            date={date[1]}
            time={time - 12}
            datetime={`${date[1]}T${time}:00:00`}
            buttonStatus={
              applicants.find(
                (applicant) =>
                  Date.parse(applicant.appointment) ===
                  Date.parse(
                    new Date(
                      date[3].getFullYear(),
                      date[3].getMonth(),
                      date[3].getDate(),
                      time
                    )
                  )
              )
                ? "apt-time-booked"
                : "apt-time-not-booked"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default DayColumn;
