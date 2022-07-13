import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import PlantButton from "./components/PlantButton";
import PlantList from "./components/PlantList";

import { plantListObj } from "./data/plantData";
function App() {
  const [plantList, setPlantList] = useState(plantListObj);

  const parsedPlantList = Object.values(plantList);

  console.log(plantList);

  const updateWateredDate = (id) => {
    const newDateString = new Date().toLocaleDateString();

    const updatedPlant = { ...plantList[id] };
    updatedPlant.lastWateredDate = newDateString;

    const updatedPlantList = { ...plantList };
    updatedPlantList[id] = updatedPlant;

    setPlantList(updatedPlantList);
  };
  return (
    <div className="App">
      <Header />
      <Counter />
      {/* <main>
        <PlantButton />
        <PlantList plants={parsedPlantList} updateWateredDate={updateWateredDate} />
      </main> */}
    </div>
  );
}

export default App;
