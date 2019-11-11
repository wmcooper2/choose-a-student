import React from "react";
import Seat from "./seats";

function Row(props) {
  const { choices } = props.props;
  let row = [];
  for (let i = 0; i < 6; i++) {
    row.push(
      <Seat
        seatKey={props.rowKey + i}
        key={props.rowKey + i}
        handleClick={props.handleClick}
        choices={choices}
      />
    );
  }
  return <div className="row">{row}</div>;
}

export default Row;
