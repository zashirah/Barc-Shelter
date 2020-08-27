import React from 'react'

import "./NodeCircle.css"

const NodeCircle = ({ number, nodeCircleStage, updateStage }) => {
  const handleNodeClick = (event) => {
    event.preventDefault();
    if (nodeCircleStage === "previous-node") {
      updateStage(number)
    }
  };

  return (
    <div
      role="button"
      className={`node-circle ${nodeCircleStage}`}
      onClick={handleNodeClick}
    >
      {number}
    </div>
  );
};

export default NodeCircle
