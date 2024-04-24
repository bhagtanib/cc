import React, { useState } from "react";
import "./Card.css";
import Model from "./Model";
import { workExperience } from "./data/tabledetails";
const Card = ({ tableData }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const schema = tableData.schema;
  console.log(schema);
  const openModal = () => {
    console.log("tableData: ", tableData);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {modalVisible && <Model tableInfo={tableData} closeModal={closeModal} />}
      <div className="card-container" onClick={openModal}>
        <div className="card-heading">{tableData?.header}</div>
        <div className="card-rows">
          {schema && Object.keys(schema).map((key, keyIndex) => (
            <div className="card-row">
              <div className="card-row-left">{key}</div>
              <div className="card-row-right">{schema[key]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
