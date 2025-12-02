async function getWeatherWithAsyncAwait() {
  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=-0.1276&current_weather=true");
    const data = await response.json();
    console.log("London Temperature:", data.current_weather.temperature, "°C");
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

getWeatherWithAsyncAwait();
