import "./App.css";
import Data from "./data/data";
import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";

function App() {
  const [data, setdata] = useState(Data);
  const [search, setSearch] = useState([]);

  return (
    <div className="App">
      <h1>menu component</h1>
      <Menu items={data} />
    </div>
  );
}

export default App;
