import React from 'react'

import "./NodeLine.css"

const NodeLine = ({ nodeLineStage }) => {
  return <div className={`node-line ${nodeLineStage}`}></div>;
}

export default NodeLine
