const drinkBeverage = require("../drinkBeverage");
const expect = require("chai").expect;

describe("drinkBeverage function happy path", () => {
  it("should modify the original object minus the amount drank", () => {
    const starterMug = {
      capacity: 500,
      amount: 450,
      type: "mug",
      name: "Muggy",
    };
    const afterMug = {
      capacity: 500,
      amount: 350,
      type: "mug",
      name: "Muggy",
    };

    const result = drinkBeverage(starterMug, 100);

    // expect(result.amount).to.equal(afterMug.amount);
    expect(result).to.deep.equal(afterMug);
  });
});

describe("drinkBeverage function invalid inputs", () => {
  it("should not change the original object if no amount specified", () => {
    const starterMug = {
      capacity: 500,
      amount: 450,
      type: "mug",
      name: "Muggy",
    };
    const afterMug = {
      capacity: 500,
      amount: 450,
      type: "mug",
      name: "Muggy",
    };

    const result = drinkBeverage(starterMug);

    expect(result.amount).to.equal(afterMug.amount);
  });
  it("should not change the original object if amount type is invalid", () => {
    const starterMug = {
      capacity: 500,
      amount: 450,
      type: "mug",
      name: "Muggy",
    };
    const afterMug = {
      capacity: 500,
      amount: 450,
      type: "mug",
      name: "Muggy",
    };

    const result = drinkBeverage(starterMug, "🌦️🌦️🌦️");

    expect(result).to.deep.equal(afterMug);
  });
  it("should return an error if the input object is not a valid mug", () => {
    const starterMug = "☕";

    expect(() => drinkBeverage(starterMug, "🌦️🌦️🌦️")).to.throw();
  });
});

describe("drinkBeverage function boundary issues", () => {
  it("should set the amount to zero if the amount drank is higher than remaining", () => {
    const starterMug = {
      capacity: 500,
      amount: 450,
      type: "mug",
      name: "Muggy",
    };
    const afterMug = {
      capacity: 500,
      amount: 0,
      type: "mug",
      name: "Muggy",
    };

    const result = drinkBeverage(starterMug, 500);

    expect(result).to.deep.equal(afterMug);
  });
  it("should return an error if the amount is zero before drinking", () => {
    const starterMug = {
      capacity: 500,
      amount: 0,
      type: "mug",
      name: "Muggy",
    };

    expect(() => drinkBeverage(starterMug, 100)).to.throw();
  });
});
