import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [username, setUsername] = useState("psalmotee");
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. ffect setup
    let monuted = true;

    async function fetchData() {
      const result = await fetch(`https://api.github.com/users/${username}`);
      const json = await result.json();

      if (monuted) {
        setData(json);
      }
    }

    fetchData();

    // 2. effect cleanup
    return () => {
      monuted = false;
    };
  }, []);

  return (
    <>
      <h1>Psalmotee</h1>
      {data && <img src={data?.avatar_url} alt=" sample" />}
    </>
  );
}

export default App;
