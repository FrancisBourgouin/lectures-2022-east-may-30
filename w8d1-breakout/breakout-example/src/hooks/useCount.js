import { useState } from "react";

export default function useCount(starterValue) {
  const [count, setCount] = useState(0);
  const addOne = () => setCount(count + 1);

  const addTen = () => {
    setCount(count + 1); // New count will be 1 after re-render (prevState, prending State)
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return { count, addOne, addTen };
}
