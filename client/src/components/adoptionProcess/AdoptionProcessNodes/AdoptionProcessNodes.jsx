import React from 'react'

import NodeCircle from './NodeCircle/NodeCircle'
import NodeLine from "./NodeLine/NodeLine";
import PreviousButton from "../PreviousButton/PreviousButton"

import "./AdoptionProcessNodes.css"

const AdoptionProcessNodes = () => {
  return (
    <div className="adoption-process-nodes">
      <PreviousButton />
      <NodeCircle number={1} nodeCircleStage={"previous-node"} />
      <NodeLine nodeLineStage={"previous-node-line"} />
      <NodeCircle number={2} nodeCircleStage={"current-node"} />
      <NodeLine nodeLineStage={"upcoming-node-line"} />
      <NodeCircle number={3} nodeCircleStage={"upcoming-node"} />
      <NodeLine nodeLineStage={"upcoming-node-line"} />
      <NodeCircle number={4} nodeCircleStage={"upcoming-node"} />
    </div>
  );
}

export default AdoptionProcessNodes
