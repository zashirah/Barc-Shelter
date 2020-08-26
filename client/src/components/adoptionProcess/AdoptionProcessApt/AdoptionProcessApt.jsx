import React from "react";

import DayColumn from "./DayColumn/DayColumn";
import { getNext5Days } from "../../../utils/getNext5Days";

import "./AdoptionProcessApt.css";

const AdoptionProcessApt = ({ applicants }) => {
  const dateArray = getNext5Days();
  // console.log(applicants)
  return (
    <div className="book-appointment-container">
      <h1>Book an Appointment</h1>
      <div className="date-columns-container">
        {dateArray.map((date) => ( 
          <DayColumn date={date} key={date} applicants={applicants}/>
        ))}
      </div>
    </div>
  );
};

export default AdoptionProcessApt;
