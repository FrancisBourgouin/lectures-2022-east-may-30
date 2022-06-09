// What is a promise ?

// new Promise
// pending
//  success (resolved)
//  fail (resolved)

const fctWithPromise = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve();
    }
    return reject();
  });
};

// fctWithPromise()
//   .then(() => console.log("YAY"))
//   .catch(() => console.log("NAY"))
//   .finally(() => console.log("OK IM DONE"));

const boilWater = () => {
  console.log("Starting boil");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log("Finished boil");
        return resolve("boil");
      }
      return reject("Boiling failed");
    }, 3000);
  });
};

const grindBeans = () => {
  console.log("BRRRRRRRR");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log("DING");
        return resolve("grind");
      }
      return reject("Grind failed");
    }, 2000);
  });
};
const pourWaterOnBeans = () => {
  console.log("BLUP BLUP BLUP");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log("PLOCK PLOCK");
        return resolve();
      }
      return reject("Pouring failed");
    }, 2000);
  });
};
const enjoyTheMarvelousCoffee = () => {
  console.log("SLURP");
  console.log("Wow");
};

// Promise chain
boilWater()
  .then(grindBeans)
  .then(pourWaterOnBeans)
  .then(enjoyTheMarvelousCoffee)
  .catch((message) => console.log("there was a problem", message));

// Promise list

const concurrentTasks = [boilWater(), grindBeans()];
// console.log(concurrentTasks);

Promise.all(concurrentTasks)
  .then(() => console.log("all good"))
  .catch((error) => console.log(error));

Promise.race(concurrentTasks)
  .then((type) => console.log("all good", type))
  .catch((error) => console.log(error));

// client.query(...).then()
// axios.get(...).then()

// fs.readFile("...", "utf-8", (err, data) => {});
