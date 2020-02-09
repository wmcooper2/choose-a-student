import React from "react";
import Seat from "./seats";

function Row(props) {
  const { choices, chosen } = props.props;
  let row = [];
  for (let i = 0; i < 6; i++) {
    row.push(
      <Seat
        seatKey={props.rowKey + i}
        key={props.rowKey + i}
        handleClick={props.handleClick}
        choices={choices}
        chosen={chosen}
      />
    );
  }

  return <div className="row">{row}</div>;
}

export default Row;
