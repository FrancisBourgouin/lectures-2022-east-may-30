import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function useWow() {
  const [currentWow, setCurrentWow] = useState("");

  useEffect(() => {
    fetchAWow();
  }, []);

  const fetchAWow = () => {
    axios
      .get("https://owen-wilson-wow-api.herokuapp.com/wows/random")
      .then((res) => setCurrentWow(res.data[0].audio))
      .catch((err) => console.log(err));
  };

  const sayWow = () => {
    const sound = new Audio(currentWow);
    sound.play();
  };

  return { sayWow, fetchAWow };
}
