import React from 'react'

import "./AdoptionProcessInfoSection.css"

const AdoptionProcessInfoSection = () => {
  return (
    <div>
      <div className="ap-eligibility-info-container">
        <h2 className="ap-eligibility-info-title">Eligibility Information</h2>
        <ol className="ap-eligibility-info-list">
          <li>Fill out the Adoption Application either online or offline.</li>
          <li>
            Schedule an Appointment to visit your new firend! BARC wants
            potential adopters to spend time with the animals before they take
            them home. (All potential adopters must come in person to meet the
            animal) Have a pet? Bring them in to visit as well.
          </li>
          <li>
            Please make sure you have the following items to complete your
            adoption process
            <ul className="ap-eligibility-info-unorder-list">
              <li>
                Two valid forms of ID (must be 21 years and over)
                <li>$250 Adoption fee for dogs</li>
                <li>$200 Adoption fee for cats</li>
                <li>Two References</li>
                <li>Lease or Letter from landloard allowing animal</li>
              </li>
            </ul>
          </li>
          <li>
            Upon approval of application, we'll contact you and scheulde pick-up
            of your new best friend. Please note it is best to bring home an
            animal at the start of the weekend when you have time to settle in
            with your new family member!
          </li>
          <li>
            <strong>Start a great life together</strong>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default AdoptionProcessInfoSection
