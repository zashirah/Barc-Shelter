import React from "react";

import "./AdoptionProcessApplication.css";

const AdoptionProcessApplication = ({ applicant, updateApplicant }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "homeTypeOther") {
      updateApplicant({
        ...applicant,
        houseIndicator: false,
        apartmentIndicator: false,
        [name]: value,
      });
    } else {
      updateApplicant({
        ...applicant,
        [name]: value,
      });
    }
  };

  const handleWindowNoClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      windowScreenIndicator: "No",
    });
  };

  const handleWindowYesClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      windowScreenIndicator: "Yes",
    });
  };

  const handleFenceNoClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      fenceIndicator: "No",
    });
  };

  const handleFenceYesClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      fenceIndicator: "Yes",
    });
  };

  const handleYardNoClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      yardIndicator: "No",
    });
  };

  const handleYardYesClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      yardIndicator: "Yes",
    });
  };

  const handleHouseClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      houseIndicator: "Yes",
      apartmentIndicator: "No",
      homeTypeOther: '',
    });
  };

  const handleApartmentClick = (event) => {
    event.preventDefault();
    updateApplicant({
      ...applicant,
      houseIndicator: "No",
      apartmentIndicator: "Yes",
      homeTypeOther: "",
    });
  };

  return (
    <div className="application-form-container">
      <h2 className="application-form-title">Application Form</h2>
      <form className="application-form">
        <h3 className="subscetion-title">Personal Information</h3>
        <div className="form-personal-info form-subsection">
          <label className="input-label" htmlFor="applicantName">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            value={applicant.applicantName}
            name="applicantName"
            id="applicantName"
            onChange={handleChange}
            required
            autoFocus
          />
          <label className="input-label" htmlFor="dateOfBirth">
            Date of Birth:
          </label>
          <input
            className="form-input"
            type="date"
            value={applicant.dateOfBirth}
            name="dateOfBirth"
            id="dateOfBirth"
            onChange={handleChange}
          />
          <br />
          <label className="input-label" htmlFor="address">
            Address:
          </label>
          <input
            className="form-input"
            type="text"
            value={applicant.address}
            name="address"
            id="address"
            onChange={handleChange}
          />
          <label className="input-label" htmlFor="aptNum">
            Apt #:
          </label>
          <input
            className="form-input"
            type="text"
            value={applicant.aptNum}
            name="aptNum"
            id="aptNum"
            onChange={handleChange}
          />
          <label className="input-label" htmlFor="cityState">
            City/State:
          </label>
          <input
            className="form-input"
            type="text"
            value={applicant.cityState}
            name="cityState"
            id="cityState"
            onChange={handleChange}
          />
          <br />
          <label className="input-label" htmlFor="phone">
            Phone:
          </label>
          <input
            className="form-input"
            type="tel"
            value={applicant.phone}
            name="phone"
            id="phone"
            onChange={handleChange}
          />
          <label className="input-label" htmlFor="mobile">
            Mobile:
          </label>
          <input
            className="form-input"
            type="tel"
            value={applicant.mobile}
            name="mobile"
            id="mobile"
            onChange={handleChange}
          />
          <br />
          <label
            className="
            onChange={handleChange}input-label hear-about"
            htmlFor="hearAboutUs"
          >
            How did you hear about BARC Shelter? (Please be specific)
          </label>
          <br />
          <textarea
            className="form-input"
            value={applicant.hearAboutUs}
            name="hearAboutUs"
            id="hearAboutUs"
            rows="6"
            cols="100"
            onChange={handleChange}
          ></textarea>
        </div>
        <h3 className="subscetion-title">Work Information</h3>
        <div className="form-work-info form-subsection">
          <label className="input-label" htmlFor="employer">
            Employer:
          </label>
          <input
            className="form-input"
            type="text"
            value={applicant.employer}
            name="employer"
            id="employer"
            onChange={handleChange}
          />
          <label className="input-label" htmlFor="position">
            Your Position:
          </label>
          <input
            className="form-input"
            type="text"
            value={applicant.position}
            name="position"
            id="position"
            onChange={handleChange}
          />
          <br />
          <label className="input-label" htmlFor="workSchedule">
            Work Schedule:
          </label>
          <input
            className="form-input"
            type="text"
            value={applicant.workSchedule}
            name="workSchedule"
            id="workSchedule"
            onChange={handleChange}
          />
          <label className="input-label" htmlFor="employmentLength">
            Length of Employment:
          </label>
          <input
            className="form-input"
            type="text"
            value={applicant.employmentLength}
            name="employmentLength"
            id="employmentLength"
            onChange={handleChange}
          />
          <br />
          <label className="input-label" htmlFor="yearlyIncome">
            Please enter your yearly income:
          </label>
          <input
            className="form-input"
            type="text"
            value={applicant.yearlyIncome}
            name="yearlyIncome"
            id="yearlyIncome"
            onChange={handleChange}
          />
        </div>
        <h3 className="subscetion-title">About Your Home</h3>
        <div className="form-home-info form-subsection">
          <label className="input-label" htmlFor="form-home-type">
            Do you have a home or apartment?
          </label>
          <input
            className={`form-input-button ${
              applicant.houseIndicator === "Yes" ? "button-shade" : "none"
            }`}
            type="button"
            name="houseIndicator"
            id="houseIndicator"
            defaultValue="Home"
            onClick={handleHouseClick}
          />
          <input
            className={`form-input-button ${
              applicant.apartmentIndicator === "Yes" ? "button-shade" : "none"
            }`}
            type="button"
            name="apartmentIndicator"
            id="apartmentIndicator"
            defaultValue="Apartment"
            onClick={handleApartmentClick}
          />
          <span className="input-label other-house-text">Other:</span>
          <input
            className="form-input"
            type="text"
            name="homeTypeOther"
            id="homeTypeOther"
            value={applicant.homeTypeOther}
            onChange={handleChange}
          />
          <br />
          <label
            className="input-label"
            className="input-label"
            htmlFor="yardIndicator"
          >
            Do you have a yard?
          </label>
          <input
            className={`form-input-button ${
              applicant.yardIndicator === "Yes" ? "button-shade" : "none"
            }`}
            type="button"
            name="yardIndicatorYes"
            id="yardIndicatorYes"
            defaultValue="Yes"
            onClick={handleYardYesClick}
          />
          <input
            className={`form-input-button ${
              applicant.yardIndicator === "No" ? "button-shade" : "none"
            }`}
            type="button"
            name="yardIndicatorNo"
            id="yardIndicatorNo"
            defaultValue="No"
            onClick={handleYardNoClick}
          />
          <br />
          <label className="input-label" htmlFor="fenceIndicator">
            If yes, do you have a fence around the yard?
          </label>
          <input
            className={`form-input-button ${
              applicant.fenceIndicator === "Yes" ? "button-shade" : "none"
            }`}
            type="button"
            name="fenceIndicatorYes"
            id="fenceIndicatorYes"
            defaultValue="Yes"
            onClick={handleFenceYesClick}
          />
          <input
            className={`form-input-button ${
              applicant.fenceIndicator === "No" ? "button-shade" : "none"
            }`}
            type="button"
            name="fenceIndicatorNo"
            id="fenceIndicatorNo"
            defaultValue="No"
            onClick={handleFenceNoClick}
          />
          <br />
          <label className="input-label" htmlFor="windowScreenIndicator">
            Do you have a screen over your windows?
          </label>
          <input
            className={`form-input-button ${
              applicant.windowScreenIndicator === "Yes" ? "button-shade" : "none"
            }`}
            type="button"
            name="windowScreenIndicatorYes"
            id="windowScreenIndicatorYes"
            defaultValue="Yes"
            onClick={handleWindowYesClick}
          />
          <input
            className={`form-input-button ${
              applicant.windowScreenIndicator === "No" ? "button-shade" : "none"
            }`}
            type="button"
            name="windowScreenIndicatorNo"
            id="windowScreenIndicatorNo"
            defaultValue="No"
            onClick={handleWindowNoClick}
          />
        </div>
      </form>
    </div>
  );
};

export default AdoptionProcessApplication;
