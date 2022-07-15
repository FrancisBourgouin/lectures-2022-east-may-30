# Custom Hooks

## Today's menu

- Recap of data so far
- Building our app
- Separate rendering from logic
- Create a custom Hook

## Recap - Rules of Hooks

- Only call Hooks from the top-level of a function component or a custom Hook.

  - Cannot be called in React class components, loops, if statement, regular function, in event handlers

- A custom Hook must start with the keyword "use"

  - a custom Hook can call other custom or built-in Hooks.

```js

// allowed?
const TweetList = () => {
  const [user, setUser] = useState(null);

  if (user) {
    useEffect(() => {
      axios.get('/api/tweets/')
      .then(res => console.log(res.data))
    }, [])
  }

  //the is a "hidden" return
}

// allowed?
class Tweet extends React.component {

  render(){
    const [tweets, setTweets] = useState([])

    return(
      <div><h1>Tweets</h1>
    )
  }
}

// allowed?
const useData = () => {
  const [value, setValue] = useState(null)
}

// allowed?
const getTodo = (id) => {
  const [todo, setTodo] = useState([]);
}

```

## Custom Hooks

- React is usually coupling the UI to a component
- Sometimes we just want to use some code logic without tying it to a particular UI
- Custom Hooks allow us to do that

Example of custom hook

- [Custom Hook - Browser Dimensions](https://codesandbox.io/s/custom-hooks-exercise-browser-dimensions-j80xw)

In the example where we used `useEffect` to perform a request to Github and pull out the contributors to the Tweeter repo, the request is actually tied to the component itself. What about is we want to reuse the request?

[api request](https://codesandbox.io/s/api-request-customhook-exercise-pnje8)
