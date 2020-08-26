import React from 'react'

import "./NodeCircle.css"

const NodeCircle = ({ number, nodeCircleStage }) => {
  return <div className={`node-circle ${nodeCircleStage}`}>{number}</div>;
}

export default NodeCircle
