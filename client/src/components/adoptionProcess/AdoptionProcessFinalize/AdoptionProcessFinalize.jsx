import React from "react";

import "./AdoptionProcessFinalize.css";

const AdoptionProcessFinalize = ({
  applicationFinished,
  appointmentBooked,
  applicant,
}) => {

  


  return (
    <div className="ap-finalize-container">
      <h2 className="ap-finalize-header">Review Your Application</h2>

      <h3 className="ap-finalize-section-header">
        Application Completion:{" "}
        {applicationFinished ? "Completed" : "Incomplete"}
      </h3>

      <h3 className="ap-finalize-section-header">
        Appointment Time:{" "}
        {appointmentBooked
          ? applicant.appointment
          : "Please contact BARC Shelter at 718-486-7489 to schedule your visit"}
      </h3>

      <h3 className="ap-finalize-section-header">What You Still Need:</h3>
      <ul className="ap-finalize-ul">
        <li>Two valid forms of ID (must be 21 years and over)</li>
        <li>$250 Adoption fee for dogs</li>
        <li>$200 Adoption fee for cats</li>
        <li>Two References</li>
        <li>Lease or Letter from landlord allowing animal</li>
        {!applicationFinished && <li>Application</li>}
        {!appointmentBooked && <li>Appointment</li>}
      </ul>
    </div>
  );
};

export default AdoptionProcessFinalize;
