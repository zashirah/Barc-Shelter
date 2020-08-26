import React from "react";
import Location from "../Images/Location.png";

// console.log(Location);

const MapFunction = () => {
  // Import result is the URL of your image
  return (
    <img
      className="img"
      width={150}
      height={120}
      mode="fit"
      src={Location}
      alt="Location"
    />
  );
};
export default MapFunction;
