const drinkBeverage = require("./drinkBeverage");

const someMug = {
  name: "muggy",
  type: "mug",
  amount: 500,
};

const result = drinkBeverage(someMug, 300);

console.log(result);
