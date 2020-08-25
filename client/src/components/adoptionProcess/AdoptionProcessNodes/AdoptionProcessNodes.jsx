import React from 'react'

import NodeCircle from './NodeCircle/NodeCircle'

import "./AdoptionProcessNodes.css"

const AdoptionProcessNodes = () => {
  return (
    <div className="adoption-process-nodes">
      <NodeCircle number={1} nodeCircleStage={"previous-node"} />
      <NodeCircle number={2} nodeCircleStage={"current-node"} />
      <NodeCircle number={3} nodeCircleStage={"upcoming-node"} />
      <NodeCircle number={4} nodeCircleStage={"upcoming-node"} />
    </div>
  );
}

export default AdoptionProcessNodes
