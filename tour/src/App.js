import "./App.css";
import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState([]);

  let getUsers = async () => {
    let response = await fetch(url);
    let users = await response.json();
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
