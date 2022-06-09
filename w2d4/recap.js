// Try Catch (Throwing errors)

// Try / Catch only works synchronously

try {
  throw new Error("Some error");
} catch (error) {
  console.log(error.message);
}

// Callbacks

// They work synchronously and asynchronously

// A callback is a relationship status between a function and a higher order function

const someFunction = (value) => console.log("The value is: ", value);

const listAndDoSomething = (list, action) => {
  for (const element of list) {
    action(element);
  }
};

listAndDoSomething([1, 2, 3, 4], someFunction); // someFunction is THE callback of listAndDoSomething

// Callbacks can become tedious when we play
// with asynchronous code since we want to work with two callbacks sometimes

// Promises! :D :D :D

// Promises are strictly asynchronous

const promisedFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      return resolve();
    }
    return reject();
  });
};

promisedFunction()
  .then(() => console.log("Hello!"))
  .catch(() => console.log("OH NO"))
  .finally(() => console.log("all done"));

console.log("FIRST!");

// They provide three methods
// .then when success
// .catch when fail
// .finally when all done (fail or success)

// Promises support chaining

promisedFunction()
  .then(promisedFunction)
  .then(promisedFunction)
  .then(promisedFunction)
  .then(() => console.log("Hello!"))
  .catch(() => console.log("OH NO"))
  .finally(() => console.log("all done"));

// Promises support concurrent promises (They all need to succeed)
// You will receive an array of values

Promise.all([promisedFunction(), promisedFunction(), promisedFunction()]);

// Promises support a race system, first gets picked, others get discarded
// You will only receive one value

Promise.race([promisedFunction(), promisedFunction(), promisedFunction()]);

// DANGER DANGER DANGER!

// Async / Await

// PROMISE WAS FULFILLED :D :D :D
