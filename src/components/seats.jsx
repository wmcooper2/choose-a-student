import React from "react";

const Seat = (props) => {
  const { seatKey, seats, chosen, useNumbers } = props;
  let seatClass;
  if (seats.includes(seatKey)) {
    seatClass = "seat whiteSeat";
  } else {
    seatClass = "seat greenSeat";
  }

  if (seatKey === chosen) {
    seatClass = "seat chosenSeat";
  }

  let text = useNumbers === true ? "" + (seatKey + 1) : "";
  return (
    <div
      className={seatClass}
      value="true"
      onClick={() => {
        props.handleClick(seatKey);
      }}
      id={seatKey}
    >
      {text}
    </div>
  );
};

export default Seat;
