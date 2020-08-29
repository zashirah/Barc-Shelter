import React from "react";
//import { IndexLink, Link } from 'react-router';

import "./SecondaryHeaderImage.css";

const SecondaryHeaderImage = ({ image, breadcrumbs, name }) => {
  return (
    <div className="secondary-header-image-div">
      <img
        className="secondary-header-image"
        src={image}
        alt="Header Image of Pet(s)"
      />
      <h1 className="secondary-header-image-title">
        <i>BARC</i> Shelter
      </h1>
      {breadcrumbs}

      {name && (
        <h1 className="secondary-breadcrumb-name">
          {" "}
          <i
            className="fa fa-caret-right"
            aria-hidden="true"
          ></i>{" "}
          {name}
        </h1>
      )}
    </div>
  );
};

export default SecondaryHeaderImage;
