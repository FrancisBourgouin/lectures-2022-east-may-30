# Quiz App!

View multiple questions, and answer them one at a time, and say wow when we have the right answer

- What is the hottest planet in the solar system? Venus
- What is the capital of Toronto? T
- What is the powerhouse of the cell ? Mitochondria
- How mant stomachs do cows have? 4

# Data Structures

# CurrentQuestion

```jsx
const currentQuestion = 0;
```

# Points!

```jsx
const points = 0;
```

# Question

```jsx
  const question = {
    id:0
    question:"",
    answer:""
  }
```

# QuestionList

```jsx
  const listOfQuestions = [question, question, ...]
```

# Wow result

```jsx
const wowApi = [
  {
    movie: "Hall Pass",
    year: 2011,
    release_date: "2011-02-25",
    director: "Peter Farrelly and Bobby Farrelly",
    character: "Rick Mills",
    movie_duration: "01:51:35",
    timestamp: "00:05:08",
    full_line: "Wow. That's a biggie. Happy birthday.",
    current_wow_in_movie: 1,
    total_wows_in_movie: 6,
    poster:
      "https://images.ctfassets.net/bs8ntwkklfua/6jFEUPmYiKifaTuC2cugm8/22087834d091445fc9393cdd9163a901/Hall_Pass_Poster.jpg",
    video: {
      "1080p":
        "https://videos.ctfassets.net/bs8ntwkklfua/ZBrUvZOgDzQ9FkWyj1dbn/467fde106da208450dc7a266915888aa/Hall_Pass_Wow_1_1080p.mp4",
      "720p":
        "https://videos.ctfassets.net/bs8ntwkklfua/ALGqFBviLDFSaNNHqqjEC/554c2fd092d0588c0609786357df4b3c/Hall_Pass_Wow_1_720p.mp4",
      "480p":
        "https://videos.ctfassets.net/bs8ntwkklfua/7q4ZMkqndNER6h0DKCkUqY/85a498aaaf9825d207b023c41dd28cd6/Hall_Pass_Wow_1_480p.mp4",
      "360p":
        "https://videos.ctfassets.net/bs8ntwkklfua/4tGd503OwRZ2DYcMkE3Nma/17cdaa22b58e754287efdc629f09a6a9/Hall_Pass_Wow_1_360p.mp4",
    },
    audio:
      "https://assets.ctfassets.net/bs8ntwkklfua/7jS4fqmFWEG0ViDyzQC6hc/4e02bbf0ac0dfef2c0fee972c05fd376/Hall_Pass_Wow_1.mp3",
  },
];

const audioSrc = wowApi[0].audio;

const sound = new Audio(url);
sound.play();
```

# HTML Structure

- body
  - header
    - h1 title
  - main
    - h1 currentScore!
    - form
      - p question
      - input answer
      - button submit

# Component Structure

- App
  - Header
  - QuestionForm
