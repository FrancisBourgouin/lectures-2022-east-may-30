# Weather App

# Project Description

Fetches the weather based on a city, creates a button for new cities, fetches user position on first load

# User Stories

- User can enter a city in the form and view the weather
- User can click on a button and view the weather
- User can see their local weather on first load

# Packages

## Frontend

- CRA (Vite)
- Sass
- Axios

## Backend

- Axios ?
- Express

# Data structure

## City

```jsx
const city = "Toronto";
```

## Cities

```jsx
const cities = [city, city];
```

## Weather

```jsx
// Temperature : weatherResponse.main.temp
// Weather condition : weatherResponse.weather[0].description
// City : weatherResponse.name

const weatherResponse = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};
```

# Mock Data

# HTML Structure

- body
  - header
    - h1 title
  - main
    - form
      - input
      - button
    - section
      - button
    - section
      - h1 name
      - p conditions
      - p temperature

# Component Structure

# Steps

# APIs

- openWeatherAPI
