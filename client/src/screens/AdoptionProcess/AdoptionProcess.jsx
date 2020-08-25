import React from 'react'

import SecondaryHeaderImage from '../../components/SecondaryHeaderImage/SecondaryHeaderImage'
import AdoptionProcessNodes from "../../components/adoptionProcess/AdoptionProcessNodes/AdoptionProcessNodes";

import headerImage from './adoptionProcessImage.png'

const AdoptionProcess = () => {
  return (
    <div>
      <SecondaryHeaderImage image={headerImage} />
      <AdoptionProcessNodes />
    </div>
  );
}

export default AdoptionProcess
