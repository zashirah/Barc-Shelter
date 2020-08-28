import React from 'react'

import NodeCircle from './NodeCircle/NodeCircle'
import NodeLine from "./NodeLine/NodeLine";
import PreviousButton from "../PreviousButton/PreviousButton"

import "./AdoptionProcessNodes.css"

const AdoptionProcessNodes = ({ updateStage, stage }) => {
  return (
    <div className="ap-node-and-name-container">
      <div className="ap-node-previus-button-div">{stage !== 1 && <PreviousButton updateStage={updateStage} />}</div>
      <div>
        <div className="adoption-process-node-names">
          <h3 className="adoption-process-node-name1">Process</h3>
          <h3 className="adoption-process-node-name2">Application</h3>
          <h3 className="adoption-process-node-name3">Appointment</h3>
          <h3 className="adoption-process-node-name">Finalize</h3>
        </div>
        <div className="adoption-process-nodes">
          {/* <div>
        <h3>Process</h3> */}
          <NodeCircle
            number={1}
            nodeCircleStage={stage === 1 ? "current-node" : "previous-node"}
            updateStage={updateStage}
          />
          {/* </div> */}
          {/* <div>
        <h3 style={{color:'white'}}> - </h3> */}
          <NodeLine
            nodeLineStage={
              stage > 1 ? "previous-node-line" : "upcoming-node-line"
            }
          />
          {/* </div> */}
          {/* <div>
        <h3>Application</h3> */}
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
          {/* </div> */}
          <NodeLine
            nodeLineStage={
              stage > 2 ? "previous-node-line" : "upcoming-node-line"
            }
          />
          {/* <div>
        <h3>Appointment</h3> */}
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
          {/* </div> */}
          <NodeLine
            nodeLineStage={
              stage > 3 ? "previous-node-line" : "upcoming-node-line"
            }
          />
          {/* <div>
        <h3>Finalize</h3> */}
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
      </div>
    </div>
  );
};

export default AdoptionProcessNodes
