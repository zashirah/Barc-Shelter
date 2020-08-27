import React from 'react'

import "./ApplicantCard.css"

import { Link } from 'react-router-dom'

const ApplicantCard = ({ applicant }) => {
  return (
    <Link classaName="link" to={`/applicant/${applicant._id}`}>
      <div className="applicant-card">
        <div>Name: {applicant.applicantName} </div>
        <div>Appointment Time: {applicant.appointment}</div>
      </div>
    </Link>
  );
}

export default ApplicantCard
