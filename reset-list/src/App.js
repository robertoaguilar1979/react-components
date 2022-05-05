import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import data from "./data/data";

function App() {
  const [dataList, setDataList] = useState(data);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reset List</h1>
      </header>
      <List data={dataList} />
      <button onClick={() => setDataList([])}>clear</button>
    </div>
  );
}

export default App;
