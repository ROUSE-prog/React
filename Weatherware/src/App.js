import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './App.css';
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
      <div className={theme === 'dark' ? styles.light : styles.dark}>
        
        <div className="container mx-auto">
          <SearchBar setLocation={setLocation} />
          <WeatherDisplay location={location} onTemperatureUpdate={handleTemperatureUpdate} />
    <WardrobeSuggestion temperature={temperature} />
    <ThemeToggle />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
