import React from "react";

function Modal({ children }) {
  return (
    <React.Fragment>
      <button>&times;</button>
      {children}
    </React.Fragment>
  );
}

export default Modal;
