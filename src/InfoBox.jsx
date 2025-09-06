import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
  const INIT_IMG_URL =
    "https://plus.unsplash.com/premium_photo-1666241368300-a1115df75b7c?w=1000";

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAINY_URL = "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55fGVufDB8fDB8fHww";


  return (
    <div className="InfoBox">
      <div className="InfoCard">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temperature > 15
                ? HOT_URL
                : COLD_URL
            }
            title={info.weather}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>City: {info.city}{info.humidity > 80
                ? <ThunderstormIcon />
                : info.temperature > 15
                ? <SunnyIcon />
                : <AcUnitIcon />
              }</p>
              <p>Temperature: {info.temperature}°C</p>
              <p>TempMin: {info.temp_min}°C, TempMax: {info.temp_max}°C</p>
              <p>Humidity: {info.humidity}%. Wind Speed: {info.wind_speed} m/s</p>
              <p>
                The Weather can be described as <b>{info.weather}</b> and feels like {info.feels_like}°C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
