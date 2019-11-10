import React from "react";

const Controls = props => {
  return (
    <div className="row">
      <button id="reset" onClick={props.handleClick}>
        Reset
      </button>
      <button id="random" onClick={props.handleClick}>
        Random
      </button>
    </div>
  );
};

export default Controls;
