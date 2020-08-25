import React from "react"
import "./HorizaontalAnimalPictureSection.css"
import animals from "./many-animals.jpg"

const HorizaontalAnimalPictureSection = () => {
  return (
    <div>
      <img src={animals} alt="animals" className="many-animals" />
    </div>
  )
}

export default HorizaontalAnimalPictureSection
