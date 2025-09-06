import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "371b50715ac6b4bb1ac62a66d4fb74c7";

export default function SearchBox({ updateWeather }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let getWeather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();

      let weatherInfo = {
        city: data.name,
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        feels_like: data.main.feels_like,
        weather: data.weather[0].description,
      };

      updateWeather(weatherInfo);
    } catch (err) {
      throw err;
    }
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (city.trim() === "") {
        alert("Please enter a city!");
        return;
      }
      await getWeather();
      setCity("");
      setError("");
    } catch (err) {
      setError(true);

    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <TextField
        id="city"
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <br />
      <br />
      <Button variant="contained" type="submit" endIcon={<SendIcon />}>
        Search
      </Button>
      {error && <p style={{ color: "red" }}>No such Place exist in our API</p>}
    </form>
  );
}
