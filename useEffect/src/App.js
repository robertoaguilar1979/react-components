import "./App.css";
import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState([]);

  // let getUsers = async () => {
  //   let response = await fetch(url);
  //   let users = await response.json();
  //   setUsers(users);
  //   console.log(users);
  // };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => console.log(error));

    // getUsers();
  }, []);

  return (
    <div className="App">
      <h1>hello world</h1>
      <div className="container">
        {users.map((user) => {
          console.log(user);
          return (
            <ul key={user.id}>
              <h2>{user.login}</h2>
              <a href={user.html_url} target="_blank">
                link
              </a>
              <img src={user.avatar_url} alt="" />
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
