import React, { useState } from 'react'
import { wrap } from "@popmotion/popcorn";
import leftChevron from './chevron-left.png'
import rightChevron from './chevron-right.png'

const Carousel = ({ petImages }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  console.log(petImages);
  console.log(petImages.length);

  const index = wrap(0, petImages.length, page);
  const index1 = wrap(0, petImages.length, page + 1);
  const index2 = wrap(0, petImages.length, page + 2);
  const index3 = wrap(0, petImages.length, page + 3);
  const index4 = wrap(0, petImages.length, page + 4);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "50vw",
      }}
    >
      <button
        onClick={() => paginate(-1)}
        style={{
          backgroundColor: "white",
          border: "none",
          color: "none",
          height: 100,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={leftChevron} alt="left button click" />
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={petImages[index]}
          alt=""
          style={{
            height: 400,
            width: 400,
            marginBottom: 2.5,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: 400,
            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              height: 97.5,
              width: 97.5,
            }}
            src={petImages[index1]}
            onClick={() => paginate(1)}
          />
          <img
            style={{
              height: 97.5,
              width: 97.5,
            }}
            src={petImages[index2]}
            onClick={() => paginate(2)}
          />
          <img
            style={{
              height: 97.5,
              width: 97.5,
            }}
            src={petImages[index3]}
            onClick={() => paginate(3)}
          />
          <img
            style={{
              height: 97.5,
              width: 97.5,
            }}
            src={petImages[index4]}
            onClick={() => paginate(4)}
          />
        </div>
      </div>
      <button
        onClick={() => paginate(1)}
        style={{
          backgroundColor: "white",
          border: "none",
          color: "none",
          height: 100,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={rightChevron} alt="right button click" />
      </button>
    </div>
  );
};

export default Carousel
