import { useEffect } from "react";
import { useState } from "react";

export default function Spy() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const report = (event) => {
    if (coordinates.x !== event.clientX) {
      console.log("mouse moved");
    }
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    console.log("RUNNING TO THE HORSE THINGY");
    document.addEventListener("click", report);

    return () => {
      console.log("JUMP FROM THE HORSE THINGY AND STRIKE A POSE");
      console.log("OH NO NOT THE JAIL / FISHES / CIDER BLOCKS / PARTY");
      document.removeEventListener("click", report);
    };
  }, []);

  return (
    <div>
      <h1>🕵️</h1>
    </div>
  );
}
