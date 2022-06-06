const bob = 5;

// throw new Error("TYPE ERROR!@");

console.log("hello!");

const changeBob = () => (bob = 10);
try {
  changeBob();
  bob = 10;
} catch (error) {
  console.log("OMG");
}
