import { checkIfWellWatered } from "../helpers/plantHelpers";

export default function PlantListItem(props) {
  const { name, type, lastWateredDate, wateringInterval, updateWateredDate } = props;

  const isWellWatered = checkIfWellWatered(lastWateredDate, wateringInterval);

  const styling = {
    border: "0.2em solid black",
    listStyleType: "none",
    margin: "1em",
    padding: "1em",
    borderColor: isWellWatered ? "green" : "red",
  };

  const accidentalDoubleCall = () => {
    updateWateredDate();
    updateWateredDate();
  };
  return (
    <li style={styling}>
      <h1>{name}</h1>
      <p>Type: {type}</p>
      <p>Last watered on {lastWateredDate}</p>
      <button onClick={accidentalDoubleCall}>WATER ME</button>
    </li>
  );
}
