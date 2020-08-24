import React from 'react'

import './EligibilityInformationSection.css'

const EligibilityInformationSection = () => {
  return (
    <div className='eligibility-info-container'>
      <h2 className='eligibility-info-title'>Eligibility Information</h2>
      <ol className='eligibility-info-list'>
        <li>Two valid forms of ID (must be 21 years of age or older)</li>
        <li>$200 adoption fee for cat.</li>
        <li>$250 adoption fee for dog.</li>
        <li>Two references</li>
        <li>Letter from landlord or lease that allowing animal.</li>
        <li>In-person meeting with animal.</li>
        <li>(If you currently have a pet) pet meeting with animal.</li>
      </ol>
    </div>
  )
}

export default EligibilityInformationSection
