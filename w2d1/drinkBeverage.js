const drinkBeverage = function (mug, amount) {
  if (typeof mug !== "object" || mug.type !== "mug") {
    throw new Error("THAT AINT A MUG!");
  }
  if (typeof amount !== "number") {
    return mug;
  }
  if (mug.amount === 0) {
    throw new Error("MUG IS EMPTY YA DUMDUM");
  }

  if (mug.amount < amount) {
    mug.amount = 0;
  }

  if (mug.amount >= amount) {
    mug.amount -= amount;
  }
  return mug;
};

module.exports = drinkBeverage;
