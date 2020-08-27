import React from 'react'

import "./ApplicantCard.css"

import { Link } from 'react-router-dom'

const ApplicantCard = ({ applicant }) => {
  return (
    // <Link to={`/applicants/${applicant._id}`}>
      <div className="applicant-card">
        <div className="applicant-name-div">
          Name: {applicant.applicantName}{" "}
        </div>
        <div className="applicant-appt-div">
          Appointment Time: {applicant.appointment}
        </div>
        <Link to={`/applicants/${applicant._id}/edit`}>
          <button>Edit</button>
        </Link>
        <button>Delete</button>
      </div>
    // </Link>
  );
}

export default ApplicantCard
