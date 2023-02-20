import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";

import "./styles.css";

export default function App() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("Response: ", data);

    const details = data.results[0];

    setDetails(details);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      Reload to change User Info:
      <br />
      <br />
      <br />
      <Card details={details} />
    </div>
  );
}
