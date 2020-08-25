import React from "react";

import "./AdoptionProcessApplication.css"

const AdoptionProcessApplication = () => {
  return (
    <div className="application-form-container">
      <h2 className="application-form-title">Application Form</h2>
      <form className="application-form">
        <h3 className="subscetion-title">Personal Information</h3>
        <div className="form-personal-info form-subsection">
          <label className="input-label" htmlFor="form-name">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="form-name"
            id="form-name"
          />
          <label className="input-label" htmlFor="form-dob">
            Date of Birth:
          </label>
          <input
            className="form-input"
            type="date"
            name="form-dob"
            id="form-dob"
          />
          <br />
          <label className="input-label" htmlFor="form-address">
            Address:
          </label>
          <input
            className="form-input"
            type="text"
            name="form-address"
            id="form-address"
          />
          <label className="input-label" htmlFor="form-apt-num">
            Apt #:
          </label>
          <input
            className="form-input"
            type="text"
            name="form-apt-num"
            id="form-apt-num"
          />
          <label className="input-label" htmlFor="form-city-state">
            City/State:
          </label>
          <input
            className="form-input"
            type="text"
            name="form-city-state"
            id="form-city-state"
          />
          <br />
          <label className="input-label" htmlFor="form-phone">
            Phone:
          </label>
          <input
            className="form-input"
            type="tel"
            name="form-phone"
            id="form-phone"
          />
          <label className="input-label" htmlFor="form-mobile">
            Mobile:
          </label>
          <input
            className="form-input"
            type="tel"
            name="form-mobile"
            id="form-mobile"
          />
          <br />
          <label className="input-label hear-about" htmlFor="form-mobile">
            How did you hear about BARC Shelter? (Please be specific)
          </label>
          <br/>
          <textarea
            className="form-input"
            name="form-mobile"
            id="form-mobile"
            rows="6"
            cols="100"
          ></textarea>
        </div>
        <h3 className="subscetion-title">Work Information</h3>
        <div className="form-work-info form-subsection">
          <label className="input-label" htmlFor="form-employer">
            Employer:
          </label>
          <input
            className="form-input"
            type="text"
            name="form-employer"
            id="form-employer"
          />
          <label className="input-label" htmlFor="form-position">
            Your Position:
          </label>
          <input
            className="form-input"
            type="text"
            name="form-position"
            id="form-position"
          />
          <br/>
          <label className="input-label" htmlFor="form-work-schedule">
            Work Schedule:
          </label>
          <input
            className="form-input"
            type="text"
            name="form-work-schedule"
            id="form-work-schedule"
          />
          <label className="input-label" htmlFor="form-employment-length">
            Length of Employment:
          </label>
          <input
            className="form-input"
            type="text"
            name="form-employment-length"
            id="form-employment-length"
          />
          <br/>
          <label className="input-label" htmlFor="form-salary">
            Please enter your yearly income:
          </label>
          <input
            className="form-input"
            type="text"
            name="form-salary"
            id="form-salary"
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
            name="form-home-type"
            id="form-home-type-home"
            defaultValue="Home"
          />
          <input
            className="form-input-button"
            type="button"
            name="form-home-type"
            id="form-home-type-apt"
            defaultValue="Apartment"
          />
          <span className="input-label other-house-text">Other:</span>
          <input
            className="form-input"
            type="text"
            name="form-home-type"
            id="form-home-type-other"
          />
          <br />
          <label
            className="input-label"
            className="input-label"
            htmlFor="form-home-type"
          >
            Do you have a yard?
          </label>
          <input
            className="form-input-button"
            type="button"
            name="form-home-type"
            id="form-home-type-yes"
            defaultValue="Yes"
          />
          <input
            className="form-input-button"
            type="button"
            name="form-home-type"
            id="form-home-type-no"
            defaultValue="No"
          />
          <br />
          <label className="input-label" htmlFor="form-fence">
            If yes, do you have a fence around the yard?
          </label>
          <input
            className="form-input-button"
            type="button"
            name="form-fence"
            id="form-fence-yes"
            defaultValue="Yes"
          />
          <input
            className="form-input-button"
            type="button"
            name="form-fence"
            id="form-fence-no"
            defaultValue="No"
          />
          <br />
          <label className="input-label" htmlFor="form-window-screens">
            Do you have a screen over your windows?
          </label>
          <input
            className="form-input-button"
            type="button"
            name="form-window-screens"
            id="form-window-screens-yes"
            defaultValue="Yes"
          />
          <input
            className="form-input-button"
            type="button"
            name="form-window-screens"
            id="form-window-screens-no"
            defaultValue="No"
          />
        </div>
      </form>
    </div>
  );
};

export default AdoptionProcessApplication;
