import React from "react";
import "../App.css";

function Modal({ children }) {
  return (
    <div className="modal">
      <button className="modal-btn">&times;</button>
      {children}
    </div>
  );
}

export default Modal;
