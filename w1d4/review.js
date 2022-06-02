// Function expressions > Function definitions (most of the time)

function someFunction() {
  // Bad!
  // ...
}

const someFctExpression = function () {
  // Good!
  // ...
};

const someArrowFunction = () => {
  // Good!
  // ...
};

// Normal functions vs Higher Order Functions

// Normal function => Has an in, Has an out
// Higher Order Functions Type 1 => Needs another function to work

const map = (array, action) => {
  const output = [];

  for (const element of array) {
    const newValue = action(element);
    output.push(newValue);
  }

  return output;
};

map([1, 2, 3, 4], (element) => element * element);

// Higher Order Functions Type 2 => Returns function definitions

const generateSomething = () => {
  let number = 0;

  const add = (value) => (number += value);

  return add;
};

// Immutable -> cannot mutate -> will not mutate
// movable, immovable

let number = 5;

const addMut = (value) => (number += value);
addMut(10);
console.log(number);

const addImm = (value) => number + value;

const newValue = addImm(10);
console.log(number);

const name = "Ann";

console.log(name.toLowerCase());

const somePerson = {
  name: "Bob",
  nickname: "Robert",
  hobbies: ["walks on the beach"],
};

const newPerson = {};

for (const key in somePerson) {
  newPerson[key] = somePerson[key];
}
