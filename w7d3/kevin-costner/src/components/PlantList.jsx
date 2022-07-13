import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants, updateWateredDate } = props;

  // const parsedPlants = []
  // for(const key in plants){
  //   parsedPlants.push(<PlantListItem {...plants[key]}/>)
  // }

  const parsedPlants = plants.map((plant) => (
    <PlantListItem
      key={plant.id}
      {...plant}
      updateWateredDate={() => updateWateredDate(plant.id)}
    />
  ));
  return <ul>{parsedPlants}</ul>;
}
