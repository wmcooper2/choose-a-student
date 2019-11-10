import React from "react";
import Seat from "./seats";

function Row(props) {
  let row = [];
  for (let i = 0; i < 6; i++) {
    row.push(<Seat key={i} handleClick={props.handleClick} />);
  }
  return <div className="row">{row}</div>;
}

export default Row;
