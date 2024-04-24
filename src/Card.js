import React, { useState } from "react";
import "./Card.css";
import Model from "./Model";
import { workExperience } from "./data/tabledetails";
const Card = ({tableData }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {modalVisible && (
        <Model tableInfo={workExperience} closeModal={closeModal} />
      )}
      <div className="card-container" onClick={openModal}>
        <div className="card-heading">Work Experience </div>
        <div className="card-rows">
          <div className="card-row">
            <div className="card-row-left">Work Id</div>
            <div className="card-row-right">uniqueidentifie</div>
          </div>
          <div className="card-row">
            <div className="card-row-left">Work Id</div>
            <div className="card-row-right">uniqueidentifie</div>
          </div>
          <div className="card-row">
            <div className="card-row-left">Work Id</div>
            <div className="card-row-right">uniqueidentifie</div>
          </div>
          <div className="card-row">
            <div className="card-row-left">Work Id</div>
            <div className="card-row-right">uniqueidentifie</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
