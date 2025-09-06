import { useState } from 'react'
import WeatherApp from './WeatherApp';


function App() {
  let handleClick = () => {
  alert("Button Clicked")
};
  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App
