import React from "react";

const Seat = props => {
  const { seatKey, choices } = props;
  let style;
  if (choices.includes(seatKey)) {
    style = { backgroundColor: "white" };
  } else {
    style = { backgroundColor: "#39525e" };
  }

  return (
    <button
      className="seat"
      value="true"
      onClick={() => {
        props.handleClick(seatKey);
      }}
      id={seatKey}
      style={style}
    ></button>
  );
};

export default Seat;
