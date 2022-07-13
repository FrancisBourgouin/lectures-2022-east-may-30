// // Immutability

// const someObject = { a: 1, b: 2 };
// const someOtherObject = someObject;

// // const yetAnotherObject = { ...someObject };

// const yetAnotherObject = {};
// for (const key in someObject) {
//   yetAnotherObject[key] = someObject[key];
// }

// console.log(someObject === yetAnotherObject);
// console.log(someObject, yetAnotherObject);

// let bob = "Happy";
// let bobby = bob;

// bob = "Sad";

// console.log(bob, bobby);

// const bobObj = { status: "happy" };
// const bobbyObj = { ...bobObj };

// bobObj.status = "sad";

// console.log(bobObj, bobbyObj);

// const someList = [1, 2, 3, 4, 5];

// const purePop = (array) => [...array].pop();

// purePop(someList);
// purePop(someList);
// purePop(someList);
// purePop(someList);
// const poppedList = purePop(someList);

// console.log(someList, poppedList);

const someFunkyList = [
  [1, 2],
  [1, 2],
];
const somePhonkyList = [...someFunkyList];

// somePhonkyList.push([1, 2]);
somePhonkyList[0][0] = 6;

console.log(someFunkyList, somePhonkyList);
