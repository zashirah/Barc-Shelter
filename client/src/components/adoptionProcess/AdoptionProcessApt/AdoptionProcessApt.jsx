import React, { useState } from "react";

import DayColumn from "./DayColumn/DayColumn";
import { getNext5Days } from "../../../utils/getNext5Days";

import "./AdoptionProcessApt.css";

const AdoptionProcessApt = ({ applicants, applicant, updateApplicant }) => {
  const [timesClicked, updateTimesClicked] = useState(1);
  const dateArray = getNext5Days();
  // console.log(applicants)
  return (
    <div className="book-appointment-container">
      <h1>Book an Appointment</h1>
      <div className="date-columns-container">
        {dateArray.map((date) => (
          <DayColumn
            timesClicked={timesClicked}
            updateTimesClicked={updateTimesClicked}
            date={date}
            key={date}
            applicants={applicants}
            applicant={applicant}
            updateApplicant={updateApplicant}
          />
        ))}
      </div>
    </div>
  );
};

export default AdoptionProcessApt;
