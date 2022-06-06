const { doubleThatList, tripleThatList } = require("../double_list");
const assert = require("assert");
const expect = require("chai").expect;
require("chai").should();

describe("Testing the doubleThatList function", () => {
  it("(NODE) it should double every element of the list", () => {
    const input = [1, 2, 3];
    const result = doubleThatList(input);
    const expectedResult = [2, 4, 6];

    assert.deepEqual(result, expectedResult);
  });
  it("(CHAI - E) it should double every element of the list", () => {
    const input = [1, 2, 3];
    const result = doubleThatList(input);
    const expectedResult = [2, 4, 6];

    expect(result).to.deep.equal(expectedResult);
  });
  it("(CHAI - S) it should double every element of the list", () => {
    const input = [1, 2, 3];
    const result = doubleThatList(input);
    const expectedResult = [2, 4, 6];

    result.should.deep.equal(expectedResult);
  });
});

describe("Testing the tripleThatList function", () => {
  it("(NODE) it should triple every element of the list", () => {
    const input = [1, 2, 3];
    const result = tripleThatList(input);
    const expectedResult = [3, 6, 9];

    assert.deepEqual(result, expectedResult);
  });
  it("(CHAI - E) it should triple every element of the list", () => {
    const input = [1, 2, 3];
    const result = tripleThatList(input);
    const expectedResult = [3, 6, 9];

    expect(result).to.deep.equal(expectedResult);
  });
  it("(CHAI - S) it should triple every element of the list", () => {
    const input = [1, 2, 3];
    const result = tripleThatList(input);
    const expectedResult = [3, 6, 9];

    result.should.deep.equal(expectedResult);
  });
});

// const describe = function(description, callback){
//   console.log(description)
//   callback()
// }
