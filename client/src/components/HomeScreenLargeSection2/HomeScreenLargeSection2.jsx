import React from 'react'
import { Link } from "react-router-dom"

import "./HomeScreenLargeSection2.css"

import MainButton from "../MainButton/MainButton"

const HomeScreenLargeSection2 = ({ srcImage, srcImageAlt, text, buttonText, buttonLink, leftPadding}) => {
  return (
    <div className="home-large-section-div">
      <img
        className="home-large-section-image"
        src={srcImage}
        alt={srcImageAlt}
      />
      <div className={`home-large-section-text-button ${leftPadding}`}>
        <div className="home-large-section-text">{text}</div>
        <Link to={buttonLink}>
          <MainButton buttonColor="orange" buttonText={buttonText} />
        </Link>
      </div>
    </div>
  );
}

export default HomeScreenLargeSection2
