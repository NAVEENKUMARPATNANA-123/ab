// function abc(amount,callback){
//     if (amount<=0){
//         callback("Error");
//     }
//     else{
//         callback("Success");

    
//     }
//     console.log("Thank you");
// }
// function xy(a){
//     console.log(a);

// }
// abc(34,xy)

// const API_KEY = "1202f1cb77192593d538767d4607b758";

// function fetchWeatherCallback(city, callback) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
//     fetch(url)
//         .then(response => response.json())
//         .then(data => callback(null, data))   
//         .catch(err => callback(err, null));   // error
// }

// let city = "Srikakulam";

// fetchWeatherCallback(city, (err, data) => {
//     if (err) {
//         console.error("Error fetching weather:", err);
//     } else if (data.cod !== 200) {  // handle OpenWeather errors
//         console.error(`API Error: ${data.message}`);
//     } else {
//         console.log(`Callback → Weather in ${data.name}: ${data.main.temp}°C`);
//     }
// });

function getWeatherWithCallback(callback) {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=-0.1276&current_weather=true")
    .then(response => response.json())
    .then(data => callback(null, data.current_weather.temperature))
    .catch(error => callback(error, null));
}


getWeatherWithCallback((error, temperature) => {
  if (error) {
    console.error("Error fetching weather:", error);
  } else {
    console.log("London Temperature:", temperature, "°C");
  }
});


