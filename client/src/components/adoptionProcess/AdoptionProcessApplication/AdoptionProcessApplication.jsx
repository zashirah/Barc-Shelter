import React from "react";

import "./AdoptionProcessApplication.css"

const AdoptionProcessApplication = ({ applicant, updateApplicant }) => {

  const handleChange = (event) => {
    const { name, value } = event.target
    updateApplicant({
      ...applicant,
      [name]: value,
    })
  }



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
            className="form-input-button"
            type="button"
            name="houseIndicator"
            id="houseIndicator"
            defaultValue="Home"
          />
          <input
            className="form-input-button"
            type="button"
            name="apartmentIndicator"
            id="apartmentIndicator"
            defaultValue="Apartment"
          />
          <span className="input-label other-house-text">Other:</span>
          <input
            className="form-input"
            type="text"
            name="homeTypeOther"
            id="homeTypeOther"
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
            className="form-input-button"
            type="button"
            name="yardIndicatorYes"
            id="yardIndicatorYes"
            defaultValue="Yes"
          />
          <input
            className="form-input-button"
            type="button"
            name="yardIndicatorNo"
            id="yardIndicatorNo"
            defaultValue="No"
          />
          <br />
          <label className="input-label" htmlFor="fenceIndicator">
            If yes, do you have a fence around the yard?
          </label>
          <input
            className="form-input-button"
            type="button"
            name="fenceIndicatorYes"
            id="fenceIndicatorYes"
            defaultValue="Yes"
          />
          <input
            className="form-input-button"
            type="button"
            name="fenceIndicatorNo"
            id="fenceIndicatorNo"
            defaultValue="No"
          />
          <br />
          <label className="input-label" htmlFor="windowScreenIndicator">
            Do you have a screen over your windows?
          </label>
          <input
            className="form-input-button"
            type="button"
            name="windowScreenIndicatorYes"
            id="windowScreenIndicatorYes"
            defaultValue="Yes"
          />
          <input
            className="form-input-button"
            type="button"
            name="windowScreenIndicatorNo"
            id="windowScreenIndicatorNo"
            defaultValue="No"
          />
        </div>
      </form>
    </div>
  );
};

export default AdoptionProcessApplication;
