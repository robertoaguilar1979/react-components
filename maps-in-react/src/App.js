import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

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

  // map through useState

  const numberList = numbers.map((number) => {
    return <li>{number}</li>;
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
        <ul>{numberList}</ul>
        <ul>{namesList}</ul>
      </div>
    </div>
  );
}

export default App;
