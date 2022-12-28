import { useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [city, setCity] = useState("");

  const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=427fd24df7f7636286ec0981bc18201b&units=metric`;

  const forecust_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=427fd24df7f7636286ec0981bc18201b&units=metric`;

  const searchCity = (event) => {
    if (event.key === "Enter") {
      axios.get(weather_url).then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      });
      axios.get(forecust_url).then((response) => {
        setForecastData(response.data);
        console.log(response.data);
      });
    }
  };
  return (
    <div className="items-center flex flex-col justify-center bg-gray-900 h-screen">
      <div className="flex flex-col items-center p-8 rounded-md my-4 sm:px-12  text-gray-100 bg-slate-500 md:w-2/4 w-full h-screen">
        <div className="text-center">
          <div className="py-8">
            <input
              className="text-center border-2 border-gray-700 rounded-lg w-72 text-slate-800"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              onKeyPress={searchCity}
              placeholder="Enter a city"
            />
            <p className="text-sm text-gray-400">Today</p>
          </div>
        </div>
        <div className="text-center pt-6">
          {weatherData.weather ? (
            <>
              <h1>{weatherData.weather[0].description}</h1>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=""
              />
            </>
          ) : null}
          {weatherData.main ? (
            <>
              <h1 className="mb-2 text-5xl">
                {Math.round(weatherData.main.temp)}°C
              </h1>
              <h1 className="mb-2 text-xl">
                Humidity {weatherData.main.humidity}%
              </h1>
            </>
          ) : null}
        </div>

        <div className="flex space-x-4">
          <div className="text-center pt-6">
            {forecastData.list ? (
              <>
                <h1 className="mb-2 text-l">{forecastData.list[0].dt_txt}</h1>
                <img
                  src={`http://openweathermap.org/img/wn/${forecastData.list[0].weather[0].icon}@2x.png`}
                  alt=""
                />
                <h1 className="mb-2 text-l">
                  {Math.round(forecastData.list[0].main.temp)}°C
                </h1>
              </>
            ) : null}
          </div>
          <div className="text-center pt-6">
            {forecastData.list ? (
              <>
                <h1 className="mb-2 text-l">{forecastData.list[1].dt_txt}</h1>
                <img
                  src={`http://openweathermap.org/img/wn/${forecastData.list[1].weather[0].icon}@2x.png`}
                  alt=""
                />
                <h1 className="mb-2 text-l">
                  {Math.round(forecastData.list[1].main.temp)}°C
                </h1>
              </>
            ) : null}
          </div>
          <div className="text-center pt-6">
            {forecastData.list ? (
              <>
                <h1 className="mb-2 text-l">{forecastData.list[2].dt_txt}</h1>
                <img
                  src={`http://openweathermap.org/img/wn/${forecastData.list[2].weather[0].icon}@2x.png`}
                  alt=""
                />
                <h1 className="mb-2 text-l">
                  {Math.round(forecastData.list[2].main.temp)}°C
                </h1>
              </>
            ) : null}
          </div>
          <div className="text-center pt-6">
            {forecastData.list ? (
              <>
                <h1 className="mb-2 text-l">{forecastData.list[3].dt_txt}</h1>
                <img
                  src={`http://openweathermap.org/img/wn/${forecastData.list[3].weather[0].icon}@2x.png`}
                  alt=""
                />
                <h1 className="mb-2 text-l">
                  {Math.round(forecastData.list[3].main.temp)}°C
                </h1>
              </>
            ) : null}
          </div>
          <div className="text-center pt-6">
            {forecastData.list ? (
              <>
                <h1 className="mb-2 text-l">{forecastData.list[4].dt_txt}</h1>
                <img
                  src={`http://openweathermap.org/img/wn/${forecastData.list[4].weather[0].icon}@2x.png`}
                  alt=""
                />
                <h1 className="mb-2 text-l">
                  {Math.round(forecastData.list[4].main.temp)}°C
                </h1>
              </>
            ) : null}
          </div>
        </div>
        <p className="mt-8 font-light">PoweredBy OpenWeather</p>
      </div>
    </div>
  );
}

export default App;
