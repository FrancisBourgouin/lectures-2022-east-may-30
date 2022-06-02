// Callbacks! Higher Order Functions

// Boring Function. Normal function (takes in an input, returns an output)
const boringAdd = (a, b) => a + b;

// Higher Order Functions (take in inputs, outputs is not readily usable)

const someArray = [1, 2, 3, 4, 5, 6];

const multiplyContentOfArray = (arr, multiplier) => {
  const output = [];

  for (const element of arr) {
    output.push(element * multiplier);
  }

  return output;
};

const newArray = multiplyContentOfArray(someArray, 4);

console.log(someArray, newArray);

// HoF
const modifyContentOfArray = (arr, action) => {
  const output = [];

  for (const element of arr) {
    output.push(action(element));
  }

  return output;
};

const add = (a, b) => a + b;
const addNineThousand = (number) => number + 9000;
// const coolArray = modifyContentOfArray(someArray, add());
// const coolArray = modifyContentOfArray(someArray, addNineThousand);
const coolArray = modifyContentOfArray(someArray, (number) => number + 9000);

// add => that's a reference to the function
// add vs add();

// console.log(coolArray);

// someArray.map()

const simpleFunction = () => console.log("Hello!");

// simpleFunction(1, 4, "bob", [1, 2, 2]);

// insides of map
// action(value, index, array) => (), (value), (value, index)

const listOfStudents = ["Colleen", "Ricardo", "Calvin", "Daniel", "Lisha"];

const doSomethingForEveryStudent = (list, action) => {
  for (const student of list) {
    action(student);
  }
};

const sayHi = (name) => console.log(`Hi ${name}!`); // Callback ?
const singHi = (name) => console.log(`🎶🎵🎶 Hi ${name}! 🎶🎵🎶`); // Callback ?

doSomethingForEveryStudent(listOfStudents, singHi); // HoF ?

// doSomethingForEveryStudent is a higher order function
// singHi and sayHi are not callbacks

// Being a callback, is relationship status between a HoF and a function at the time of execution

const someGrade = { subject: "Phys Ed", score: 70 };

const sportyParent = (grade) => {
  if (grade.subject === "Phys Ed" && grade.score > 95) {
    return true;
  }
  if (grade.subject === "Phys Ed") {
    return false;
  }
  if (grade.score > 60) {
    return true;
  }
  return false;
};

const chillParent = () => true;

const judgeAGrade = (grade, parent) => {
  if (parent(grade)) {
    return console.log("Good job.");
  }
  return console.log("I AM DISAPPOINT");
};

judgeAGrade(someGrade, sportyParent);
judgeAGrade(someGrade, chillParent);
judgeAGrade(someGrade, () => true);

const listElementsOfArray = (arr) => {
  for (const element of arr) {
    console.log(element);
  }
};

listElementsOfArray([1, 2, 3, 4, 5]);

const smallArray = [1, 2, 3, 4, 5];

// const logElement =
smallArray.forEach((element) => console.log(element));
