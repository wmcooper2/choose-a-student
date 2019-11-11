import React from "react";

const Controls = props => {
  const resetID = "reset";
  const randomID = "random";
  return (
    <div className="row btn-group" id="controlbox">
      <div
        className="btn btn-primary"
        id="reset"
        onClick={() => {
          props.handleClick(resetID);
        }}
      >
        Reset
      </div>
      <div
        className="btn btn-primary"
        id="random"
        onClick={() => {
          props.handleClick(randomID);
        }}
      >
        Random
      </div>
    </div>
  );
};

export default Controls;
