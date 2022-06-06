const chalk = require("chalk");

const doubleThatList = function (list) {
  // Create a new array for the new values
  const newArray = [];
  // iterate over values of the list (for..of)
  for (const value of list) {
    // modify the value 2 * value and store it in a temp variable
    const temp = value * 2;
    // push the modified value to the new array
    newArray.push(temp);
  }
  // Return the new array
  console.log(chalk.blue("Doubling the list was succesful"));
  return newArray;
};
const tripleThatList = function (list) {
  // Create a new array for the new values
  const newArray = [];
  // iterate over values of the list (for..of)
  for (const value of list) {
    // modify the value 2 * value and store it in a temp variable
    const temp = value * 3;
    // push the modified value to the new array
    newArray.push(temp);
  }
  // Return the new array
  return newArray;
};

module.exports = { doubleThatList, tripleThatList };
