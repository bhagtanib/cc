import React from "react";
import "./Table.css";

const Table = ({ tableInfo }) => {
  console.log(tableInfo)
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {tableInfo.heading.map((col) => (
              <th>{col}</th>
            ))}
            {/* Add more column headers as needed */}
          </tr>
        </thead>
        <tbody>
          {tableInfo.rows.map((col) => (
            <tr >
              <th style={{fontWeight: 300}}>{col.workId}</th>
              {/* <th style={{fontWeight: 300}}>{col.companyName}</th>
              <th style={{fontWeight: 300}}>{col.startDate}</th>
              <th style={{fontWeight: 300}}>{col.EndDate}</th> */}
            </tr>
          ))}
          {/* Add more column headers as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
