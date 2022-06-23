import "./App.css";
import React, {
  useState,
  useEffect
} from "react";
import Tabs from "./components/Tabs";
let url = "https://course-api.com/react-tabs-project";

function App() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);



  return ( <
    div className = "App" >
    <
    h1 > tabs components < /h1> <
    Tabs / >
    <
    /div>
  );
}

export default App;