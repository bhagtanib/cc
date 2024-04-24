import React from "react";
import "./Table.css";

const Table = ({ tableInfo }) => {
  console.log(tableInfo);
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
          {tableInfo.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((key, keyIndex) => (
                <td key={keyIndex} style={{ fontWeight: 300 }}>
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
          {/* Add more column headers as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
