import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import Layout from "../../components/shared/Layout/Layout"
import EditApplicantForm from "../../components/EditApplicantForm/EditApplicantForm"

import { getApplicant } from "../../services/applicant";

const EditApplicant = () => {
  const params = useParams()

  const [editApplicant, updateEditApplicant] = useState({})


  useEffect(() => {
    const fetchApplicant = async () => {
      const applicant = await getApplicant(params.applicantId)
      updateEditApplicant(applicant)
    };
    fetchApplicant()
  }, [])

  if (editApplicant) {
    return (
      <Layout>
        <EditApplicantForm applicant={editApplicant} updateApplicant={updateEditApplicant}/>
      </Layout>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default EditApplicant
