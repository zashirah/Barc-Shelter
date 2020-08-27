import React from 'react'

import { Link } from "react-router-dom"

import APStartCTAImageCard from "./APStartCTAImageCard/APStartCTAImageCard";
import APStartCTAButton from "./APStartCTAButton/APStartCTAButton";
import APStartCTAButtonSmall from "./APStartCTAButtonSmall/APStartCTAButtonSmall";

import "./APStartCTASection.css"

import _2CatsAndADog from "./2-cats-and-a-dog.png";
import catYawning from "./cat-yawning.png";

const APStartCTASection = () => {
  return (
    <div className="cta-section">
      <div className="cta-see-our-pets">
        <APStartCTAImageCard imageSrc={_2CatsAndADog} />
        <div>
          <Link to="/pets/dog">
            <APStartCTAButtonSmall buttonText={"See our Dogs!"} />
          </Link>
          <Link to="/pets/cat">
            <APStartCTAButtonSmall buttonText={"See our Cats!"} />
          </Link>
        </div>
      </div>
      <div className="cta-sponsor-a-pet">
        <APStartCTAImageCard imageSrc={catYawning} />
        <APStartCTAButton buttonText={"Sponsor a Pet"} />
      </div>
    </div>
  );
}

export default APStartCTASection
