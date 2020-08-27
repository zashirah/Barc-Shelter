import React from 'react'

import NodeCircle from './NodeCircle/NodeCircle'
import NodeLine from "./NodeLine/NodeLine";
import PreviousButton from "../PreviousButton/PreviousButton"

import "./AdoptionProcessNodes.css"

const AdoptionProcessNodes = ({ updateStage, stage }) => {
  return (
    <div className="adoption-process-nodes">
      {stage !== 1 && <PreviousButton updateStage={updateStage} />}
      <NodeCircle
        number={1}
        nodeCircleStage={stage === 1 ? "current-node" : "previous-node"}
        updateStage={updateStage}
      />
      <NodeLine
        nodeLineStage={stage > 1 ? "previous-node-line" : "upcoming-node-line"}
      />
      <NodeCircle
        number={2}
        nodeCircleStage={
          stage === 1
            ? "upcoming-node"
            : stage === 2
            ? "current-node"
            : "previous-node"
        }
        updateStage={updateStage}
      />
      <NodeLine
        nodeLineStage={stage > 2 ? "previous-node-line" : "upcoming-node-line"}
      />
      <NodeCircle
        number={3}
        nodeCircleStage={
          stage >= 4
            ? "previous-node"
            : stage === 3
            ? "current-node"
            : "upcoming-node"
        }
        updateStage={updateStage}
      />
      <NodeLine
        nodeLineStage={stage > 3 ? "previous-node-line" : "upcoming-node-line"}
      />
      <NodeCircle
        number={4}
        nodeCircleStage={
          stage === 4
            ? "current-node"
            : stage === 5
            ? "previous-node"
            : "upcoming-node"
        }
        updateStage={updateStage}
      />
    </div>
  );
};

export default AdoptionProcessNodes
