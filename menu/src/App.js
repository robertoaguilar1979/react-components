import "./App.css";
import Data from "./data/data";
import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Catagories from "./components/Catagories";

let allCatagories = ["all", ...new Set(Data.map((item) => item.category))];

function App() {
  const [data, setData] = useState(Data);
  const [catagories, setCatagories] = useState(allCatagories);

  const filterFunction = function (item) {
    if (item === "all") {
      return setData(Data);
    }
    const newItem = Data.filter((newItem) => newItem.category === item);
    setData(newItem);
  };
  // const restoreAll = function () {
  //   setData(Data);
  // };

  return (
    <div className="App">
      <h1>menu component</h1>
      <Catagories filterFunction={filterFunction} catagories={catagories} />
      <Menu items={data} />
    </div>
  );
}

export default App;
