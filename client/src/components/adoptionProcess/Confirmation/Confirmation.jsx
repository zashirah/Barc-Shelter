import React from "react";

import "./Confirmation.css";

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">Confirmation</h2>
      <div className="confirmation-paragraphs">
        <p>Thank you! Your application has been submitted!</p>
        <p>
          Your application number is ###
          <br />
          Please take a screenshot of this page for your references.
        </p>
        <p>
          A copy of your application has been sent to your email!
          <br />
          Upon approval we will contact you with the next steps of the process.
        </p>
        <p>
          If you have any questions or concerns about your application status,
          please call us at 718-486-7489.
        </p>
        <p>We're looking forward to introducing you to your new companion!</p>
        <h2 className="ap-confirmation-bs-signature">
          -<i>BARC</i> Shelter
        </h2>
      </div>
    </div>
  );
};

export default Confirmation;
