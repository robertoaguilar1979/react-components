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
    <div className="App">
      <h1> tabs components </h1>
      <Tabs />
      {/************  button ****************/}
      {jobs.map((item, index) => {
        return (
          <button key={item.id} onClick={() => setValue(index)}>
            {item.company}
          </button>
        );
      })}
      <div key={id} className="tab-information">
        <h2>{title}</h2>
        <p>{dates}</p>
        <p>{company}</p>
        {duties.map((value, index) => {
          return (
            <ul key={index}>
              <li>{value}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
