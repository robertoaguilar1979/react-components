import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

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

  return (
    <div className="App">
      <Tours items={tours} />
    </div>
  );
}

export default App;
