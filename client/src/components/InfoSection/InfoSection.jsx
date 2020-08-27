import React from 'react'

import { Link } from "react-router-dom"

import MainButton from '../MainButton/MainButton'

import './InfoSection.css'

const InfoSection = ({ name, age, sex, bioPersonality }) => {
  return (
    <div className="pet-detail-info-section">
      <div>
        <h2>Pet Info:</h2>
        <h3 className="pet-detail-left">Name: {name}</h3>
        <h3 className="pet-detail-left">Age: {age}</h3>
        <h3 className="pet-detail-left">Sex: {sex}</h3>
        <h3 className="pet-detail-left">
          Bio/Personality:<span> {bioPersonality} </span>{" "}
        </h3>
      </div>
      <Link to="/adopt">
        <MainButton buttonText={"Adopt me!"} buttonColor={"orange"} />
      </Link>
    </div>
  );
}

export default InfoSection
