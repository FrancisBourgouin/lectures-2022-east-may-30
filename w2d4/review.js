// Super specific

const addTwoAndFive = () => {
  return console.log(2 + 5);
};

// Less specific by passing number parameters

const addTwoNumbersAndLogIt = (a, b) => {
  return console.log(a + b);
};

const addTwoNumbersAndFancyLogIt = (a, b) => {
  return console.log("🥂🥂", a + b, "🥂🥂");
};

// Generic functions by splitting

const fancyLog = (value) => console.log("🥂🥂", value, "🥂🥂");
const boringLog = (value) => console.log(value);
const multiplyValue = (value) => value * value;

const addTwoNumbers = (a, b, action) => {
  return action(a + b);
};

const result = addTwoNumbers(5, 5, multiplyValue);
fancyLog(result);

addTwoNumbers(5, 5, fancyLog);
addTwoNumbers(5, 5, boringLog);

addTwoNumbers(5, 5, (value) => addTwoNumbers(value, 5, fancyLog));

// Is there such a thing as a callback function?

// Callbacks : synchronous code, asynchronous code

// Async code: we need to use callbacks (or variations)

let bob = 0; // #1
setTimeout(() => {
  // #2
  console.log("yo yo yo"); // #4
  bob = 10; // #5
}, 0);

console.log(bob); // #3 (done with sync code)
setTimeout(() => {
  console.log(bob);
}, 3000);
