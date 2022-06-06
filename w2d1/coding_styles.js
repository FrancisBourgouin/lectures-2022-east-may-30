// Create a function that will double every value of an array and return the modified version
// doubleThatList([1,2,3]) => [2,4,6]

// Input: Array of numbers
// Output: New array of numbers

// Goal: doubling every value of the input array

// Actions:

// How can we access every element: iterate (loop)
// How can we add elements to a new array: .push method on array

const doubleThatList = function (list) {
  // Create a new array for the new values
  const newArray = [];
  // iterate over values of the list (for..of)
  for (const value of list) {
    // modify the value 2 * value and store it in a temp variable
    const temp = value * 2;
    // push the modified value to the new array
    newArray.push(temp);
  }
  // Return the new array
  return newArray;
};

const result = doubleThatList([1, 2, 3]); // => [2,4,6]
console.log(result);

const result2 = doubleThatList([2, 4, 6]); // [4,8,12]
const expectedResult2 = [4, 8, 112];

// What does the === means in this case?
// Array === Array => Does the two variables referencing the same array?
// console.log(result2 === expectedResult2); // bad

const qdEdArrays = (arr1, arr2) => {
  for (const index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

console.assert(
  qdEdArrays(result2, expectedResult2),
  "doubleThatList([2, 4, 6]); // [4,8,12]"
);

// What does a function do?

// Does actions
// Input -> Output
