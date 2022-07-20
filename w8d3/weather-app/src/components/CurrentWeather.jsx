export default function CurrentWeather(props) {
  const { weatherData } = props;
  const temperature = Math.round(weatherData.main.temp - 273.15);
  const condition = weatherData.weather[0].description;
  const city = weatherData.name;
  return (
    <section className="CurrentWeather">
      <h1>{city}</h1>
      <p>{condition}</p>
      <p>{temperature}</p>
    </section>
  );
}
