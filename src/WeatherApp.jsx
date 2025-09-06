// Import useState hook to manage component state
import { useState } from "react"; 
// Import SearchBox component for entering city names
import SearchBox from "./SearchBox"; 
// Import InfoBox component to display weather details
import InfoBox from "./InfoBox"; 

// Main WeatherApp component
export default function WeatherApp() {
  // Initialize state to hold weather data for a city
  const [weatherData, setWeatherData] = useState({
    city: "New York",       // Default city
    temperature: 25,        // Current temperature in °C
    weather: "Sunny",       // Weather description
    temp_min: 20,           // Minimum temperature
    temp_max: 30,           // Maximum temperature
    humidity: 50,           // Humidity percentage
    wind_speed: 5,          // Wind speed in m/s
    feels_like: 27,         // Feels like temperature
  });

  // Function to update weather data state (not strictly necessary here since we can pass setWeatherData directly)
  let updateWeather = (info) => {
    setWeatherData(info); // Update state with new weather info
  }

  // JSX rendering
  return (
    <div style={{ textAlign: "center" }}> {/* Center all content */}
      <h1>Weather App</h1> {/* App title */}
      <SearchBox updateWeather={setWeatherData} /> {/* Pass state updater to SearchBox so it can change weather data */}
      <InfoBox info={weatherData} /> {/* Display current weather information using InfoBox */}

      <i>--Created By <b>&hearts;Asad Jawaid&hearts;</b></i> {/* Footer with creator name */}
    </div>
  );
}
