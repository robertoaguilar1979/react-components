import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import "./Modal.css";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";

function Modal({ children, closeModal }) {
  // const rootElement = document.getElementById("root");
  // const root = createRoot(rootElement);

  return createPortal(
    <div className="overlay">
      <div className="modal">
        <button className="modal-btn" onClick={closeModal}>
          &times;{" "}
        </button>
        {children}
      </div>
      ,
    </div>,
    document.getElementById("root")
  );
}

export default Modal;
