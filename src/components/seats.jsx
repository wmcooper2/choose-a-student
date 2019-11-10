import React from "react";

let seatID = 0;
const Seat = props => {
  return (
    <button
      className="seat"
      value="true"
      onClick={props.handleClick}
      id={seatID++}
    >
      {props.id}
    </button>
  );
};

export default Seat;
