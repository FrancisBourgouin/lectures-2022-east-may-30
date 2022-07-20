export default function CityList(props) {
  const { cityListData, fetchWeatherData } = props;

  const parsedButtons = cityListData.map((city) => (
    <button onClick={() => fetchWeatherData(city)} key={city}>
      {city}
    </button>
  ));
  return <section className="CityList">{parsedButtons}</section>;
}
