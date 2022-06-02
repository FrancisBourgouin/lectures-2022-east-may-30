// What is tricky at the moment?

// Assert outputs

const generateGreeting = function (name) {
  return `Good morning ${name}`;
};

const generatedGreeting = generateGreeting("Calvin");

const displayGreeting = function (generatedGreeting) {
  return console.log(generatedGreeting);
};

// eqObjects ????

// Functions!
someFunction("Wiggle wiggle potato yeah.");

// Function definition
function someFunction(someParam) {
  console.log(someParam);
}
// Hoisting!
// Unprotected

// Function expression (classic)
const someOtherFunction = function (someParam) {
  console.log(someParam);
};

// Function expression (arrow)
const someArrowFunction = (someParam) => {
  console.log(someParam);
};

function someFunction(someParam) {
  console.log("MWAHAHAHAHHA");
}

// THIS

const potato = {
  name: "Russett",
  munch: () => console.log("OUCH"),
  greet: () => console.log(`Hi! I'm ${this.name}`),
};

const potato2 = {
  name: "Yukon Gold",
  munch: () => console.log("OUCH"),
  greet: function () {
    console.log(`Hi! I'm ${this.name}`);
  },
};

// Arrow functions w/ this => Not a good time
// functions expressions w/ this => A good time

potato.munch();
potato2.greet();

// Arrow function
const add = (a, b) => a + b;

// Function expression
const add2 = function (a, b) {
  return a + b;
};

someObject.personalInformation.name.firstName.toLowerCase();

someObject["personalInformation"]["name"]["firstName"].toLowerCase();
