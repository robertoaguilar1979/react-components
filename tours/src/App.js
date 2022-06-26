import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import Tour from "./components/Tour";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      let response = await fetch(url);
      let items = await response.json();
      setLoading(false);
      setTours(items);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  let removeTours = function (id) {
    let removeItem = tours.filter((item) => item.id !== id);
    setTours(removeItem);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h1> no tours left </h1>{" "}
        <button onClick={() => fetchTours()}> refresh </button>{" "}
      </div>
    );
  }
  return (
    <div className="App">
      <Tours items={tours} removeTours={removeTours} />{" "}
    </div>
  );
}

export default App;
