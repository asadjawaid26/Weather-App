// Import useState hook to manage local component state
import { useState } from "react"; 
// Import MUI Button component
import Button from "@mui/material/Button"; 
// Import MUI TextField component for input
import TextField from "@mui/material/TextField"; 
// Import icon for button
import SendIcon from "@mui/icons-material/Send"; 

// OpenWeatherMap API endpoint and API key
const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
const API_KEY = "371b50715ac6b4bb1ac62a66d4fb74c7"; 

// Functional component for searching city weather
export default function SearchBox({ updateWeather }) { 
  // State to hold user input for city name
  let [city, setCity] = useState(""); 
  // State to track error if city is invalid or not found
  let [error, setError] = useState(false); 

  // Function to fetch weather data from OpenWeatherMap API
  let getWeather = async () => { 
    try {
      // Fetch weather data for the entered city
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      ); 
      let data = await response.json(); // Convert response to JSON

      // Extract relevant weather info into a structured object
      let weatherInfo = {
        city: data.name,                  // City name
        temperature: data.main.temp,      // Current temperature
        temp_min: data.main.temp_min,     // Minimum temperature
        temp_max: data.main.temp_max,     // Maximum temperature
        humidity: data.main.humidity,     // Humidity percentage
        wind_speed: data.wind.speed,      // Wind speed
        feels_like: data.main.feels_like, // Feels like temperature
        weather: data.weather[0].description, // Weather description
      };

      updateWeather(weatherInfo); // Pass weather info to parent component
    } catch (err) {
      throw err; // Throw error to be caught by handleSubmit
    }
  };

  // Handle form submission
  let handleSubmit = async (e) => {
    try {
      e.preventDefault(); // Prevent default form submission
      if (city.trim() === "") { // Check if input is empty
        alert("Please enter a city!");
        return;
      }
      await getWeather(); // Fetch weather data
      setCity(""); // Reset input field
      setError(""); // Clear previous error
    } catch (err) {
      setError(true); // Show error message if city not found
    }
  };

  // Render form
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}> {/* Form container */}
      <TextField
        id="city" // Input field ID
        label="Enter City" // Label displayed above input
        variant="outlined" // Material UI outlined style
        value={city} // Bind input value to state
        onChange={(e) => setCity(e.target.value)} // Update state on typing
        style={{ marginRight: "10px" }} // Margin between input and button
      />
      <br />
      <br />
      <Button 
        variant="contained" // MUI contained button style
        type="submit"       // Form submit button
        endIcon={<SendIcon />} // Add send icon at the end
      >
        Search
      </Button>
      {/* Show error message if city not found */}
      {error && <p style={{ color: "red" }}>No such Place exist in our API</p>}
    </form>
  );
}