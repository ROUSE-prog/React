import React, { useState, useEffect } from 'react';

const EightHourForecast = ({ latitude, longitude }) => {

  const apiKey = '6800caad12320e5ffdaba91392446b18';
  const [forecastData, setForecastData] = useState([]);

  const fetchForecastData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily,alerts&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    setForecastData(data.hourly.slice(0, 8));
  };

  useEffect(() => {
    fetchForecastData();
  }, [latitude, longitude]);

  return (
    <div>
      <h2>8-Hour Forecast</h2>
      <div>
        {forecastData.map((hour, index) => (
          <div key={index}>
            <p>Time: {new Date(hour.dt * 1000).toLocaleTimeString()}</p>
            <p>Temperature: {hour.temp}°C</p>
            <p>Weather: {hour.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EightHourForecast;
