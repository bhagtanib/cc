import React from "react";
import "./Table.css";

const Table = ({ tableInfo }) => {
  console.log(tableInfo);
  const linking = (link) => {
    return (
      <span
        style={{ cursor: "pointer" }}
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      >
        link
      </span>
    );
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {tableInfo.heading.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableInfo.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((key, keyIndex) => (
                <td key={keyIndex} style={{ fontWeight: 300 }}>
                  {key === "Link" ? linking(row[key]) : row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
