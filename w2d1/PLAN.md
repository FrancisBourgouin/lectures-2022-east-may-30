# Drinking beverage function

Considering a beverage mug object, I want to be able to drink from the mug and lower the amount of beverage.

# In / Out

## In

- mug object
  - amount
  - type
  - size of mug
  - starting amount

```js
const someMug = {
  capacity: 500,
  amount: 450,
  type: "mug",
  name: "Muggy",
};
```

- drink function (amount of liquid drank)

```js
const drinkBeverage = (mug, amount) => {};
```

## Out

- modified object

```js
const someMug = {
  capacity: 500,
  amount: 450,
  type: "mug",
  name: "Muggy",
};
// After running once with 450 (with 50ml)
const someMug = {
  capacity: 500,
  amount: 400,
  type: "mug",
  name: "Muggy",
};
```

# Test cases

Happy test

- Check if amount changes when the function is ran

Invalid inputs

- Object same if there is no amount specified in the drink function
- Object same if there is bad amount type specified in the drink function
- SWEAR error if the object is not a valid mug w/ liquid

Boundary

- Object amount should be zero if the amount drank is bigger than remaining
- SWEAR error if mug doesn't have any liquid

```jsx
console.assert;
```
