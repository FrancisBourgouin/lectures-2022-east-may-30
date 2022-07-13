# Watering Plants ( Waterworld )

Plant list with name, watering interval, last watered date, button to water each plant to reset the date.

# User stories

- User should be able to water the plants (update the date)
- User should see a list of plants
- User should quickly see which plant needs watering
- (Stretch) User should be able to water all the plants

# Data Structures

## Plant

```jsx
const plant = {
  id: "",
  name: "",
  type: "",
  wateringInterval: 0,
  lastWateredDate: "Valid String Date",
};
```

## Plants

```jsx
const plantsArr = [plant, plant, plant];

const plantsObj = {
  id: plant,
  id: plant,
  id: plant,
};

plantsArr.find((plant) => plant.id === id);
plantsObj[id];
```

# Mock Data

```jsx
const plant1 = {
  id: 1,
  name: "Ghost Pipe (Monotropa Uniflora)",
  type: "Best plant",
  lastWateredDate: "2022-07-04",
  wateringInterval: 30,
};
const plant2 = {
  id: 2,
  name: "Spear Grass",
  type: "Pointy plant",
  lastWateredDate: "2022-06-04",
  wateringInterval: 14,
};

const plant3 = {
  id: 3,
  name: "Hyacinths",
  type: "Pretty flower",
  lastWateredDate: "2022-07-12",
  wateringInterval: 3,
};

const plant4 = {
  id: 4,
  name: "Space Fern",
  type: "Floaty",
  lastWateredDate: "2020-05-12",
  wateringInterval: 9001,
};

// plants

const plantListArr = [plant1, plant2, plant3, plant4];

const plantListObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

# HTML Structure

- body
  - header
    - h1 beatiful title
  - main
    - (stretch) button water EVERYTHING
    - ul
      - li (border/bg : green / red)
        - h1 name of plant
        - p type
        - p last watered
        - button water the plant

# Component Structure

- App
  - Header
  - PlantList
    - PlantListItem

# Data map

- App STATE for plantList
  - Header
  - PlantButton X
  - PlantList X
    - PlantListItem X
