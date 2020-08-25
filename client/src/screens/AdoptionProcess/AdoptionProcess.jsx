import React from "react";

import SecondaryHeaderImage from "../../components/SecondaryHeaderImage/SecondaryHeaderImage";
import AdoptionProcessNodes from "../../components/adoptionProcess/AdoptionProcessNodes/AdoptionProcessNodes";
import AdoptionProcessStart from "../../components/adoptionProcess/AdoptionProcessStart/AdoptionProcessStart";
import MainButton from "../../components/MainButton/MainButton";
import AdoptionProcessApplication from "../../components/adoptionProcess/AdoptionProcessApplication/AdoptionProcessApplication";

import headerImage from "./adoptionProcessImage.png";

import "./AdoptionProcess.css";

const AdoptionProcess = () => {
  return (
    <div>
      <SecondaryHeaderImage image={headerImage} />
      {/* Node color will change based on stage - pass through as props */}
      <AdoptionProcessNodes /> 
      <div className="adoption-process-children">
        {/* only 1 of the four below will be shown - based on stage */}
        {/* <AdoptionProcessStart /> */}
        <AdoptionProcessApplication />
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
  );
};

export default AdoptionProcess;
