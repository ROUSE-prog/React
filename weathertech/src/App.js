import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import styles from './App.module.css';
import SearchBar from './Components/SearchBar';
import WeatherDisplay from './Components/WeatherDisplay';
import WardrobeSuggestion from './Components/WardrobeSuggestion';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [location, setLocation] = useState('New York');
  const [temperature, setTemperature] = useState(null);

  const handleTemperatureUpdate = (temp) => {
    setTemperature(temp);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleSearch = (location) => {
    setLocation(location);
  };

  const updateTemperature = (newTemperature) => {
    setTemperature(newTemperature);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? styles.light : styles.dark}>
        <ThemeToggle />
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Weatherware</h1>
          <SearchBar setLocation={setLocation} />
          <WeatherDisplay location={location} onTemperatureUpdate={handleTemperatureUpdate} />
    <WardrobeSuggestion temperature={temperature} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
