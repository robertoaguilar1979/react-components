import React, { useState } from "react";
import "./textInput.css";
function TextInput() {
  const [textInput, setTextInput] = useState("");
  return (
    <div>
      <div className="form">
        <form action="">
          <h2>text display</h2>
          <p className="textInputStyle">{textInput}</p>
          <input
            type="text"
            onChange={(event) => {
              setTextInput(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default TextInput;
