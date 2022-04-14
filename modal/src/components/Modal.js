import React from "react";
import "../App.css";

function Modal({ children, handleModalBtn }) {
  return (
    <div className="modal">
      <button className="modal-btn" onClick={handleModalBtn}>
        &times;{" "}
      </button>
      {children}
    </div>
  );
}

export default Modal;
