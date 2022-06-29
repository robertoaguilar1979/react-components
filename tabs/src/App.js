import "./App.css";
import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import Loading from "./components/Loading";

let url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  let fetchJobs = async () => {
    let response = await fetch(url);
    let newJobs = await response.json();
    console.log(newJobs);

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <Loading />
      </section>
    );
  }
  const { id, title, dates, duties, company } = jobs[value];
  return (
    <div>
      <h1> tabs components </h1> <Tabs />
      <div key={id}>
        <h2>{title}</h2>
        <p>{dates}</p>
        <p>{company}</p>
        {duties.map((value, index) => {
          return (
            <div key={index}>
              <p>{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
