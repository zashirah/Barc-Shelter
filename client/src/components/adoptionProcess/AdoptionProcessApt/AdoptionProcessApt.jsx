import React, { useState } from "react";

import DayColumn from "./DayColumn/DayColumn";
import { getNext5Days } from "../../../utils/getNext5Days";

import "./AdoptionProcessApt.css";

const AdoptionProcessApt = ({ applicants, applicant, updateApplicant }) => {
  const [timesClicked, updateTimesClicked] = useState(1);
  const dateArray = getNext5Days();

  const handleHavePetNoClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      currentlyOwnPetIndicator: "No",
    });
  };

  const handleHavePetYesClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      currentlyOwnPetIndicator: "Yes",
    });
  };

  return (
    <div className="book-appointment-container">
      <h1>Book an Appointment</h1>
      <h3 className="apt-warning">
        To Book an Appointment, answer the question at the bottom then double
        click the time selector.{" "}
      </h3>
      <h3 className="apt-warning">
        Sorry for the inconvenience, we are working to improve this experience.
      </h3>
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
        <label htmlFor="currentlyOwnPetIndicator" className="form-have-pet">
          <span className="required">*</span>Do you have a pet to bring in at
          the appointment?
        </label>

        <input
          className={`form-input-button ${
            applicant.currentlyOwnPetIndicator === "Yes"
              ? "button-shade"
              : "none"
          }`}
          type="button"
          name="currentlyOwnPetIndicatorYes"
          id="currentlyOwnPetIndicatorYes"
          defaultValue="Yes"
          onClick={handleHavePetYesClick}
        />
        <input
          className={`form-input-button ${
            applicant.currentlyOwnPetIndicator === "No"
              ? "button-shade"
              : "none"
          }`}
          type="button"
          name="currentlyOwnPetIndicatorNo"
          id="currentlyOwnPetIndicatorNo"
          defaultValue="No"
          onClick={handleHavePetNoClick}
        />
      </form>
      <h3 className="required">* Required</h3>
    </div>
  )
};

export default AdoptionProcessApt;
