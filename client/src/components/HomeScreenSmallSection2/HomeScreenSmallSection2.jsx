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
  extraRightPaddingTop,
  textWidth
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
      <di style={{maxWidth: `${textWidth}`}}>{text}</di>
      <div style={{ paddingTop: extraRightPaddingTop }}>
        <img
          className="home-small-section-right-pic"
          src={rightImage}
          alt={rightImageAlt}
        />
      </div>
    </div>
  );
};

export default HomeScreenSmallSection2
