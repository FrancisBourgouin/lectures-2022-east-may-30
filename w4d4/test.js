const isBobHappy = (callback) => {
  setTimeout(() => {
    callback("Yes very happy");
  }, 1000);
};

const bob = isBobHappy((value) => console.log(value));

console.log(bob);
