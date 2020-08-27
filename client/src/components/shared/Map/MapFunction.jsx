import React from "react";
import Location from "../Images/Location.png";

// console.log(Location);

const MapFunction = () => {
  // Import result is the URL of your image
  return (
    <iframe
      width="250"
      height="250"
      src="https://www.google.com/maps?q=barc+shelter+new+york&amp;output=embed"
    ></iframe>
  );
};
export default MapFunction;
