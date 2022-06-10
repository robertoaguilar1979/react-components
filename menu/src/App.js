import "./App.css";
import Data from "./data/data";
import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Catagories from "./components/Catagories";

function App() {
  const [data, setData] = useState(Data);
  const [search, setSearch] = useState([]);

  const filterFunction = function (item) {
    const newItem = Data.filter((newItem) => newItem.category === item);
    setData(newItem);
  };
  const restoreAll = function () {
    setData(Data);
  };
  return (
    <div className="App">
      <h1>menu component</h1>
      <Catagories filterFunction={filterFunction} setInformation={restoreAll} />
      <Menu items={data} />
    </div>
  );
}

export default App;
