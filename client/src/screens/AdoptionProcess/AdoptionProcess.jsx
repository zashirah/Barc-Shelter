import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SecondaryHeaderImage from "../../components/SecondaryHeaderImage/SecondaryHeaderImage";
import AdoptionProcessNodes from "../../components/adoptionProcess/AdoptionProcessNodes/AdoptionProcessNodes";
import AdoptionProcessStart from "../../components/adoptionProcess/AdoptionProcessStart/AdoptionProcessStart";
import MainButton from "../../components/MainButton/MainButton";
import AdoptionProcessApplication from "../../components/adoptionProcess/AdoptionProcessApplication/AdoptionProcessApplication";
import AdoptionProcessApt from "../../components/adoptionProcess/AdoptionProcessApt/AdoptionProcessApt";
import Layout from "../../components/shared/Layout/Layout";
import AdoptionProcessFinalize from "../../components/adoptionProcess/AdoptionProcessFinalize/AdoptionProcessFinalize";
import Confirmation from "../../components/adoptionProcess/Confirmation/Confirmation";

import headerImage from "./adoptionProcessImage.png";

import "./AdoptionProcess.css";

import {
  getApplicants,
  getApplicant,
  createApplicant,
} from "../../services/applicant";

const AdoptionProcess = () => {
  const [applicants, updateApplicants] = useState([]);
  const [applicant, updateApplicant] = useState({
    applicantName: "",
    dateOfBirth: "",
    address: "",
    aptNum: "",
    cityState: "",
    phone: "",
    mobile: "",
    hearAboutUs: "",
    employer: "",
    position: "",
    workSchedule: "",
    employmentLength: "",
    yearlyIncome: "",
    apartmentIndicator: "",
    houseIndicator: "",
    homeTypeOther: "",
    yardIndicator: "",
    fenceIndicator: "",
    windowScreenIndicator: "",
    currentlyOwnPetIndicator: "",
    email: "",
    appointment: "",
  });

  const [stage, updateStage] = useState(1);

  const [applicationFinished, updateApplicationFinished] = useState(false);
  const [appointmentBooked, updateAppointmentBooked] = useState(false);

  const handleEmailChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    updateApplicant({
      ...applicant,
      [name]: value,
    });
  };
 
  useEffect(() => {
    let today = new Date();
    today = Date.parse(today);
    let todayP7 = new Date(new Date().getTime() + 24 * 7 * 60 * 60 * 1000);
    todayP7 = Date.parse(todayP7);
    const fetchApplicants = async () => {
      const applicants = await getApplicants();
      const applicantsWithinDays = applicants.filter((app) => {
        return (
          Date.parse(app.appointment) >= today &&
          Date.parse(app.appointment) <= todayP7
        );
      });
      console.log("log", applicantsWithinDays);
      updateApplicants(applicantsWithinDays);
    };
    fetchApplicants();
  }, []);

  const handleStageChange = (event) => {
    event.preventDefault();
    updateStage((prevState) => prevState + 1);
  };

  const handleSubmitApplication = (event) => {
    event.preventDefault();
    updateStage((prevState) => prevState + 1);
    updateApplicationFinished(true)
  };

  const handleSkipApplication = (event) => {
    event.preventDefault();
    updateStage((prevState) => prevState + 1);
    updateApplicationFinished(false);
  };

  const handleSubmitAppointment = (event) => {
    event.preventDefault();
    if (applicant.currentlyOwnPetIndicator) {
      updateStage((prevState) => prevState + 1);
      updateAppointmentBooked(true);
    }
  };

  const handleSkipAppointment = (event) => {
    event.preventDefault();
    updateStage((prevState) => prevState + 1);
    updateAppointmentBooked(false)
    updateApplicant({
      ...applicant,
      appointment: ''
    })
  };
  
  const handleCompleteApplication = (event) => {
    event.preventDefault()
    if (applicant.email) {
      updateStage((prevState) => prevState + 1);
      createApplicant(applicant)
    }
  }

  return (
    <Layout>
      <div className="adoption-page-div">
        <SecondaryHeaderImage image={headerImage} />
        <AdoptionProcessNodes updateStage={updateStage} stage={stage} />
        <div className="adoption-process-children">
          {/* only 1 of the four below will be shown - based on stage */}
          {stage === 1 && <AdoptionProcessStart />}
          {stage === 2 && (
            <AdoptionProcessApplication
              applicant={applicant}
              updateApplicant={updateApplicant}
            />
          )}
          {stage === 3 && (
            <AdoptionProcessApt
              applicants={applicants}
              applicant={applicant}
              updateApplicant={updateApplicant}
            />
          )}
          {stage === 4 && (
            <AdoptionProcessFinalize
              applicant={applicant}
              updateApplicant={updateApplicant}
              applicationFinished={applicationFinished}
              appointmentBooked={appointmentBooked}
              applicant={applicant}
            />
          )}
          {stage === 5 && <Confirmation />}
        </div>
        <div className="adoption-process-buttons">
          {stage === 1 && (
            <button className="start-app-button-gray">
              View & Print an Offline Application
            </button>
          )}
          {stage === 2 && (
            <button
              className="start-app-button-gray"
              onClick={handleSkipApplication}
            >
              Skip, I'll complete it later
            </button>
          )}
          {stage === 3 && (
            <button
              className="start-app-button-gray"
              onClick={handleSkipAppointment}
            >
              Skip, I'll book it later
            </button>
          )}

          {stage === 4 && (
            <div className="email-subform-container">
              <form>
                <label className="form-email-label" htmlFor="email">
                  <span className="required">*</span>Enter your email here to
                  receice a receipt/reminder:
                </label>
                <input
                  className="form-input form-email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="myemail@email.com"
                  value={applicant.email}
                  onChange={handleEmailChange}
                />
              </form>
              <div className="required">* Required</div>
            </div>
          )}
          {stage === 2 && (
            <button
              className="start-app-button"
              onClick={handleSubmitApplication}
            >
              Save & Continue
            </button>
          )}

          {stage === 3 && (
            <button
              className="start-app-button"
              onClick={handleSubmitAppointment}
            >
              Review App
            </button>
          )}

          {stage === 4 && (
            <button
              className="start-app-button"
              onClick={handleCompleteApplication}
            >
              Complete App
            </button>
          )}

          {stage === 1 && (
            <button className="start-app-button" onClick={handleStageChange}>
              Start Application Online
            </button>
          )}
          {stage === 5 && (
            <div>
              <Link to="/">
                <button className="gray main-button">
                  Click here to exit back to home
                </button>
              </Link>
              
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdoptionProcess;
