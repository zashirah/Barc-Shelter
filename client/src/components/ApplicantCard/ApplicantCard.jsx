import React, { useState } from "react";

import "./ApplicantCard.css";

import { Link, Redirect } from "react-router-dom";
import { deleteApplicant } from "../../services/applicant";

const ApplicantCard = ({ applicant }) => {
  const [isDeleted, setDeleted] = useState(false);

  const handleDelete = () => {
    deleteApplicant(applicant._id);
    setDeleted(true)
  };

  if (isDeleted) {
    return <Redirect to={`/applicants`} />;
  }

  return (
    // <Link to={`/applicants/${applicant._id}`}>
    <div className="applicant-card">
      <div className="applicant-name-div">Name: {applicant.applicantName} </div>
      <div className="applicant-appt-div">
        Appointment Time: {applicant.appointment}
      </div>
      <Link to={`/applicants/${applicant._id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
    // </Link>
  );
};

export default ApplicantCard;
