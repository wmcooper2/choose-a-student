import React from "react";

const Seat = props => {
  const { seatKey, seats, chosen, useNumbers } = props;
  let style;
  if (seats.includes(seatKey)) {
    style = { backgroundColor: "white" };
  } else {
    style = { backgroundColor: "#06d66e" };
  }

  if (seatKey === chosen) {
    style.backgroundColor = "rgb(61, 86, 230)";
  }

  let text = useNumbers === true ? "" + (seatKey + 1) : "";

  return (
    <div
      className="seat"
      value="true"
      onClick={() => {
        props.handleClick(seatKey);
      }}
      id={seatKey}
      style={style}
    >
      {text}
    </div>
  );
};

export default Seat;
