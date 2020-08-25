import React from 'react'

import SecondaryHeaderImage from '../../components/SecondaryHeaderImage/SecondaryHeaderImage'
import AdoptionProcessNodes from "../../components/adoptionProcess/AdoptionProcessNodes/AdoptionProcessNodes";
import AdoptionProcessStart from "../../components/adoptionProcess/AdoptionProcessStart/AdoptionProcessStart";

import headerImage from './adoptionProcessImage.png'

const AdoptionProcess = () => {
  return (
    <div>
      <SecondaryHeaderImage image={headerImage} />
      <AdoptionProcessNodes />
      <AdoptionProcessStart />
    </div>
  );
}

export default AdoptionProcess
