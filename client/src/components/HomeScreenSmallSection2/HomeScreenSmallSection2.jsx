// react
import React from 'react'

// css
import "./HomeScreenSmallSection2.css"

const HomeScreenSmallSection2 = ({ leftImage, leftImageAlt, rightImage, rightImageAlt, text}) => {
  return (
    <div className="home-small-section-container">
      <img
        className="home-small-section-left-pic"
        src={leftImage}
        alt={leftImageAlt}
      />
      <div>{text}</div>
      <img
        className="home-small-section-right-pic"
        src={rightImage}
        alt={rightImageAlt}
      />
    </div>
  );
}

export default HomeScreenSmallSection2
