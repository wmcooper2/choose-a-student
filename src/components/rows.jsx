import React from "react";
import Seat from "./seats";

const Row = props => {
  const { choices, chosen, rowKey, handleClick, useNumbers } = props;
  let row = [];
  for (let i = 0; i < 6; i++) {
    row.push(
      <Seat
        seatKey={rowKey + i}
        key={rowKey + i}
        handleClick={handleClick}
        seats={choices}
        chosen={chosen}
        useNumbers={useNumbers}
      />
    );
  }

  return <div className="row">{row}</div>;
};

export default Row;
