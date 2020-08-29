// react
import React from "react";
import { Link } from "react-router-dom";

import "./HomePageCard.css"

const HomePageCard = ({ title, imageSrc, imageAlt, link }) => {
  return (
    <div className="home-screen-card-container">
      <h1 className="home-screen-card-title orange-font underlined-font">
        {title}
      </h1>
      <img className="home-screen-card-image" src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default HomePageCard;
