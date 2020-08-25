import React from "react"
import "./VolunteerPage.css"
import group from "./group.jpg"

const VolunteerPage = () => {
  return (
    <div>
      <img src={group} alt="Dog" className="group-of-dogs" />
      <h1 className="volunteer-header-text">
        <i>BARC</i> Shelter
      </h1>
    </div>
  )
}

export default VolunteerPage
