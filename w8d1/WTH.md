# What the potato ?

- When to pass anonymous vs reference
- useTransition?
- Selectors
- pop

```jsx
const someArray = [1, 2, 3];

someArray.pop();

console.log(someArray); // => [1,2]

const tempArray = [...someArray];
tempArray.pop();
return tempArray;
```

```jsx
const logMessage = (message) => console.log(message);

const logMessageMultipleTimes = (message, amount) => {
  for (let i = 0; i < amount; i++) {
    console.log(message);
  }
};

const logMessageTenTimes = (message) => logMessageMultipleTimes(message, 10);

const iterateAndDoSomething = (list, action) => {
  for (const element of list) {
    action(element);
  }
};

iterateAndDoSomething([1, 2, 3], logMessage);
iterateAndDoSomething([1, 2, 3], (message) => logMessage(message + message));

iterateAndDoSomething([1, 2, 3], (message) => logMessageMultipleTimes(message, 10));
iterateAndDoSomething([1, 2, 3], logMessageTenTimes);
```

DayList

.map(<DayListItem setDay={() => setDay(day)}>)

DayListItem

    onClick={setDay}
    document.addEventListener('click', callback)
