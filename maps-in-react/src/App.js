import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let title = "Maps In React";
  let paragraph = "this is a paragraph";

  let comments = [
    { id: 1, comment: "hello world 1" },
    { id: 2, comment: "hello world 2" },
    { id: 3, comment: "hello world 3" },
  ];

  // useState functions
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [names, setNames] = useState(["react", "angular", "vue"]);
  const [commentState, setCommentState] = useState(comments);

  console.log(commentState);
  const removeItem = function (id) {
    const deleteList = commentState.filter((number) => number.id !== id);
    setCommentState(deleteList);

    // setNumbers((prevEvents) => {
    //   return prevEvents.filter((index) => {
    //     return id !== index;
    //   });
    // });
  };

  // // map through useState

  const numberList = commentState.map((value, index) => {
    return (
      <div key={value.id}>
        <li>{value.comment}</li>
        <button onClick={() => removeItem(value.id)}>delete</button>
      </div>
    );
  });

  const namesList = names.map((names) => {
    return <li>{names}</li>;
  });

  let showComments = true;

  return (
    <div className="app-div">
      <h1>{title.toLowerCase()}</h1>
      <p>{paragraph}</p>
      <div className="map-elements">
        <h3>comments length ({comments.length})</h3>
        {showComments ? "comment is True" : "comment is False"}
        <ul>
          {comments.map((comment, index) => (
            <li key={comment.id}>
              {comment.comment} the index is {index}
            </li>
          ))}
        </ul>
        <ul className="pink">{numberList}</ul>
        <ul className="gray">{namesList}</ul>
      </div>
    </div>
  );
}

export default App;
