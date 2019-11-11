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
    <div
      className="seat"
      value="true"
      onClick={() => {
        props.handleClick(seatKey);
      }}
      id={seatKey}
      style={style}
    ></div>
  );
};

export default Seat;
