const someMug = {
  capacity: 500,
  amount: 400,
  type: "mug",
  name: "Muggy",
};
const someMug1 = {
  capacity: 500,
  amount: 350,
  type: "mug",
  name: "Muggy",
};
const someMug2 = {
  capacity: 500,
  amount: 300,
  type: "mug",
  name: "Muggy",
};
const someMug3 = {
  capacity: 500,
  amount: 250,
  type: "mug",
  name: "Muggy",
};
const someMug4 = {
  capacity: 500,
  amount: 200,
  type: "mug",
  name: "Muggy",
};

for (let i = 0; i < 5; i++) {
  someMug.amount -= 50;
  someMug.amount -= 50;
}

console.log(someMug);
