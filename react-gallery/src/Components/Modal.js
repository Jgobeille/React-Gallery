import React from "react";

const ModalContainer = () => {
  return (
    <div className="modal-container">
      <button type="button" id="modal-close-btn" className="modal-close-btn">
        <strong>X</strong>
      </button>
      <div className="modal-info-container">
        <img className="modal-img" src={} alt={"an image"} />
      </div>
    </div>
  );
};

export default ModalContainer;
