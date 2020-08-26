import React, { useState } from "react";

import DayColumn from "./DayColumn/DayColumn";
import { getNext5Days } from "../../../utils/getNext5Days";

import "./AdoptionProcessApt.css";

const AdoptionProcessApt = ({ applicants, applicant, updateApplicant }) => {
  const [timesClicked, updateTimesClicked] = useState(1);
  const dateArray = getNext5Days();
  // console.log(applicants)

  const handleHavePetNoClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      currentlyOwnPetIndicator: false,
    });
  };

  const handleHavePetYesClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      currentlyOwnPetIndicator: true,
    });
  };

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
      <form>
        <label htmlFor="currentlyOwnPetIndicator">
          Do you have a pet to bring in at the appointment?
        </label>

        <input
          className={`form-input-button ${
            applicant.currentlyOwnPetIndicator ? "button-shade" : "none"
          }`}
          type="button"
          name="currentlyOwnPetIndicatorYes"
          id="currentlyOwnPetIndicatorYes"
          defaultValue="Yes"
          onClick={handleHavePetYesClick}
        />
        <input
          className={`form-input-button ${
            !applicant.currentlyOwnPetIndicator ? "button-shade" : "none"
          }`}
          type="button"
          name="currentlyOwnPetIndicatorNo"
          id="currentlyOwnPetIndicatorNo"
          defaultValue="No"
          onClick={handleHavePetNoClick}
        />
      </form>
    </div>
  );
};

export default AdoptionProcessApt;
