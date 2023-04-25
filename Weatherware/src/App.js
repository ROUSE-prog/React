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
  const [location, setLocation] = useState('Where are you?');
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState(null);

  const handleTemperatureUpdate = (temp) => {
    setTemperature(temp);
    setCondition(condition);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className={theme === 'dark' ? styles.light : styles.dark}>
    <div className="app-container">
    <WeatherDisplay location={location} onTemperatureUpdate={handleTemperatureUpdate} />
    <SearchBar setLocation={setLocation} />
    <WardrobeSuggestion temperature={temperature} condition={condition}/>
    </div>
    <ThemeToggle />
    </div>
   </ThemeContext.Provider>
  );
};

export default App;
