import React, { useRef, useEffect } from "react";
import "./Model.css";
import Table from "./Table";

const Model = ({ closeModal, tableInfo}) => {
  const modalContentRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      const handleClickOutside = (event) => {
        if (
          modalContentRef.current &&
          !modalContentRef.current.contains(event.target)
        ) {
          closeModal();
        }
      };

      document.addEventListener("click", handleClickOutside);

    // Prevent scrolling of background content when modal is open
    document.body.style.overflow = 'hidden';

    // Cleanup function to remove event listener and restore body overflow when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = ''; // Restore body overflow
    };
    }, 50);
  }, [closeModal]);

  return (
    <div className="model">
      <div className="modal-content" ref={modalContentRef}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <Table tableInfo={tableInfo} />
      </div>
    </div>
  );
};

export default Model;
