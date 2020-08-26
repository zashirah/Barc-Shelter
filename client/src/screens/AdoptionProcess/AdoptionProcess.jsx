import React, { useState, useEffect } from "react";

import SecondaryHeaderImage from "../../components/SecondaryHeaderImage/SecondaryHeaderImage";
import AdoptionProcessNodes from "../../components/adoptionProcess/AdoptionProcessNodes/AdoptionProcessNodes";
import AdoptionProcessStart from "../../components/adoptionProcess/AdoptionProcessStart/AdoptionProcessStart";
import MainButton from "../../components/MainButton/MainButton";
import AdoptionProcessApplication from "../../components/adoptionProcess/AdoptionProcessApplication/AdoptionProcessApplication";
import AdoptionProcessApt from "../../components/adoptionProcess/AdoptionProcessApt/AdoptionProcessApt";
import Layout from "../../components/shared/Layout/Layout";

import headerImage from "./adoptionProcessImage.png";

import "./AdoptionProcess.css";

import { getApplicants, getApplicant } from "../../services/applicant";

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

  useEffect(() => {
    const fetchApplicants = async () => {
      const applicants = await getApplicants();
      updateApplicants(applicants);
    };
    fetchApplicants();
  }, []);

  return (
    <Layout>
      <div>
        <SecondaryHeaderImage image={headerImage} />
        {/* Node color will change based on stage - pass through as props */}
        <AdoptionProcessNodes />
        <div className="adoption-process-children">
          {/* only 1 of the four below will be shown - based on stage */}
          <AdoptionProcessStart />
          {/* <AdoptionProcessApplication
          applicant={applicant}
          updateApplicant={updateApplicant}
        /> */}
          {/* <AdoptionProcessApt applicants={applicants} /> */}
        </div>
        <div className="adoption-process-buttons">
          {/* MainButton buttonText will change based on stage */}
          <MainButton
            buttonText={"View & Print an Offline Application"}
            buttonColor={"gray"}
          />
          <MainButton
            buttonText={"Start Application Online"}
            buttonColor={"orange"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AdoptionProcess;
