import React from "react";
import "./SmallButton.css";

const SmallButton = ({ buttonText, buttonColor, clickFunction }) => {
  return (
    <button className={`small-button ${buttonColor}`}>{buttonText}</button>
  );
};

export default SmallButton;
