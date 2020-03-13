import React from "react";

const Controls = props => {
  const buttonTypes = ["Reset", "Random", "Use Numbers", "All at once"];
  let buttons = [];
  buttonTypes.forEach(item =>
    buttons.push(
      <button
        className="btn btn-primary"
        id={item}
        key={item}
        onClick={() => {
          props.handleClick(item);
        }}
      >
        {item}
      </button>
    )
  );
  return (
    <div className="row btn-group" id="controlbox">
      {buttons}
    </div>
  );
};

export default Controls;
