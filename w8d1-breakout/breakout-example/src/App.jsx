import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useCount from "./hooks/useCount";

function App() {
  const { count, addOne, addTen } = useCount(0);

  const [state, setState] = useState({
    day: "",
    days: [],
    appointments: [],
    interviewers: [],
  });

  const initializeState = () => {
    setState((prevState) => {
      console.log(prevState);
      return { ...prevState, day: "Monday" };
    });
    setState((prevState) => {
      console.log(prevState);
      return { ...prevState, days: [1, 2, 3] };
    });
    setState((prevState) => {
      console.log(prevState);
      return { ...prevState, appointments: [1, 2, 3] };
    });
    setState((prevState) => {
      console.log(prevState);
      return { ...prevState, interviewers: [1, 2, 3] };
    });
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={initializeState}>INIT STATE</button>
        <button onClick={addOne}>count is {count} (AddOne)</button>
        <button onClick={addTen}>count is {count} (AddTen)</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
