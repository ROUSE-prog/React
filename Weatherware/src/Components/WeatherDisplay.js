import React, { useState, useEffect } from 'react';
import styles from './WeatherDisplay.module.css';

const WeatherDisplay = ({ location, onTemperatureUpdate }) => {
  const apiKey = '6800caad12320e5ffdaba91392446b18';
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  const displayWeatherData = () => {
    if (weatherData && weatherData.sys) {
      const fahrenheitTemp = Math.round((weatherData.main.temp * 9) / 5 + 32);
      const fahrenheitFeelsLike = Math.round((weatherData.main.feels_like * 9) / 5 + 32);
      const celsius = Math.round(weatherData.main.temp);
      const feelsLikeCelsius = Math.round(weatherData.main.feels_like);

      onTemperatureUpdate(fahrenheitTemp);

      return (
        <div>
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <h3>{weatherData.weather[0].main}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {fahrenheitTemp}°F / {celsius}°C</p>
          <p>Feels like: {fahrenheitFeelsLike}°F / {feelsLikeCelsius}°C</p>
        </div>
      );
    } else {
      return <p>Loading weather data...</p>;
    }
  };

  return (
    <div className={styles.weatherContainer}>
      {displayWeatherData()}
    </div>
  );
};

export default WeatherDisplay;
