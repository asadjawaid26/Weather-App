// Import MUI Card component to create a card layout
import Card from "@mui/material/Card"; 
// Import CardContent to hold the main content inside the card
import CardContent from "@mui/material/CardContent"; 
// Import CardMedia to display an image in the card
import CardMedia from "@mui/material/CardMedia"; 
// Import Typography for text formatting and styles
import Typography from "@mui/material/Typography"; 
// Import custom CSS for styling InfoBox
import "./InfoBox.css"; 
// Import icons for different weather conditions
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; // Rainy weather
import AcUnitIcon from '@mui/icons-material/AcUnit'; // Cold weather
import SunnyIcon from '@mui/icons-material/Sunny'; // Hot/sunny weather

// Define the InfoBox functional component which receives weather info as props
export default function InfoBox({ info }) { 
  // Default image URL (not used in this case, but kept as fallback)
  const INIT_IMG_URL =
    "https://plus.unsplash.com/premium_photo-1666241368300-a1115df75b7c?w=1000";

  // Background image URLs for different weather conditions
  const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"; // Hot weather image
  const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"; // Cold weather image
  const RAINY_URL = "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55fGVufDB8fDB8fHww"; // Rainy weather image

  // Return the JSX to render the InfoBox
  return (
    <div className="InfoBox"> {/* Outer container for InfoBox, styled via CSS */}
      <div className="InfoCard"> {/* Inner container for card alignment and styling */}
        <Card sx={{ maxWidth: 345 }}> {/* MUI Card component with max width 345px */}
          <CardMedia
            sx={{ height: 140 }} // Set fixed height for the image
            image={ // Choose image based on weather condition
              info.humidity > 80
                ? RAINY_URL // If humidity > 80%, show rainy image
                : info.temperature > 15
                ? HOT_URL // Else if temperature > 15°C, show hot image
                : COLD_URL // Else, show cold image
            }
            title={info.weather} // Alt text for the image, describes the weather
          />
          <CardContent> {/* Container for all text content inside the card */}
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {/* Display city name as card title */}
            </Typography>

            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>
                City: {info.city} {/* Display city name again inside body */}
                {info.humidity > 80
                  ? <ThunderstormIcon /> // If humidity > 80%, show thunderstorm icon
                  : info.temperature > 15
                  ? <SunnyIcon /> // If temperature > 15°C, show sunny icon
                  : <AcUnitIcon /> // Else, show cold icon
                }
              </p>
              <p>Temperature: {info.temperature}°C</p> {/* Display current temperature */}
              <p>TempMin: {info.temp_min}°C, TempMax: {info.temp_max}°C</p> {/* Display min and max temperatures */}
              <p>Humidity: {info.humidity}%. Wind Speed: {info.wind_speed} m/s</p> {/* Display humidity and wind speed */}
              <p>
                The Weather can be described as <b>{info.weather}</b> {/* Bold description of weather */}
                and feels like {info.feels_like}°C {/* Display feels like temperature */}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
