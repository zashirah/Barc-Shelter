import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import Layout from '../../components/shared/Layout/Layout'
import ApplicantCard from "../../components/ApplicantCard/ApplicantCard"

import { getApplicants } from "../../services/applicant"

import "./Applicants.css"

const Applicants = () => {
  const [applicants, updateApplicants] = useState();

  useEffect(() => {
    const fetchApplicants = async () => {
      const applicants = await getApplicants();
      console.log(applicants);
      updateApplicants(applicants);
    };
    fetchApplicants();
  }, []);

  if (applicants) {
    return (
      <Layout>
        <div className="applicant-cards">
          <h1>Select your card below to update your application</h1>
          {applicants.map((applicant) => (
            <ApplicantCard applicant={applicant}/>
          ))}
        </div>
      </Layout>
    );
  } else {
    return <div>Loading...</div>
  }
};


export default Applicants
