// react
import React from 'react'

// css
import "./HomeScreenSmallSection2.css"

const HomeScreenSmallSection2 = ({
  leftImage,
  leftImageAlt,
  rightImage,
  rightImageAlt,
  text,
  extraLeftPaddingTop,
}) => {
  return (
    <div className="home-small-section-container">
      <div style={{ paddingTop: extraLeftPaddingTop }}>
        <img
          className="home-small-section-left-pic"
          src={leftImage}
          alt={leftImageAlt}
        />
      </div>
      <div>{text}</div>
      <img
        className="home-small-section-right-pic"
        src={rightImage}
        alt={rightImageAlt}
      />
    </div>
  );
};

export default HomeScreenSmallSection2
