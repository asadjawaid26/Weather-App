import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    city: "New York",
    temperature: 25,
    weather: "Sunny",
    temp_min: 20,
    temp_max: 30,
    humidity: 50,
    wind_speed: 5,
    feels_like: 27,
  });

  let updateWeather = (info) => {
    setWeatherData(info);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateWeather={setWeatherData} />
      <InfoBox info={weatherData} />
    </div>
  );
}
