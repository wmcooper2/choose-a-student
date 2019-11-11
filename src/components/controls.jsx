import React from "react";

const Controls = props => {
  const resetID = "reset";
  const randomID = "random";
  return (
    <div className="row">
      <button
        className="btn btn-primary"
        id="reset"
        onClick={() => {
          props.handleClick(resetID);
        }}
      >
        Reset
      </button>
      <button
        className="btn btn-primary"
        id="random"
        onClick={() => {
          props.handleClick(randomID);
        }}
      >
        Random
      </button>
    </div>
  );
};

export default Controls;
