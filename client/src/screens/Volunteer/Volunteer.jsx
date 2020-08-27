import React from "react";
import VolunteerPage from "../../components/VolunteerPage/VolunteerPage";
import Layout from "../../components/shared/Layout/Layout";
import "./Volunteer.css"


const Volunteer = () => {
  return (
    <Layout>
      <div className="main-body">
        <VolunteerPage />
      </div>
    </Layout>
  );
};

export default Volunteer;
