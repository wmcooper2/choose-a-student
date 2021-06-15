import React from "react";

const Seat = (props) => {
  const { seatKey, seats, chosen, useNumbers } = props;
  let seatClass = seats.includes(seatKey) ? "seat whiteSeat" : "seat greenSeat";

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
