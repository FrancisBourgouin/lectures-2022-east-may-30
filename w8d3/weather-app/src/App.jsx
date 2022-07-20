import { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import CityForm from "./components/CityForm";
import CityList from "./components/CityList";
import CurrentWeather from "./components/CurrentWeather";

import "./App.css";
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 09fd719b4b698ec0260e424f83378e3d

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityListData, setCityListData] = useState([]);

  const fetchWeatherData = (cityName) => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;
    axios
      .get(url)
      .then((res) => {
        !cityListData.includes(cityName) && setCityListData([...cityListData, cityName]);
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setWeatherData(null);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <CityForm onSubmit={(formData) => fetchWeatherData(formData.city)} />
        <CityList cityListData={cityListData} fetchWeatherData={fetchWeatherData} />
        {weatherData && <CurrentWeather weatherData={weatherData} />}
      </main>
    </div>
  );
}

export default App;
