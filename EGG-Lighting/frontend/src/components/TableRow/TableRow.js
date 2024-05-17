import React from "react";
import "./TableRow.css";

const TableRow = ({ activity, type, participants }) => {
  return (
    <tr className="activities__row">
      <td className="activities__datacell">{activity}</td>
      <td className="activities__datacell">{type}</td>
      <td className="activities__datacell">{participants}</td>
    </tr>
  );
};

export default TableRow;
